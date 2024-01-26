import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./spinner.html";
import { classSet } from 'lightning/utils';
import { normalizeString as normalize } from 'lightning/utilsPrivate';

/**
 * Displays an animated spinner.
 */
class LightningSpinner extends LightningElement {
  constructor(...args) {
    super(...args);
    /**
     * The alternative text used to describe the reason for the wait and need for a spinner.
     * @type {string}
     */
    this.alternativeText = void 0;
    /**
     * The size of the spinner. Accepted sizes are small, medium, and large. This value defaults to medium.
     * @type {string}
     * @default medium
     */
    this.size = 'medium';
    /**
     * The variant changes the appearance of the spinner.
     * Accepted variants include base, brand, and inverse. The default is base.
     * @type {string}
     * @default base
     */
    this.variant = void 0;
    this._altText = '';
  }
  connectedCallback() {
    this.classList.add('slds-spinner_container');
    this.template.addEventListener('mousewheel', this.stopScrolling);
    this.template.addEventListener('touchmove', this.stopScrolling);
  }
  renderedCallback() {
    // [W-10320761] We set the _altText in the next tick because screen readers are not reading out
    // the text when the text along the aria-live container is inserted into the DOM together.
    // It is only working when only aria-live container is setup on load and later the content changes
    // eslint-disable-next-line @lwc/lwc/no-async-operation
    setTimeout(() => {
      this._altText = this.alternativeText;
    }, 0);
  }
  get normalizedVariant() {
    return normalize(this.variant, {
      fallbackValue: 'base',
      validValues: ['base', 'brand', 'inverse']
    });
  }
  get normalizedSize() {
    return normalize(this.size, {
      fallbackValue: 'medium',
      validValues: ['small', 'medium', 'large']
    });
  }
  get computedClass() {
    const {
      normalizedVariant,
      normalizedSize
    } = this;
    const classes = classSet('slds-spinner');

    // add variant-specific class
    if (normalizedVariant !== 'base') {
      classes.add(`slds-spinner_${normalizedVariant}`);
    }
    // add size-specific class
    classes.add(`slds-spinner_${normalizedSize}`);
    return classes.toString();
  }

  // alternativeText validation
  get validAlternativeText() {
    const hasAlternativeText = !!this.alternativeText;

    // if we have an empty value output a console warning
    if (!hasAlternativeText) {
      // eslint-disable-next-line no-console
      console.warn(`<lightning-spinner> The alternativeText attribute should not be empty. Please add a description of what is causing the wait.`);
    }
    return hasAlternativeText;
  }

  // prevent scrolling
  stopScrolling(event) {
    event.preventDefault();
  }
  /*LWC compiler v5.0.0*/
}
_registerDecorators(LightningSpinner, {
  publicProps: {
    alternativeText: {
      config: 0
    },
    size: {
      config: 0
    },
    variant: {
      config: 0
    }
  },
  fields: ["_altText"]
});
export default _registerComponent(LightningSpinner, {
  tmpl: _tmpl,
  sel: "lightning-spinner",
  apiVersion: 60
});