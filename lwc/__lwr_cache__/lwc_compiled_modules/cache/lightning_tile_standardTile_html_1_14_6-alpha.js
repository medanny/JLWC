import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./standardTile.css";

import _implicitScopedStylesheets from "./standardTile.scoped.css?scoped=true";

import _lightningMenuItem from "lightning/menuItem";
import _lightningButtonMenu from "lightning/buttonMenu";
import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "slds-grid": true,
    "slds-grid_align-spread": true,
    "slds-has-flexi-truncate": true
  },
  key: 0
};
const stc1 = {
  "slds-tile__title": true,
  "slds-truncate": true
};
const stc2 = {
  classMap: {
    "slds-shrink-none": true
  },
  key: 3
};
const stc3 = {
  classMap: {
    "slds-tile__detail": true
  },
  key: 8
};
const stc4 = {
  key: 9
};
const stc5 = [];
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, t: api_text, h: api_element, b: api_bind, k: api_key, c: api_custom_element, i: api_iterator, s: api_slot} = $api;
  const {_m0} = $ctx;
  return [$cmp.hasActions ? api_element("div", stc0, [api_element("h3", {
    classMap: stc1,
    attrs: {
      "title": $cmp.label
    },
    key: 1
  }, [api_element("a", {
    attrs: {
      "href": $cmp.href
    },
    key: 2
  }, [api_text(api_dynamic_text($cmp.label))])]), api_element("div", stc2, [api_custom_element("lightning-button-menu", _lightningButtonMenu, {
    props: {
      "iconSize": "x-small",
      "alternativeText": $cmp.buttonAlternateText,
      "menuAlignment": "right"
    },
    key: 4,
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
      key: api_key(5, action.label)
    });
  }))])]) : null, !$cmp.hasActions ? api_element("h3", {
    classMap: stc1,
    attrs: {
      "title": $cmp.label
    },
    key: 6
  }, [api_element("a", {
    attrs: {
      "href": $cmp.href
    },
    key: 7
  }, [api_text(api_dynamic_text($cmp.label))])]) : null, api_element("div", stc3, [api_slot("", stc4, stc5, $slotset)])];
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
tmpl.stylesheetToken = "lwc-6d8okgkov8p";
tmpl.legacyStylesheetToken = "lightning-tile_standardTile";
freezeTemplate(tmpl);
