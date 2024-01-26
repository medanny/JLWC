import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./treeItem.css";

import _implicitScopedStylesheets from "./treeItem.scoped.css?scoped=true";

import _lightningTreeItem from "lightning/treeItem";
import _lightningPrimitiveIcon from "lightning/primitiveIcon";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<span class="slds-assistive-text${0}"${2}>:</span>`;
const $fragment2 = parseFragment`<span class="slds-assistive-text${0}"${2}>:</span>`;
const stc0 = [];
const stc1 = {
  "slds-tree__item": true
};
const stc2 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 5
};
const stc3 = {
  classMap: {
    "slds-has-flexi-truncate": true
  },
  key: 6
};
const stc4 = {
  "slds-tree__item-label": true,
  "slds-truncate": true
};
const stc5 = {
  "slds-tree__item-meta": true,
  "slds-truncate": true
};
const stc6 = {
  attrs: {
    "role": "group"
  },
  key: 16
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {k: api_key, c: api_custom_element, i: api_iterator, b: api_bind, d: api_dynamic_text, t: api_text, h: api_element, st: api_static_fragment, f: api_flatten} = $api;
  const {_m0} = $ctx;
  return api_flatten([$cmp.isRoot ? api_iterator($cmp.children, function (item, index) {
    return [item.node.isLeaf ? api_custom_element("lightning-tree-item", _lightningTreeItem, {
      attrs: {
        "data-key": item.node.key
      },
      props: {
        "role": "treeitem",
        "nodeKey": item.node.key,
        "ariaSelected": item.selected,
        "ariaLevel": item.node.level,
        "ariaDisabled": item.node.isDisabled,
        "label": item.node.label,
        "href": item.node.href,
        "metatext": item.node.metatext,
        "nodeRef": item.node.nodeRef,
        "isExpanded": item.node.isExpanded,
        "isDisabled": item.node.isDisabled,
        "focusedChild": item.node.focusedChild,
        "nodename": item.node.name,
        "isLeaf": item.node.isLeaf,
        "childItems": item.node.children
      },
      key: api_key(0, item.node.key)
    }) : null, !item.node.isLeaf ? api_custom_element("lightning-tree-item", _lightningTreeItem, {
      attrs: {
        "data-key": item.node.key
      },
      props: {
        "role": "treeitem",
        "nodeKey": item.node.key,
        "ariaSelected": item.selected,
        "ariaLevel": item.node.level,
        "label": item.node.label,
        "href": item.node.href,
        "metatext": item.node.metatext,
        "nodeRef": item.node.nodeRef,
        "isExpanded": item.node.isExpanded,
        "isDisabled": item.node.isDisabled,
        "focusedChild": item.node.focusedChild,
        "nodename": item.node.name,
        "isLeaf": item.node.isLeaf,
        "childItems": item.node.children,
        "ariaLabel": item.node.label,
        "ariaExpanded": item.node.strexpanded,
        "ariaDisabled": item.node.isDisabled
      },
      key: api_key(1, item.node.key)
    }) : null];
  }) : stc0, !$cmp.isRoot ? api_element("div", {
    classMap: stc1,
    key: 2,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleClick))
    }
  }, [api_element("button", {
    className: $cmp.computedButtonClass,
    attrs: {
      "type": "button",
      "tabindex": "-1",
      "aria-hidden": "true",
      "title": $cmp.buttonLabel
    },
    key: 3
  }, [api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
    props: {
      "iconName": $cmp.computedIconName,
      "variant": "bare",
      "svgClass": "slds-button__icon slds-button__icon_small"
    },
    key: 4
  }), api_element("span", stc2, [api_text(api_dynamic_text($cmp.buttonLabel))])]), api_element("span", stc3, [$cmp.isDisabled ? api_element("span", {
    classMap: stc4,
    attrs: {
      "title": $cmp.label
    },
    key: 7
  }, [api_text(api_dynamic_text($cmp.label))]) : null, $cmp.isDisabled ? $cmp.metatext ? api_element("span", {
    classMap: stc5,
    attrs: {
      "title": $cmp.metatext
    },
    key: 8
  }, [api_static_fragment($fragment1(), 10), api_text(api_dynamic_text($cmp.metatext))]) : null : null, !$cmp.isDisabled ? api_element("a", {
    attrs: {
      "href": $cmp.href,
      "tabindex": "-1",
      "role": "presentation"
    },
    key: 11
  }, [api_element("span", {
    classMap: stc4,
    attrs: {
      "title": $cmp.label
    },
    key: 12
  }, [api_text(api_dynamic_text($cmp.label))]), $cmp.metatext ? api_element("span", {
    classMap: stc5,
    attrs: {
      "title": $cmp.metatext
    },
    key: 13
  }, [api_static_fragment($fragment2(), 15), api_text(api_dynamic_text($cmp.metatext))]) : null]) : null])]) : null, !$cmp.isRoot ? $cmp.showExpanded ? api_element("div", stc6, api_iterator($cmp.children, function (item) {
    return [item.node.isLeaf ? api_custom_element("lightning-tree-item", _lightningTreeItem, {
      attrs: {
        "data-key": item.node.key
      },
      props: {
        "role": "treeitem",
        "nodeKey": item.node.key,
        "ariaSelected": item.selected,
        "ariaLevel": item.node.level,
        "ariaDisabled": item.node.isDisabled,
        "label": item.node.label,
        "href": item.node.href,
        "metatext": item.node.metatext,
        "nodeRef": item.node.nodeRef,
        "isExpanded": item.node.isExpanded,
        "isDisabled": item.node.isDisabled,
        "focusedChild": item.node.focusedChild,
        "nodename": item.node.name,
        "isLeaf": item.node.isLeaf,
        "childItems": item.node.children
      },
      key: api_key(17, item.node.key)
    }) : null, !item.node.isLeaf ? api_custom_element("lightning-tree-item", _lightningTreeItem, {
      attrs: {
        "data-key": item.node.key
      },
      props: {
        "role": "treeitem",
        "nodeKey": item.node.key,
        "ariaSelected": item.selected,
        "ariaLevel": item.node.level,
        "ariaDisabled": item.node.isDisabled,
        "label": item.node.label,
        "href": item.node.href,
        "metatext": item.node.metatext,
        "nodeRef": item.node.nodeRef,
        "isExpanded": item.node.isExpanded,
        "isDisabled": item.node.isDisabled,
        "focusedChild": item.node.focusedChild,
        "nodename": item.node.name,
        "isLeaf": item.node.isLeaf,
        "childItems": item.node.children,
        "ariaLabel": item.node.label,
        "ariaExpanded": item.node.strexpanded
      },
      key: api_key(18, item.node.key)
    }) : null];
  })) : null : null]);
  /*LWC compiler v5.0.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-3ni703mjimo";
tmpl.legacyStylesheetToken = "lightning-treeItem_treeItem";
freezeTemplate(tmpl);
