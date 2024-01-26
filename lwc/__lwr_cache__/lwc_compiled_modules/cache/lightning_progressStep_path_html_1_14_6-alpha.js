import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./path.css";

import _implicitScopedStylesheets from "./path.scoped.css?scoped=true";

import _lightningPrimitiveIcon from "lightning/primitiveIcon";
import {registerTemplate} from "lwc";
const stc0 = {
  "slds-path__link": true
};
const stc1 = {
  classMap: {
    "slds-path__stage": true
  },
  key: 1
};
const stc2 = {
  props: {
    "iconName": "utility:check",
    "size": "x-small",
    "variant": "inverse"
  },
  key: 2
};
const stc3 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 3
};
const stc4 = {
  classMap: {
    "slds-path__title": true
  },
  key: 4
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {ti: api_tab_index, b: api_bind, c: api_custom_element, d: api_dynamic_text, t: api_text, h: api_element} = $api;
  const {_m0, _m1, _m2} = $ctx;
  return [api_element("a", {
    classMap: stc0,
    attrs: {
      "aria-selected": $cmp.ariaSelected,
      "href": "javascript:void(0);",
      "role": "option",
      "tabindex": api_tab_index($cmp.tabIndex)
    },
    key: 0,
    on: {
      "mouseenter": _m0 || ($ctx._m0 = api_bind($cmp.handleMouseEnter)),
      "mouseleave": _m1 || ($ctx._m1 = api_bind($cmp.handleMouseLeave)),
      "focus": _m2 || ($ctx._m2 = api_bind($cmp.handleFocus))
    }
  }, [api_element("span", stc1, [api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, stc2), $cmp.assistiveText ? api_element("span", stc3, [api_text(api_dynamic_text($cmp.assistiveText))]) : null]), api_element("span", stc4, [api_text(api_dynamic_text($cmp.label))])])];
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
tmpl.stylesheetToken = "lwc-14a5d29mqrb";
tmpl.legacyStylesheetToken = "lightning-progressStep_path";
freezeTemplate(tmpl);
