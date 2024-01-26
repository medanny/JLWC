import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./progressBar.css";

import _implicitScopedStylesheets from "./progressBar.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  "slds-progress-bar__value": true
};
const stc1 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 2
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, t: api_text, h: api_element} = $api;
  return [api_element("div", {
    className: $cmp.computedClass,
    attrs: {
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": $cmp.percentValue,
      "aria-busy": $cmp.ariaBusy,
      "role": "progressbar"
    },
    key: 0
  }, [api_element("span", {
    classMap: stc0,
    style: $cmp.computedStyle,
    key: 1
  }, [api_element("span", stc1, [api_text(api_dynamic_text($cmp.assistiveText))])])])];
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
tmpl.stylesheetToken = "lwc-6fe1vtge1h4";
tmpl.legacyStylesheetToken = "lightning-progressBar_progressBar";
freezeTemplate(tmpl);
