import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./timepicker.css";

import _implicitScopedStylesheets from "./timepicker.scoped.css?scoped=true";

import _lightningHelptext from "lightning/helptext";
import _lightningBaseCombobox from "lightning/baseCombobox";
import {registerTemplate} from "lwc";
const stc0 = {
  "slds-required": true
};
const stc1 = {
  classMap: {
    "slds-form-element__control": true
  },
  key: 3
};
const stc2 = {
  "slds-form-element__help": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {t: api_text, h: api_element, d: api_dynamic_text, c: api_custom_element, b: api_bind, gid: api_scoped_id} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6} = $ctx;
  return [!$cmp.hasExternalLabel ? api_element("label", {
    className: $cmp.computedLabelClass,
    key: 0
  }, [$cmp.required ? api_element("abbr", {
    classMap: stc0,
    attrs: {
      "title": $cmp.i18n.required
    },
    key: 1
  }, [api_text("*")]) : null, api_text(api_dynamic_text($cmp.label))]) : null, !$cmp.hasExternalLabel ? $cmp.fieldLevelHelp ? api_custom_element("lightning-helptext", _lightningHelptext, {
    props: {
      "content": $cmp.fieldLevelHelp
    },
    key: 2
  }) : null : null, api_element("div", stc1, [api_custom_element("lightning-base-combobox", _lightningBaseCombobox, {
    props: {
      "autocomplete": $cmp.autocomplete,
      "dropdownHeight": "small",
      "name": $cmp.name,
      "variant": "lookup",
      "placeholder": $cmp.placeholder,
      "disabled": $cmp.disabled,
      "readOnly": $cmp.readOnly,
      "required": $cmp.required,
      "items": $cmp.items,
      "inputText": $cmp.displayValue,
      "inputIconName": "utility:clock",
      "inputLabel": $cmp.ariaLabel,
      "inputControlsElement": $cmp.ariaControlsElement,
      "inputLabelledByElement": $cmp.ariaLabelledByElement,
      "dropdownAlignment": "auto"
    },
    key: 4,
    on: {
      "ready": _m0 || ($ctx._m0 = api_bind($cmp.handleReady)),
      "textchange": _m1 || ($ctx._m1 = api_bind($cmp.handleInputChange)),
      "textinput": _m2 || ($ctx._m2 = api_bind($cmp.handleTextInput)),
      "dropdownopenrequest": _m3 || ($ctx._m3 = api_bind($cmp.handleDropdownOpenRequest)),
      "focus": _m4 || ($ctx._m4 = api_bind($cmp.handleFocus)),
      "blur": _m5 || ($ctx._m5 = api_bind($cmp.handleBlur)),
      "select": _m6 || ($ctx._m6 = api_bind($cmp.handleTimeSelect))
    }
  })]), $cmp._errorMessage ? api_element("div", {
    classMap: stc2,
    attrs: {
      "id": api_scoped_id("error-message"),
      "data-error-message": "",
      "aria-live": "assertive"
    },
    key: 5
  }, [api_text(api_dynamic_text($cmp._errorMessage))]) : null];
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
tmpl.stylesheetToken = "lwc-2onco8hrliv";
tmpl.legacyStylesheetToken = "lightning-timepicker_timepicker";
freezeTemplate(tmpl);
