import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./primitiveColorpickerButton.css";

import _implicitScopedStylesheets from "./primitiveColorpickerButton.scoped.css?scoped=true";

import _lightningPrimitiveIcon from "lightning/primitiveIcon";
import _lightningColorPickerPanel from "lightning/colorPickerPanel";
import {registerTemplate} from "lwc";
const stc0 = {
  "slds-button": true,
  "slds-color-picker__summary-button": true,
  "slds-button_icon": true,
  "slds-button_icon-more": true
};
const stc1 = {
  "slds-swatch": true
};
const stc2 = {
  "data-id": "thumbnail"
};
const stc3 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 2
};
const stc4 = {
  props: {
    "iconName": "utility:down",
    "svgClass": "slds-button__icon slds-button__icon_small",
    "variant": "bare"
  },
  key: 3
};
const stc5 = {
  classMap: {
    "slds-assistive-text": true,
    "a11y-color-value": true
  },
  key: 4
};
const stc6 = {
  "color-picker-panel": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, d: api_dynamic_text, t: api_text, h: api_element, c: api_custom_element} = $api;
  const {_m0, _m1} = $ctx;
  return [api_element("button", {
    classMap: stc0,
    attrs: {
      "type": "button",
      "disabled": $cmp.disabled ? "" : null
    },
    key: 0,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleColorPickerToggleClick))
    }
  }, [api_element("span", {
    classMap: stc1,
    style: $cmp.colorInputStyle,
    attrs: stc2,
    key: 1
  }, [api_element("span", stc3, [api_text(api_dynamic_text($cmp.i18n.a11yTriggerText))])]), api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, stc4), api_element("span", stc5, [api_text(api_dynamic_text($cmp.value))])]), $cmp._isColorPickerPanelOpen ? api_custom_element("lightning-color-picker-panel", _lightningColorPickerPanel, {
    classMap: stc6,
    props: {
      "currentColor": $cmp.value
    },
    key: 5,
    on: {
      "updatecolor": _m1 || ($ctx._m1 = api_bind($cmp.handleUpdateColorEvent))
    }
  }) : null];
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
tmpl.stylesheetToken = "lwc-1ob50kcdi1r";
tmpl.legacyStylesheetToken = "lightning-primitiveColorpickerButton_primitiveColorpickerButton";
freezeTemplate(tmpl);
