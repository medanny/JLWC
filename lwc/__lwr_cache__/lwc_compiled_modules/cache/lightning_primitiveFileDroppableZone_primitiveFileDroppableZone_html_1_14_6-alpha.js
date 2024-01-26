import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./primitiveFileDroppableZone.css";

import _implicitScopedStylesheets from "./primitiveFileDroppableZone.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 0
};
const stc1 = [];
function tmpl($api, $cmp, $slotset, $ctx) {
  const {s: api_slot} = $api;
  return [api_slot("", stc0, stc1, $slotset)];
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
tmpl.stylesheetToken = "lwc-206866bm8j1";
tmpl.legacyStylesheetToken = "lightning-primitiveFileDroppableZone_primitiveFileDroppableZone";
freezeTemplate(tmpl);
