import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./menuItem.css";

import _implicitScopedStylesheets from "./menuItem.scoped.css?scoped=true";

import _lightningPrimitiveIcon from "lightning/primitiveIcon";
import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "slds-truncate": true
  },
  key: 1
};
const stc1 = {
  "slds-indicator_unsaved": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {ti: api_tab_index, b: api_bind, c: api_custom_element, t: api_text, h: api_element, d: api_dynamic_text} = $api;
  const {_m0, _m1, _m2, _m3} = $ctx;
  return [api_element("a", {
    attrs: {
      "href": $cmp.computedHref,
      "target": $cmp._target,
      "role": $cmp.computedRole,
      "tabindex": api_tab_index($cmp.computedTabIndex),
      "accesskey": $cmp.computedAccessKey,
      "aria-checked": $cmp.computedAriaChecked,
      "aria-disabled": $cmp.computedAriaDisabled,
      "download": $cmp.download
    },
    key: 0,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleClick)),
      "focus": _m1 || ($ctx._m1 = api_bind($cmp.handleFocus)),
      "keydown": _m2 || ($ctx._m2 = api_bind($cmp.handleKeyDown)),
      "blur": _m3 || ($ctx._m3 = api_bind($cmp.handleBlur))
    }
  }, [api_element("span", stc0, [$cmp.isMenuItemCheckbox ? api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
    props: {
      "iconName": "utility:check",
      "size": "x-small",
      "svgClass": $cmp.computedCheckedIconClass,
      "variant": "bare"
    },
    key: 2
  }) : null, $cmp.isDraft ? api_element("abbr", {
    classMap: stc1,
    attrs: {
      "title": $cmp.draftAlternativeText
    },
    key: 3
  }, [api_text("*")]) : null, $cmp.prefixIconName ? api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
    props: {
      "iconName": $cmp.prefixIconName,
      "size": "x-small",
      "svgClass": "slds-icon slds-icon_x-small slds-icon-text-default slds-m-right_x-small",
      "variant": "bare"
    },
    key: 4
  }) : null, api_text(api_dynamic_text($cmp.label))]), $cmp.iconName ? api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
    props: {
      "iconName": $cmp.iconName,
      "size": "x-small",
      "svgClass": "slds-icon-text-default slds-m-left_small slds-shrink-none",
      "variant": "bare"
    },
    key: 5
  }) : null])];
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
tmpl.stylesheetToken = "lwc-61cegoc63po";
tmpl.legacyStylesheetToken = "lightning-menuItem_menuItem";
freezeTemplate(tmpl);
