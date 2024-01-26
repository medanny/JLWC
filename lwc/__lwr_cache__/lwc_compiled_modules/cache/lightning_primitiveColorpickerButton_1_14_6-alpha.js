import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./primitiveColorpickerButton.html";
import labelA11yTriggerText from '@salesforce/label/LightningColorPicker.a11yTriggerText';
import { Direction, AutoPosition } from 'lightning/positionLibrary';
import { normalizeBoolean } from 'lightning/utilsPrivate';
const i18n = {
  a11yTriggerText: labelA11yTriggerText
};
class PrimitiveColorpickerButton extends LightningElement {
  constructor(...args) {
    super(...args);
    this._isColorPickerPanelOpen = false;
    this._value = '';
    this._disabled = false;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
  }

  /**
   * If present, the input field is disabled and users cannot interact with it.
   * @type {boolean}
   * @default false
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = normalizeBoolean(value);
  }
  focus() {
    const button = this.template.querySelector('button');
    return button && button.focus();
  }
  blur() {
    const button = this.template.querySelector('button');
    return button && button.blur();
  }
  get colorInputStyle() {
    return `background: ${this.value || '#5679C0'};`;
  }
  handleColorPickerToggleClick(event) {
    event.preventDefault();
    this._isColorPickerPanelOpen = !this._isColorPickerPanelOpen;
    if (this._isColorPickerPanelOpen) {
      this.startColorPickerPositioning();
    } else {
      this.stopColorPickerPositioning();
    }
  }
  startColorPickerPositioning() {
    if (!this._autoPosition) {
      this._autoPosition = new AutoPosition(this);
    }
    this._autoPosition.start({
      target: () => this.template.querySelector('button.slds-color-picker__summary-button'),
      element: () => this.template.querySelector('lightning-color-picker-panel').shadowRoot.querySelector('section'),
      align: {
        horizontal: Direction.Left,
        vertical: Direction.Top
      },
      targetAlign: {
        horizontal: Direction.Left,
        vertical: Direction.Bottom
      },
      autoFlip: true
    });
  }
  stopColorPickerPositioning() {
    if (this._autoPosition) {
      this._autoPosition.stop();
    }
  }
  handleUpdateColorEvent(event) {
    event.stopPropagation();
    const detail = event.detail;
    this._isColorPickerPanelOpen = false;
    this.stopColorPickerPositioning();
    this.dispatchEvent(new CustomEvent('change', {
      detail
    }));
  }
  get i18n() {
    return i18n;
  }
  /*LWC compiler v5.0.0*/
}
PrimitiveColorpickerButton.delegatesFocus = true;
_registerDecorators(PrimitiveColorpickerButton, {
  publicProps: {
    value: {
      config: 3
    },
    disabled: {
      config: 3
    }
  },
  publicMethods: ["focus", "blur"],
  track: {
    _isColorPickerPanelOpen: 1,
    _value: 1,
    _disabled: 1
  }
});
export default _registerComponent(PrimitiveColorpickerButton, {
  tmpl: _tmpl,
  sel: "lightning-primitive-colorpicker-button",
  apiVersion: 60
});