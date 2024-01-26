import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./colorPickerPanel.html";
import labelCancelButton from '@salesforce/label/LightningColorPicker.cancelButton';
import labelCustomTab from '@salesforce/label/LightningColorPickerPanel.customTab';
import labelDefaultTab from '@salesforce/label/LightningColorPickerPanel.defaultTab';
import labelDoneButton from '@salesforce/label/LightningColorPicker.doneButton';
import { classSet } from 'lightning/utils';
import { keyCodes } from 'lightning/utilsPrivate';
const i18n = {
  cancelButton: labelCancelButton,
  customTab: labelCustomTab,
  defaultTab: labelDefaultTab,
  doneButton: labelDoneButton
};
const DEFAULT_COLOR = '#000000';
class LightningColorPickerPanel extends LightningElement {
  constructor(...args) {
    super(...args);
    this.currentColor = void 0;
    this._isCustomTabActive = false;
    this._selectedColor = null;
  }
  connectedCallback() {
    this._selectedColor = this.currentColor || DEFAULT_COLOR;
  }
  get i18n() {
    return i18n;
  }
  get computedClassDefault() {
    return classSet({
      'slds-tabs_default__item': true,
      'slds-is-active': !this._isCustomTabActive
    }).toString();
  }
  get computedClassCustom() {
    return classSet({
      'slds-tabs_default__item': true,
      'slds-is-active': this._isCustomTabActive
    }).toString();
  }
  get ariaSelectedDefault() {
    return !this._isCustomTabActive.toString();
  }
  get ariaSelectedCustom() {
    return this._isCustomTabActive.toString();
  }
  handleTabChange(event) {
    event.preventDefault();
    const tabElement = event.currentTarget;
    if (tabElement.classList.contains('slds-is-active')) {
      return;
    }
    this._isCustomTabActive = tabElement.title !== i18n.defaultTab;
  }
  handleUpdateSelectedColor(event) {
    this._selectedColor = event.detail.color;
  }
  dispatchUpdateColorEventWithColor(color) {
    this.dispatchEvent(
    // eslint-disable-next-line lightning-global/no-custom-event-bubbling
    new CustomEvent('updatecolor', {
      composed: true,
      bubbles: true,
      detail: {
        color
      }
    }));
  }
  handleDoneClick() {
    this.dispatchUpdateColorEventWithColor(this._selectedColor);
  }
  handleCancelClick() {
    this.dispatchUpdateColorEventWithColor(this.currentColor);
  }
  handleKeydown(event) {
    if (event.keyCode === keyCodes.escape) {
      event.preventDefault();
      this.dispatchUpdateColorEventWithColor(this.currentColor);
    } else if (event.shiftKey && event.keyCode === keyCodes.tab && event.srcElement.dataset.id === 'color-anchor') {
      event.preventDefault();
      this.template.querySelector('button[name="done"]').focus();
    } else if (!event.shiftKey && event.keyCode === keyCodes.tab && event.srcElement.name === 'done') {
      event.preventDefault();
      this.template.querySelector('lightning-color-picker-custom').focus();
    }
  }
  /*LWC compiler v5.0.0*/
}
_registerDecorators(LightningColorPickerPanel, {
  publicProps: {
    currentColor: {
      config: 0
    }
  },
  track: {
    _isCustomTabActive: 1,
    _selectedColor: 1
  }
});
export default _registerComponent(LightningColorPickerPanel, {
  tmpl: _tmpl,
  sel: "lightning-color-picker-panel",
  apiVersion: 60
});