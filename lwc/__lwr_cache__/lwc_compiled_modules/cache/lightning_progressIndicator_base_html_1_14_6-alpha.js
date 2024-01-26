import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./base.css";

import _implicitScopedStylesheets from "./base.scoped.css?scoped=true";

import _lightningProgressBar from "lightning/progressBar";
import {registerTemplate} from "lwc";
const stc0 = {
  "slds-progress__list": true
};
const stc1 = [];
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, s: api_slot, h: api_element, c: api_custom_element} = $api;
  const {_m0, _m1} = $ctx;
  return [api_element("div", {
    className: $cmp.computedWrapperClass,
    key: 0
  }, [api_element("ol", {
    classMap: stc0,
    key: 1,
    on: {
      "stepfocus": _m0 || ($ctx._m0 = api_bind($cmp.handleStepFocus))
    }
  }, [api_slot("", {
    key: 2,
    on: {
      "slotchange": _m1 || ($ctx._m1 = api_bind($cmp.handleSlotChange))
    }
  }, stc1, $slotset)]), api_custom_element("lightning-progress-bar", _lightningProgressBar, {
    props: {
      "value": $cmp.privateProgressValue,
      "size": "small"
    },
    key: 3
  })])];
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
tmpl.stylesheetToken = "lwc-2munkhqc78a";
tmpl.legacyStylesheetToken = "lightning-progressIndicator_base";
freezeTemplate(tmpl);
