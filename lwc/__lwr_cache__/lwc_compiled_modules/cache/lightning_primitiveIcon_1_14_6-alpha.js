import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./primitiveIcon.html";
import { classSet } from 'lightning/utils';
import { normalizeString as normalize } from 'lightning/utilsPrivate';
import standardTemplate from './primitiveIcon.html';
import { getName, isValidName, polyfill } from 'lightning/iconUtils';
import dir from '@salesforce/i18n/dir';
import { fetchIconLibrary, hasIconLibrary, getIconLibrary } from './fetch';
class LightningPrimitiveIcon extends LightningElement {
  constructor(...args) {
    super(...args);
    this.src = void 0;
    this.svgClass = void 0;
    this.size = 'medium';
    this.variant = void 0;
    this.iconLibrary = null;
    this._iconName = null;
  }
  get iconName() {
    return this._iconName;
  }
  set iconName(value) {
    if (value !== this._iconName) {
      this._iconName = value;
      this.requestIconTemplates();
    }
  }
  get category() {
    if (isValidName(this._iconName)) {
      const [spriteName] = this._iconName.split(':');
      return spriteName;
    }
    return null;
  }
  get isReady() {
    return !!this.iconLibrary;
  }

  // eslint-disable-next-line @lwc/lwc/no-async-await
  async requestIconTemplates() {
    if (hasIconLibrary(dir, this.category)) {
      this.iconLibrary = getIconLibrary(dir, this.category);
      return;
    }
    if (this.category) {
      try {
        this.iconLibrary = null;
        this.iconLibrary = await fetchIconLibrary(dir, this.category);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(`<lightning-primitive-icon> failed to dynamically import icon templates for ${this.category}: ${e.message}`);
      }
    }
  }
  renderedCallback() {
    if (this.isReady || this.iconName !== this.prevIconName) {
      this.prevIconName = this.iconName;
      const svgElement = this.template.querySelector('svg');
      polyfill(svgElement);
    }
  }
  render() {
    if (this.isReady) {
      // If src is present, should use default template reply on given svg src
      if (!this.src) {
        const name = this.iconName;
        if (isValidName(name)) {
          const [spriteName, iconName] = name.split(':');
          const template = this.iconLibrary[`${spriteName}_${iconName}`];
          if (template) {
            return template;
          }
        }
      }
    }
    return standardTemplate;
  }
  get href() {
    return this.src || '';
  }
  get name() {
    return getName(this.iconName);
  }
  get normalizedSize() {
    return normalize(this.size, {
      fallbackValue: 'medium',
      validValues: ['xx-small', 'x-small', 'small', 'medium', 'large']
    });
  }
  get normalizedVariant() {
    // NOTE: Leaving a note here because I just wasted a bunch of time
    // investigating why both 'bare' and 'inverse' are supported in
    // lightning-primitive-icon. lightning-icon also has a deprecated
    // 'bare', but that one is synonymous to 'inverse'. This 'bare' means
    // that no classes should be applied. So this component needs to
    // support both 'bare' and 'inverse' while lightning-icon only needs to
    // support 'inverse'.
    return normalize(this.variant, {
      fallbackValue: '',
      validValues: ['bare', 'error', 'inverse', 'warning', 'success']
    });
  }
  get computedClass() {
    const {
      normalizedSize,
      normalizedVariant
    } = this;
    const classes = classSet(this.svgClass);
    if (normalizedVariant !== 'bare') {
      classes.add('slds-icon');
    }
    switch (normalizedVariant) {
      case 'error':
        classes.add('slds-icon-text-error');
        break;
      case 'warning':
        classes.add('slds-icon-text-warning');
        break;
      case 'success':
        classes.add('slds-icon-text-success');
        break;
      case 'inverse':
      case 'bare':
        break;
      default:
        // if custom icon is set, we don't want to set
        // the text-default class
        if (!this.src) {
          classes.add('slds-icon-text-default');
        }
    }
    if (normalizedSize !== 'medium') {
      classes.add(`slds-icon_${normalizedSize}`);
    }
    return classes.toString();
  }
  /*LWC compiler v5.0.0*/
}
_registerDecorators(LightningPrimitiveIcon, {
  publicProps: {
    src: {
      config: 0
    },
    svgClass: {
      config: 0
    },
    size: {
      config: 0
    },
    variant: {
      config: 0
    },
    iconName: {
      config: 3
    }
  },
  fields: ["iconLibrary", "_iconName"]
});
export default _registerComponent(LightningPrimitiveIcon, {
  tmpl: _tmpl,
  sel: "lightning-primitive-icon",
  apiVersion: 60
});