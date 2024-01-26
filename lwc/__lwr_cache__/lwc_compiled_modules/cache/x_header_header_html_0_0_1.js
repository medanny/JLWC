import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./header.css";

import _implicitScopedStylesheets from "./header.scoped.css?scoped=true";

import {parseFragment, registerTemplate, sanitizeAttribute} from "lwc";
const $fragment1 = parseFragment`<div class="slds-page-header__name-title${0}"${2}><h1${3}><span${3}>Products</span><span class="slds-page-header__title slds-truncate${0}" title="Recently Viewed"${2}>Recently Viewed</span></h1></div>`;
const $fragment2 = parseFragment`<span class="slds-assistive-text${0}"${2}>Switch list view</span>`;
const $fragment3 = parseFragment`<li${3}><button class="slds-button slds-button_neutral${0}"${2}>New</button></li>`;
const $fragment4 = parseFragment`<span class="slds-assistive-text${0}"${2}>More Actions</span>`;
const stc0 = {
  classMap: {
    "slds-page-header": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-page-header__row": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "slds-page-header__col-title": true
  },
  key: 2
};
const stc3 = {
  classMap: {
    "slds-media": true
  },
  key: 3
};
const stc4 = {
  classMap: {
    "slds-media__figure": true
  },
  key: 4
};
const stc5 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-standard-opportunity": true
  },
  key: 5
};
const stc6 = {
  classMap: {
    "slds-icon": true,
    "slds-page-header__icon": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 6,
  svg: true
};
const stc7 = {
  classMap: {
    "slds-media__body": true
  },
  key: 8
};
const stc8 = {
  classMap: {
    "slds-page-header__name": true
  },
  key: 9
};
const stc9 = {
  classMap: {
    "slds-page-header__name-switcher": true
  },
  key: 12
};
const stc10 = {
  classMap: {
    "slds-dropdown-trigger": true,
    "slds-dropdown-trigger_click": true
  },
  key: 13
};
const stc11 = {
  classMap: {
    "slds-button": true,
    "slds-button_icon": true,
    "slds-button_icon-small": true
  },
  attrs: {
    "aria-haspopup": "true",
    "title": "Switch list view"
  },
  key: 14
};
const stc12 = {
  classMap: {
    "slds-button__icon": true,
    "slds-icon_x-small": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 15,
  svg: true
};
const stc13 = {
  classMap: {
    "slds-page-header__col-actions": true
  },
  key: 19
};
const stc14 = {
  classMap: {
    "slds-page-header__controls": true
  },
  key: 20
};
const stc15 = {
  classMap: {
    "slds-page-header__control": true
  },
  key: 21
};
const stc16 = {
  classMap: {
    "slds-button-group-list": true
  },
  key: 22
};
const stc17 = {
  key: 25
};
const stc18 = {
  classMap: {
    "slds-dropdown-trigger": true,
    "slds-dropdown-trigger_click": true
  },
  key: 26
};
const stc19 = {
  classMap: {
    "slds-button": true,
    "slds-button_icon": true,
    "slds-button_icon-border-filled": true
  },
  attrs: {
    "aria-haspopup": "true",
    "title": "More Actions"
  },
  key: 27
};
const stc20 = {
  classMap: {
    "slds-button__icon": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 28,
  svg: true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {h: api_element, st: api_static_fragment} = $api;
  return [api_element("div", stc0, [api_element("div", stc1, [api_element("div", stc2, [api_element("div", stc3, [api_element("div", stc4, [api_element("span", stc5, [api_element("svg", stc6, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/standard-sprite/svg/symbols.svg#opportunity")
    },
    key: 7,
    svg: true
  })])])]), api_element("div", stc7, [api_element("div", stc8, [api_static_fragment($fragment1(), 11), api_element("div", stc9, [api_element("div", stc10, [api_element("button", stc11, [api_element("svg", stc12, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/utility-sprite/svg/symbols.svg#down")
    },
    key: 16,
    svg: true
  })]), api_static_fragment($fragment2(), 18)])])])])])])]), api_element("div", stc13, [api_element("div", stc14, [api_element("div", stc15, [api_element("ul", stc16, [api_static_fragment($fragment3(), 24), api_element("li", stc17, [api_element("div", stc18, [api_element("button", stc19, [api_element("svg", stc20, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/utility-sprite/svg/symbols.svg#down")
    },
    key: 29,
    svg: true
  })]), api_static_fragment($fragment4(), 31)])])])])])])])])])];
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
tmpl.stylesheetToken = "lwc-6dgodlp1ren";
tmpl.legacyStylesheetToken = "x-header_header";
freezeTemplate(tmpl);
