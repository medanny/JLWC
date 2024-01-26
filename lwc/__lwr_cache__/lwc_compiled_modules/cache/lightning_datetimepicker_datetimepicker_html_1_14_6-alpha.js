import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./datetimepicker.css";

import _implicitScopedStylesheets from "./datetimepicker.scoped.css?scoped=true";

import _lightningHelptext from "lightning/helptext";
import _lightningDatepicker from "lightning/datepicker";
import _lightningTimepicker from "lightning/timepicker";
import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "slds-form": true
  },
  attrs: {
    "tabindex": "-1"
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-form-element": true,
    "slds-form-element_compound": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "slds-form-element__control": true
  },
  key: 4
};
const stc3 = {
  classMap: {
    "slds-form-element__group": true
  },
  key: 5
};
const stc4 = {
  classMap: {
    "slds-form-element__row": true
  },
  key: 6
};
const stc5 = {
  "slds-form-element": true
};
const stc6 = {
  "slds-form-element__help": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, t: api_text, h: api_element, c: api_custom_element, b: api_bind, gid: api_scoped_id} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5} = $ctx;
  return [api_element("div", stc0, [api_element("fieldset", stc1, [!$cmp.hasExternalLabel ? api_element("legend", {
    className: $cmp.computedLabelClass,
    key: 2
  }, [api_text(api_dynamic_text($cmp.label))]) : null, !$cmp.hasExternalLabel ? $cmp.fieldLevelHelp ? api_custom_element("lightning-helptext", _lightningHelptext, {
    props: {
      "content": $cmp.fieldLevelHelp
    },
    key: 3
  }) : null : null, api_element("div", stc2, [api_element("div", stc3, [api_element("div", stc4, [api_custom_element("lightning-datepicker", _lightningDatepicker, {
    classMap: stc5,
    props: {
      "autocomplete": $cmp.autocomplete,
      "min": $cmp.dateMin,
      "max": $cmp.dateMax,
      "label": $cmp.i18n.date,
      "name": $cmp.name,
      "variant": $cmp.variant,
      "placeholder": $cmp.placeholder,
      "readOnly": $cmp.readOnly,
      "disabled": $cmp.disabled,
      "dateStyle": $cmp.dateStyle,
      "required": $cmp.required
    },
    key: 7,
    on: {
      "focus": _m0 || ($ctx._m0 = api_bind($cmp.handleDatepickerFocus)),
      "blur": _m1 || ($ctx._m1 = api_bind($cmp.handleDatepickerBlur)),
      "change": _m2 || ($ctx._m2 = api_bind($cmp.handleDateChange))
    }
  }), api_custom_element("lightning-timepicker", _lightningTimepicker, {
    classMap: stc5,
    props: {
      "autocomplete": $cmp.autocomplete,
      "label": $cmp.i18n.time,
      "name": $cmp.name,
      "variant": $cmp.variant,
      "timeStyle": $cmp.timeStyle,
      "placeholder": $cmp.placeholder,
      "readOnly": $cmp.readOnly,
      "required": $cmp.required,
      "disabled": $cmp.disabled
    },
    key: 8,
    on: {
      "focus": _m3 || ($ctx._m3 = api_bind($cmp.handleTimepickerFocus)),
      "blur": _m4 || ($ctx._m4 = api_bind($cmp.handleTimepickerBlur)),
      "change": _m5 || ($ctx._m5 = api_bind($cmp.handleTimeChange))
    }
  })])])]), $cmp.customErrorMessage ? api_element("div", {
    classMap: stc6,
    attrs: {
      "data-error-message": "",
      "id": api_scoped_id("errormessage"),
      "aria-live": "assertive"
    },
    key: 9
  }, [api_text(api_dynamic_text($cmp.customErrorMessage))]) : null])])];
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
tmpl.stylesheetToken = "lwc-326m1b941ni";
tmpl.legacyStylesheetToken = "lightning-datetimepicker_datetimepicker";
freezeTemplate(tmpl);
