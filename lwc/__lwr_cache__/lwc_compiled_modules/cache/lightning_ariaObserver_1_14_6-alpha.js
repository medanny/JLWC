import _tmpl from "./ariaObserver.html";
import { registerComponent as _registerComponent } from "lwc";
import { guid, synchronizeAttrs, isNativeComponent } from 'lightning/utilsPrivate';
const CONTENT_SEPARATOR = '\n';
function getAttr(elm, attr) {
  if (elm.tagName.match(/lightning/i)) {
    return elm[attr];
  }
  return elm.getAttribute(attr);
}
function extractElements(root, ids) {
  if (typeof ids !== 'string' || ids === '') {
    return [];
  }
  // We must query the elements in the order of ids, so that
  // the content will be extracted in the correct order.
  return splitIds(ids).map(id => root.querySelector(`#${id}`));
}
function extractContent(elements) {
  return elements.map(element => element.textContent).filter(text => text.length).join(CONTENT_SEPARATOR);
}
function splitIds(ids) {
  return (ids + '').trim().split(/\s+/);
}
function hashIds(ids) {
  return (ids + '').trim().split(/\s+/).reduce((r, v) => {
    r[v] = 1;
    return r;
  }, {});
}

// this method should check each individual id from computedIds
// against the existing value of the attrName on elm, and dupe
// them, and add the new ones.
function addAriaRefWhenNeeded(elm, attrName, computedIds) {
  const newIds = splitIds(computedIds);
  const oldIds = getAttr(elm, attrName) || '';
  const oldIdsHash = hashIds(oldIds);
  const suffix = [];
  for (let i = 0; i < newIds.length; i += 1) {
    if (!oldIdsHash[newIds[i]]) {
      suffix.push(newIds[i]);
    }
  }
  if (suffix.length !== 0) {
    synchronizeAttrs(elm, {
      [attrName]: oldIds + (oldIds.length === 0 ? '' : ' ') + suffix.join(' ')
    });
  }
}

// this method should check each individual id from computedIds
// against the existing value of the attrName on elm, and remove
// them when possible in preparation for some new values.
function removeAriaRefWhenPossible(elm, attrName, computedIds) {
  const newIds = splitIds(computedIds);
  const oldIds = getAttr(elm, attrName) || '';
  const oldIdsHash = hashIds(oldIds);
  const newValues = [];
  for (let i = 0; i < newIds.length; i += 1) {
    if (!oldIdsHash[newIds[i]]) {
      newValues.push(newIds[i]);
    }
  }
  synchronizeAttrs(elm, {
    [attrName]: newValues.join(' ')
  });
}
function createPlaceholderContainer() {
  const container = document.createElement('span');
  container.style.display = 'none';
  container.setAttribute('placeholder-container', '');
  return container;
}
class AriaObserver {
  constructor(component) {
    this.component = component;
    this.template = component.template;
    this.isNative = isNativeComponent(component);
    this.state = {};
    this.liveIds = {};
    this.guid = guid();
    this.placeholderContainer = null;
  }
  connectLiveIdRef(refs, callback) {
    const selector = (refs + '').trim().split(/\s+/).map(ref => `[id*="${ref}"]`).join(',');
    const liveId = {
      selector,
      callback
    };
    this.liveIds[refs] = liveId;
  }
  connect({
    targetSelector,
    attribute,
    id,
    ids
  }) {
    ids = ids || id;
    this.state[attribute] = this.state[attribute] || {};
    const attrState = this.state[attribute];

    // note: we don't support linking to a different targetSelector
    attrState.innerSelector = attrState.innerSelector || targetSelector;

    // removing the old ids if possible before setting the new ones
    if (!this.isNative && attrState.ids) {
      const elm = this.template.querySelector(attrState.innerSelector);
      if (elm) {
        removeAriaRefWhenPossible(elm, attribute, attrState.ids);
      }
    }
    attrState.ids = ids;
    if (this.isNative && !attrState.placeholder) {
      // create placeholder element for copied content
      attrState.placeholder = document.createElement('span');
      attrState.placeholder.id = `auto-link-${attribute}-${this.guid}`;
    }
    if (this.component.isConnected) {
      this.privateUpdate(attribute);
    }
  }
  sync() {
    if (!this.component.isConnected) {
      throw new Error(`Invalid sync invocation. It can only be invoked during renderedCallback().`);
    }
    if (this.isNative && !this.mo) {
      this.privateConnect();
    }
    for (const attrName in this.state) {
      if (Object.prototype.hasOwnProperty.call(this.state, attrName)) {
        this.privateUpdate(attrName);
      }
    }

    // live idRef feature is a no-op in native
    if (!this.isNative) {
      this.privateUpdateLiveIds();
    }
  }
  privateExtractIds(elements) {
    return elements.map(el => {
      return el.getAttribute('id');
    }).join(' ');
  }
  privateUpdateLiveIds() {
    const root = this.template.host.getRootNode();

    // if not connected do nothing
    if (!root) {
      return;
    }
    for (const liveId in this.liveIds) {
      if (Object.prototype.hasOwnProperty.call(this.liveIds, liveId)) {
        const thisId = this.liveIds[liveId];
        if (!thisId.elements) {
          // element refs are cached
          thisId.elements = Array.prototype.slice.call(root.querySelectorAll(thisId.selector));
        }
        const newIds = this.privateExtractIds(thisId.elements);
        // only fire calback if the value changed
        if (newIds !== thisId.ids) {
          thisId.callback(newIds);
          thisId.ids = newIds;
        }
      }
    }
  }
  privateUpdate(attrName) {
    const {
      innerSelector
    } = this.state[attrName];
    const elm = this.template.querySelector(innerSelector);
    if (!elm) {
      return; // nothing to update
    }
    let computedIds;
    if (this.isNative) {
      const {
        ids,
        content,
        placeholder
      } = this.state[attrName];
      const newContent = extractContent(extractElements(this.root, ids));
      if (content !== newContent) {
        this.state[attrName].content = placeholder.textContent = newContent;
      }
      if (!placeholder.parentNode) {
        // create placeholder container at template root, if not already exist
        if (!this.placeholderContainer) {
          this.placeholderContainer = createPlaceholderContainer();
          this.template.appendChild(this.placeholderContainer);
        }

        // inserting the placeholder once
        this.placeholderContainer.appendChild(placeholder);
      }
      computedIds = placeholder.id;
    } else {
      computedIds = this.state[attrName].ids;
    }
    addAriaRefWhenNeeded(elm, attrName, computedIds);
  }
  privateConnect() {
    // caching root ref
    this.root = this.template.host.getRootNode();
    // creating the observer once
    this.mo = new MutationObserver(() => {
      if (!this.component.isConnected) {
        return; // do nothing when the template is not connected
      }
      this.sync();
    });
    this.mo.observe(this.root, {
      characterData: true,
      childList: true,
      subtree: true
    });
  }
  disconnect() {
    // MutationObservers must be disconnected manually when using @lwc/synthetic-shadow
    // https://lwc.dev/guide/composition#:~:text=memory%20leak
    if (this.mo) {
      this.mo.disconnect();
      this.mo = undefined;
    }
  }
}
export default _registerComponent(AriaObserver, {
  tmpl: _tmpl,
  sel: "lightning-aria-observer",
  apiVersion: 60
});