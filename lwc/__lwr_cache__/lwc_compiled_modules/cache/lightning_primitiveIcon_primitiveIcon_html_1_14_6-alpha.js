import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./primitiveIcon.css";

import _implicitScopedStylesheets from "./primitiveIcon.scoped.css?scoped=true";

import {registerTemplate, sanitizeAttribute} from "lwc";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {fid: api_scoped_frag_id, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true"
    },
    key: 0,
    svg: true
  }, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", api_scoped_frag_id($cmp.href))
    },
    key: 1,
    svg: true
  })])];
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
tmpl.stylesheetToken = "lwc-25f9lgh55ct";
tmpl.legacyStylesheetToken = "lightning-primitiveIcon_primitiveIcon";
freezeTemplate(tmpl);
