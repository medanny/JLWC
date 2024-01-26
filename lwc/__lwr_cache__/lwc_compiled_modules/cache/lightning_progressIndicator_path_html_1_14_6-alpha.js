import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./path.css";

import _implicitScopedStylesheets from "./path.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "slds-path": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-grid": true,
    "slds-path__track": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "slds-grid": true,
    "slds-path__scroller-container": true
  },
  key: 2
};
const stc3 = {
  classMap: {
    "slds-path__scroller": true
  },
  attrs: {
    "role": "application"
  },
  key: 3
};
const stc4 = {
  classMap: {
    "slds-path__scroller_inner": true
  },
  key: 4
};
const stc5 = {
  "slds-path__nav": true
};
const stc6 = {
  "role": "listbox",
  "aria-orientation": "horizontal"
};
const stc7 = [];
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, s: api_slot, h: api_element} = $api;
  const {_m0, _m1, _m2} = $ctx;
  return [api_element("div", stc0, [api_element("div", stc1, [api_element("div", stc2, [api_element("div", stc3, [api_element("div", stc4, [api_element("ul", {
    classMap: stc5,
    attrs: stc6,
    key: 5,
    on: {
      "keydown": _m0 || ($ctx._m0 = api_bind($cmp.handleStepKeyDown)),
      "stepfocus": _m1 || ($ctx._m1 = api_bind($cmp.handleStepFocus))
    }
  }, [api_slot("", {
    key: 6,
    on: {
      "slotchange": _m2 || ($ctx._m2 = api_bind($cmp.handleSlotChange))
    }
  }, stc7, $slotset)])])])])])])];
  /*LWC compiler v5.0.0*/
}
export default registerTemplate(tmpl);
tmpl.slots = [""];
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-3oe523pd62f";
tmpl.legacyStylesheetToken = "lightning-progressIndicator_path";
freezeTemplate(tmpl);
