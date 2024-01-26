import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./mediaTile.css";

import _implicitScopedStylesheets from "./mediaTile.scoped.css?scoped=true";

import _lightningMenuItem from "lightning/menuItem";
import _lightningButtonMenu from "lightning/buttonMenu";
import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "slds-media__figure": true
  },
  key: 0
};
const stc1 = {
  attrs: {
    "name": "media"
  },
  key: 1
};
const stc2 = [];
const stc3 = {
  classMap: {
    "slds-media__body": true
  },
  key: 2
};
const stc4 = {
  classMap: {
    "slds-grid": true,
    "slds-grid_align-spread": true,
    "slds-has-flexi-truncate": true
  },
  key: 3
};
const stc5 = {
  "slds-tile__title": true,
  "slds-truncate": true
};
const stc6 = {
  classMap: {
    "slds-shrink-none": true
  },
  key: 6
};
const stc7 = {
  classMap: {
    "slds-tile__detail": true
  },
  key: 11
};
const stc8 = {
  key: 12
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {s: api_slot, h: api_element, d: api_dynamic_text, t: api_text, b: api_bind, k: api_key, c: api_custom_element, i: api_iterator} = $api;
  const {_m0} = $ctx;
  return [api_element("div", stc0, [api_slot("media", stc1, stc2, $slotset)]), api_element("div", stc3, [$cmp.hasActions ? api_element("div", stc4, [api_element("h3", {
    classMap: stc5,
    attrs: {
      "title": $cmp.label
    },
    key: 4
  }, [api_element("a", {
    attrs: {
      "href": $cmp.href
    },
    key: 5
  }, [api_text(api_dynamic_text($cmp.label))])]), api_element("div", stc6, [api_custom_element("lightning-button-menu", _lightningButtonMenu, {
    props: {
      "iconSize": "x-small",
      "alternativeText": $cmp.buttonAlternateText,
      "menuAlignment": "right"
    },
    key: 7,
    on: {
      "select": _m0 || ($ctx._m0 = api_bind($cmp.handleActionSelect))
    }
  }, api_iterator($cmp.actions, function (action) {
    return api_custom_element("lightning-menu-item", _lightningMenuItem, {
      props: {
        "value": action,
        "label": action.label,
        "iconName": action.iconName,
        "disabled": action.disabled
      },
      key: api_key(8, action.label)
    });
  }))])]) : null, !$cmp.hasActions ? api_element("h3", {
    classMap: stc5,
    attrs: {
      "title": $cmp.label
    },
    key: 9
  }, [api_element("a", {
    attrs: {
      "href": $cmp.href
    },
    key: 10
  }, [api_text(api_dynamic_text($cmp.label))])]) : null, api_element("div", stc7, [api_slot("", stc8, stc2, $slotset)])])];
  /*LWC compiler v5.0.0*/
}
export default registerTemplate(tmpl);
tmpl.slots = ["", "media"];
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-5uljif932d1";
tmpl.legacyStylesheetToken = "lightning-tile_mediaTile";
freezeTemplate(tmpl);
