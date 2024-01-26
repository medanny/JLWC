import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./app.css";

import _implicitScopedStylesheets from "./app.scoped.css?scoped=true";

import _cSample from "c/sample";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<img src="/assets/recipes-logo.png" alt="logo"${3}>`;
const $fragment2 = parseFragment`<h1${3}>Hello World!</h1>`;
const stc0 = {
  key: 0
};
const stc1 = {
  key: 5
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, c: api_custom_element, h: api_element} = $api;
  return [api_element("main", stc0, [api_static_fragment($fragment1(), 2), api_static_fragment($fragment2(), 4), api_custom_element("c-sample", _cSample, stc1)])];
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
tmpl.stylesheetToken = "lwc-5la2ic78dit";
tmpl.legacyStylesheetToken = "example-app_app";
freezeTemplate(tmpl);
