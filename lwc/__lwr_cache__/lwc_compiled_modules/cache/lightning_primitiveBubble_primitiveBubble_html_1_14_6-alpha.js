import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./primitiveBubble.css";

import _implicitScopedStylesheets from "./primitiveBubble.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  "slds-popover__body": true
};
const stc1 = {
  lwc: {
    dom: "manual"
  }
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, h: api_element} = $api;
  const {_m0} = $ctx;
  return [api_element("div", {
    classMap: stc0,
    context: stc1,
    key: 0,
    on: {
      "mouseleave": _m0 || ($ctx._m0 = api_bind($cmp.handleMouseLeave))
    }
  })];
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
tmpl.stylesheetToken = "lwc-5fnnbdvmu3k";
tmpl.legacyStylesheetToken = "lightning-primitiveBubble_primitiveBubble";
freezeTemplate(tmpl);
