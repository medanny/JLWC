import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./progressBar.html";
import labelProgress from '@salesforce/label/LightningProgressBar.progress';
import { classSet } from 'lightning/utils';
import { normalizeString as normalize } from 'lightning/utilsPrivate';
import { numberFormat } from 'lightning/internationalizationLibrary';

// Temporary workaround until we get real label support. New label entries must
// also be added to the static `labels` prop inside the class.
// https://git.soma.salesforce.com/raptor/raptor/issues/196
const i18n = {
  progress: labelProgress
};
const DEFAULT_SIZE = 'medium';
const DEFAULT_VARIANT = 'base';

/**
 * Displays a horizontal progress bar from left to right to indicate the progress of an operation.
 */
class LightningProgressBar extends LightningElement {
  constructor(...args) {
    super(...args);
    this.privateVariant = DEFAULT_VARIANT;
    this.privateSize = DEFAULT_SIZE;
    /**
     * The percentage value of the progress bar.
     * @type {number}
     * @default 0
     */
    this.value = 0;
  }
  /**
   * The variant changes the appearance of the progress bar.
   * Accepted variants include base or circular.
   * This value defaults to base.
   *
   * @type {string}
   * @default base
   */
  get variant() {
    return this.privateVariant;
  }
  set variant(value) {
    this.privateVariant = normalize(value, {
      fallbackValue: DEFAULT_VARIANT,
      validValues: ['base', 'circular']
    });
  }

  /**
   * The size of the progress bar.
   * Valid values are x-small, small, medium, and large.
   * The default value is medium.
   * @type {string}
   * @default medium
   */
  get size() {
    return this.privateSize;
  }
  set size(value) {
    this.privateSize = normalize(value, {
      fallbackValue: DEFAULT_SIZE,
      validValues: ['x-small', 'small', 'medium', 'large']
    });
  }
  get ariaBusy() {
    const value = this.percentValue;
    if (value > 0 && value < 100) {
      return 'true';
    }
    return null;
  }
  get computedClass() {
    const {
      size,
      variant
    } = this;
    const classes = classSet('slds-progress-bar');
    classes.add(`slds-progress-bar_${size}`);
    if (variant === 'circular') {
      classes.add('slds-progress-bar_circular');
    }
    return classes.toString();
  }
  get percentValue() {
    const {
      value
    } = this;
    if (!value || value <= 0) {
      return 0;
    }
    if (value >= 100) {
      return 100;
    }
    return Math.round(value);
  }
  get computedStyle() {
    return `width: ${this.percentValue}%;`;
  }
  get assistiveText() {
    const formattedPercent = numberFormat({
      style: 'percent'
    }).format(this.percentValue / 100);
    return `${i18n.progress} ${formattedPercent}`;
  }
  /*LWC compiler v5.0.0*/
}
_registerDecorators(LightningProgressBar, {
  publicProps: {
    value: {
      config: 0
    },
    variant: {
      config: 3
    },
    size: {
      config: 3
    }
  },
  track: {
    privateVariant: 1,
    privateSize: 1
  }
});
export default _registerComponent(LightningProgressBar, {
  tmpl: _tmpl,
  sel: "lightning-progress-bar",
  apiVersion: 60
});