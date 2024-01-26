import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./app.css";

import _implicitScopedStylesheets from "./app.scoped.css?scoped=true";

import _xHeader from "x/header";
import _xSample from "x/sample";
import _xTable from "x/table";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="slds-col slds-size_1-of-3${0}"${2}><img src="/assets/recipes-logo.png" alt="logo"${3}><h1${3}>Hello World!</h1></div>`;
const stc0 = {
  classMap: {
    "slds-grid": true,
    "slds-gutters": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-col": true,
    "slds-size_2-of-3": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "slds-grid": true,
    "slds-grid_vertical": true,
    "slds-gutters": true
  },
  key: 2
};
const stc3 = {
  classMap: {
    "slds-col": true,
    "slds-m-top_large": true
  },
  key: 3
};
const stc4 = {
  key: 4
};
const stc5 = {
  classMap: {
    "slds-col": true,
    "slds-m-top_large": true
  },
  key: 5
};
const stc6 = {
  key: 6
};
const stc7 = {
  classMap: {
    "slds-col": true,
    "slds-m-top_large": true
  },
  key: 7
};
const stc8 = {
  key: 8
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element, h: api_element, st: api_static_fragment} = $api;
  return [api_element("div", stc0, [api_element("div", stc1, [api_element("div", stc2, [api_element("div", stc3, [api_custom_element("x-header", _xHeader, stc4)]), api_element("div", stc5, [api_custom_element("x-sample", _xSample, stc6)]), api_element("div", stc7, [api_custom_element("x-table", _xTable, stc8)])])]), api_static_fragment($fragment1(), 10)])];
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
tmpl.stylesheetToken = "lwc-190pm5at4mo";
tmpl.legacyStylesheetToken = "x-app_app";
freezeTemplate(tmpl);
