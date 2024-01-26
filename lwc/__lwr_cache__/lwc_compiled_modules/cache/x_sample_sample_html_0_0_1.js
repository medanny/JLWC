import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sample.css";

import _implicitScopedStylesheets from "./sample.scoped.css?scoped=true";

import {parseFragment, registerTemplate, sanitizeAttribute} from "lwc";
const $fragment1 = parseFragment`<span class="slds-assistive-text${0}"${2}>account</span>`;
const $fragment2 = parseFragment`<span${3}>New Product</span>`;
const $fragment3 = parseFragment`<abbr class="slds-required${0}" title="required"${2}>* </abbr>`;
const $fragment4 = parseFragment`<abbr class="slds-required${0}" title="required"${2}>* </abbr>`;
const $fragment5 = parseFragment`<br${3}>`;
const $fragment6 = parseFragment`<button class="slds-button slds-button_brand slds-button_stretch${0}"${2}>Submit</button>`;
const stc0 = {
  classMap: {
    "slds-card": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-card__header": true,
    "slds-grid": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "slds-media": true,
    "slds-media_center": true,
    "slds-has-flexi-truncate": true
  },
  key: 2
};
const stc3 = {
  classMap: {
    "slds-media__figure": true
  },
  key: 3
};
const stc4 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-standard-account": true
  },
  attrs: {
    "title": "account"
  },
  key: 4
};
const stc5 = {
  classMap: {
    "slds-icon": true,
    "slds-icon_small": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 5,
  svg: true
};
const stc6 = {
  classMap: {
    "slds-media__body": true
  },
  key: 9
};
const stc7 = {
  classMap: {
    "slds-card__header-title": true
  },
  key: 10
};
const stc8 = {
  "slds-card__header-link": true,
  "slds-truncate": true
};
const stc9 = {
  classMap: {
    "slds-card__body": true,
    "slds-card__body_inner": true
  },
  key: 14
};
const stc10 = {
  classMap: {
    "slds-form-element": true
  },
  key: 15
};
const stc11 = {
  "slds-form-element__label": true
};
const stc12 = {
  classMap: {
    "slds-form-element__control": true
  },
  key: 19
};
const stc13 = {
  "slds-input": true
};
const stc14 = {
  classMap: {
    "slds-form-element": true
  },
  key: 21
};
const stc15 = {
  classMap: {
    "slds-form-element__control": true
  },
  key: 25
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {h: api_element, st: api_static_fragment, fid: api_scoped_frag_id, gid: api_scoped_id, t: api_text, b: api_bind, sp: api_static_part} = $api;
  const {_m0, _m1, _m2, _m3} = $ctx;
  return [api_element("article", stc0, [api_element("div", stc1, [api_element("header", stc2, [api_element("div", stc3, [api_element("span", stc4, [api_element("svg", stc5, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/standard-sprite/svg/symbols.svg#account")
    },
    key: 6,
    svg: true
  })]), api_static_fragment($fragment1(), 8)])]), api_element("div", stc6, [api_element("h2", stc7, [api_element("a", {
    classMap: stc8,
    attrs: {
      "href": api_scoped_frag_id("#"),
      "title": "Accounts"
    },
    key: 11
  }, [api_static_fragment($fragment2(), 13)])])])])]), api_element("div", stc9, [api_element("div", stc10, [api_element("label", {
    classMap: stc11,
    attrs: {
      "for": api_scoped_id("text-input-id-47")
    },
    key: 16
  }, [api_static_fragment($fragment3(), 18), api_text("Name")]), api_element("div", stc12, [api_element("input", {
    classMap: stc13,
    attrs: {
      "type": "text",
      "id": api_scoped_id("name"),
      "placeholder": "Placeholder text…",
      "required": ""
    },
    key: 20,
    on: {
      "input": _m0 || ($ctx._m0 = api_bind($cmp.handleNameChange))
    }
  })])]), api_element("div", stc14, [api_element("label", {
    classMap: stc11,
    attrs: {
      "for": api_scoped_id("text-input-id-47")
    },
    key: 22
  }, [api_static_fragment($fragment4(), 24), api_text("Price")]), api_element("div", stc15, [api_element("input", {
    classMap: stc13,
    attrs: {
      "type": "number",
      "id": api_scoped_id("price"),
      "placeholder": "Placeholder text…",
      "required": ""
    },
    key: 26,
    on: {
      "input": _m1 || ($ctx._m1 = api_bind($cmp.handlePriceChange))
    }
  })])]), api_static_fragment($fragment5(), 28), api_static_fragment($fragment6(), 30, [api_static_part(0, {
    on: {
      "click": _m3 || ($ctx._m3 = api_bind($cmp.handleClick))
    }
  })])])])];
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
tmpl.stylesheetToken = "lwc-22v2ui15kgk";
tmpl.legacyStylesheetToken = "x-sample_sample";
freezeTemplate(tmpl);
