import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./buttonMenu.css";

import _implicitScopedStylesheets from "./buttonMenu.scoped.css?scoped=true";

import _lightningPrimitiveIcon from "lightning/primitiveIcon";
import _lightningSpinner from "lightning/spinner";
import {registerTemplate} from "lwc";
const stc0 = {
  "slds-indicator_unsaved": true,
  "slds-p-right_xx-small": true
};
const stc1 = {
  props: {
    "iconName": "utility:down",
    "svgClass": "slds-button__icon slds-button__icon_x-small slds-m-left_xx-small",
    "variant": "bare"
  },
  key: 3
};
const stc2 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 4
};
const stc3 = {
  "slds-dropdown__list": true,
  "slds-dropdown_length-with-icon-10": true
};
const stc4 = {
  "role": "menu"
};
const stc5 = {
  key: 8
};
const stc6 = [];
function tmpl($api, $cmp, $slotset, $ctx) {
  const {ti: api_tab_index, b: api_bind, t: api_text, h: api_element, d: api_dynamic_text, c: api_custom_element, s: api_slot} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6, _m7, _m8, _m9, _m10, _m11, _m12, _m13, _m14} = $ctx;
  return [api_element("button", {
    className: $cmp.computedButtonClass,
    attrs: {
      "disabled": $cmp.disabled ? "" : null,
      "aria-expanded": $cmp.computedAriaExpanded,
      "title": $cmp.computedTitle,
      "accesskey": $cmp.computedAccessKey,
      "value": $cmp.value,
      "aria-haspopup": "true",
      "type": "button",
      "tabindex": api_tab_index($cmp.tabIndex)
    },
    key: 0,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleButtonClick)),
      "keydown": _m1 || ($ctx._m1 = api_bind($cmp.handleButtonKeyDown)),
      "blur": _m2 || ($ctx._m2 = api_bind($cmp.handleBlur)),
      "focus": _m3 || ($ctx._m3 = api_bind($cmp.handleFocus)),
      "mousedown": _m4 || ($ctx._m4 = api_bind($cmp.handleButtonMouseDown))
    }
  }, [$cmp.isDraft ? api_element("abbr", {
    classMap: stc0,
    attrs: {
      "title": $cmp.draftAlternativeText
    },
    key: 1
  }, [api_text("*")]) : null, api_text(api_dynamic_text($cmp.label)), api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
    props: {
      "iconName": $cmp.iconName,
      "svgClass": $cmp.iconSvgClass,
      "variant": "bare"
    },
    key: 2
  }), $cmp.computedShowDownIcon ? api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, stc1) : null, api_element("span", stc2, [api_text(api_dynamic_text($cmp.computedAlternativeText))])]), $cmp._dropdownOpened ? api_element("div", {
    className: $cmp.computedDropdownClass,
    key: 5,
    on: {
      "mousedown": _m5 || ($ctx._m5 = api_bind($cmp.handleDropdownMouseDown)),
      "mouseup": _m6 || ($ctx._m6 = api_bind($cmp.handleDropdownMouseUp)),
      "mouseleave": _m7 || ($ctx._m7 = api_bind($cmp.handleDropdownMouseLeave)),
      "scroll": _m8 || ($ctx._m8 = api_bind($cmp.handleDropdownScroll))
    }
  }, [$cmp.isLoading ? api_custom_element("lightning-spinner", _lightningSpinner, {
    props: {
      "size": "small",
      "alternativeText": $cmp.computedLoadingStateAlternativeText
    },
    key: 6
  }) : null, !$cmp.isLoading ? api_element("div", {
    classMap: stc3,
    attrs: stc4,
    key: 7,
    on: {
      "privateselect": _m9 || ($ctx._m9 = api_bind($cmp.handleMenuItemPrivateSelect)),
      "privateblur": _m10 || ($ctx._m10 = api_bind($cmp.handlePrivateBlur)),
      "privatefocus": _m11 || ($ctx._m11 = api_bind($cmp.handlePrivateFocus)),
      "mouseover": _m12 || ($ctx._m12 = api_bind($cmp.handleMouseOverOnMenuItem)),
      "mouseout": _m13 || ($ctx._m13 = api_bind($cmp.allowBlur)),
      "keydown": _m14 || ($ctx._m14 = api_bind($cmp.handleKeyOnMenuItem))
    }
  }, [api_slot("", stc5, stc6, $slotset)]) : null]) : null];
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
tmpl.stylesheetToken = "lwc-5vkgep95tlq";
tmpl.legacyStylesheetToken = "lightning-buttonMenu_buttonMenu";
freezeTemplate(tmpl);
