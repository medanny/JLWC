import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./base.css";

import _implicitScopedStylesheets from "./base.scoped.css?scoped=true";

import _lightningPrimitiveIcon from "lightning/primitiveIcon";
import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 2
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, d: api_dynamic_text, t: api_text, h: api_element} = $api;
  const {_m0, _m1, _m2, _m3} = $ctx;
  return [api_element("button", {
    className: $cmp.computedButtonClass,
    attrs: {
      "title": $cmp.label,
      "type": "button"
    },
    key: 0,
    on: {
      "mouseenter": _m0 || ($ctx._m0 = api_bind($cmp.handleMouseEnter)),
      "mouseleave": _m1 || ($ctx._m1 = api_bind($cmp.handleMouseLeave)),
      "focus": _m2 || ($ctx._m2 = api_bind($cmp.handleFocus)),
      "blur": _m3 || ($ctx._m3 = api_bind($cmp.handleBlur))
    }
  }, [$cmp.hasIcon ? api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
    props: {
      "iconName": $cmp.baseIconName,
      "svgClass": "slds-button__icon",
      "variant": "bare"
    },
    key: 1
  }) : null, $cmp.assistiveText ? api_element("span", stc0, [api_text(api_dynamic_text($cmp.assistiveText))]) : null])];
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
tmpl.stylesheetToken = "lwc-55ue9vq3ogr";
tmpl.legacyStylesheetToken = "lightning-progressStep_base";
freezeTemplate(tmpl);
