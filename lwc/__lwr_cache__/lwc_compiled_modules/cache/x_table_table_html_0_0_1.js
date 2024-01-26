import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./table.css";

import _implicitScopedStylesheets from "./table.scoped.css?scoped=true";

import {parseFragment, registerTemplate, sanitizeAttribute} from "lwc";
const $fragment1 = parseFragment`<span class="slds-checkbox_faux${0}"${2}></span>`;
const $fragment2 = parseFragment`<span class="slds-form-element__label slds-assistive-text${0}"${2}>Select All</span>`;
const $fragment3 = parseFragment`<span class="slds-assistive-text${0}"${2}>Sort by: </span>`;
const $fragment4 = parseFragment`<span class="slds-truncate${0}" title="Name"${2}>Id</span>`;
const $fragment5 = parseFragment`<span class="slds-resizable__handle${0}"${2}><span class="slds-resizable__divider${0}"${2}></span></span>`;
const $fragment6 = parseFragment`<span class="slds-assistive-text${0}"${2}>Sort by: </span>`;
const $fragment7 = parseFragment`<span class="slds-truncate${0}" title="Account Name"${2}>Name</span>`;
const $fragment8 = parseFragment`<span class="slds-resizable__handle${0}"${2}><span class="slds-resizable__divider${0}"${2}></span></span>`;
const $fragment9 = parseFragment`<span class="slds-assistive-text${0}"${2}>Sort by: </span>`;
const $fragment10 = parseFragment`<span class="slds-truncate${0}" title="Close Date"${2}>Price</span>`;
const $fragment11 = parseFragment`<span class="slds-resizable__handle${0}"${2}><span class="slds-resizable__divider${0}"${2}></span></span>`;
const $fragment12 = parseFragment`<th class="${0}" scope="col" style="width:3.25rem"${2}><div class="slds-truncate slds-assistive-text${0}" title="Actions"${2}>Actions</div></th>`;
const $fragment13 = parseFragment`<span class="slds-checkbox_faux${0}"${2}></span>`;
const $fragment14 = parseFragment`<span class="slds-form-element__label slds-assistive-text${0}"${2}>Select item 1</span>`;
const $fragment15 = parseFragment`<span class="slds-assistive-text${0}"${2}>More actions for Acme - 1,200 Widgets</span>`;
const stc0 = {
  classMap: {
    "slds-table": true,
    "slds-table_bordered": true,
    "slds-table_fixed-layout": true,
    "slds-table_resizable-cols": true
  },
  attrs: {
    "aria-multiselectable": "true",
    "role": "grid",
    "aria-label": "Example advanced table of Opportunities with cell focused"
  },
  key: 0
};
const stc1 = {
  key: 1
};
const stc2 = {
  classMap: {
    "slds-line-height_reset": true
  },
  key: 2
};
const stc3 = {
  classMap: {
    "slds-text-align_right": true
  },
  styleDecls: [["width", "3.25rem", false]],
  attrs: {
    "scope": "col"
  },
  key: 3
};
const stc4 = {
  "slds-assistive-text": true
};
const stc5 = {
  classMap: {
    "slds-th__action": true,
    "slds-th__action_form": true
  },
  key: 5
};
const stc6 = {
  classMap: {
    "slds-checkbox": true
  },
  key: 6
};
const stc7 = {
  "value": "checkbox-unique-id-297"
};
const stc8 = {
  "slds-checkbox__label": true
};
const stc9 = {
  classMap: {
    "slds-is-resizable": true,
    "slds-is-sortable": true
  },
  attrs: {
    "aria-sort": "none",
    "scope": "col"
  },
  key: 13
};
const stc10 = {
  "slds-th__action": true,
  "slds-text-link_reset": true
};
const stc11 = {
  classMap: {
    "slds-grid": true,
    "slds-grid_vertical-align-center": true,
    "slds-has-flexi-truncate": true
  },
  key: 17
};
const stc12 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-utility-arrowdown": true
  },
  key: 20
};
const stc13 = {
  classMap: {
    "slds-icon": true,
    "slds-icon-text-default": true,
    "slds-is-sortable__icon": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 21,
  svg: true
};
const stc14 = {
  classMap: {
    "slds-resizable": true
  },
  key: 23
};
const stc15 = {
  "slds-resizable__input": true,
  "slds-assistive-text": true
};
const stc16 = {
  classMap: {
    "slds-is-resizable": true,
    "slds-is-sortable": true
  },
  attrs: {
    "aria-sort": "none",
    "scope": "col"
  },
  key: 27
};
const stc17 = {
  classMap: {
    "slds-grid": true,
    "slds-grid_vertical-align-center": true,
    "slds-has-flexi-truncate": true
  },
  key: 31
};
const stc18 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-utility-arrowdown": true
  },
  key: 34
};
const stc19 = {
  classMap: {
    "slds-icon": true,
    "slds-icon-text-default": true,
    "slds-is-sortable__icon": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 35,
  svg: true
};
const stc20 = {
  classMap: {
    "slds-resizable": true
  },
  key: 37
};
const stc21 = {
  classMap: {
    "slds-is-resizable": true,
    "slds-is-sortable": true
  },
  attrs: {
    "aria-sort": "none",
    "scope": "col"
  },
  key: 41
};
const stc22 = {
  classMap: {
    "slds-grid": true,
    "slds-grid_vertical-align-center": true,
    "slds-has-flexi-truncate": true
  },
  key: 45
};
const stc23 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-utility-arrowdown": true
  },
  key: 48
};
const stc24 = {
  classMap: {
    "slds-icon": true,
    "slds-icon-text-default": true,
    "slds-is-sortable__icon": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 49,
  svg: true
};
const stc25 = {
  classMap: {
    "slds-resizable": true
  },
  key: 51
};
const stc26 = {
  key: 57
};
const stc27 = {
  "slds-hint-parent": true
};
const stc28 = {
  "aria-selected": "false"
};
const stc29 = {
  classMap: {
    "slds-text-align_right": true
  },
  attrs: {
    "role": "gridcell"
  },
  key: 59
};
const stc30 = {
  classMap: {
    "slds-checkbox": true
  },
  key: 60
};
const stc31 = {
  "value": "checkbox-{product.Id}"
};
const stc32 = {
  attrs: {
    "scope": "row",
    "tabindex": "0"
  },
  key: 67
};
const stc33 = {
  classMap: {
    "slds-truncate": true
  },
  attrs: {
    "title": "Acme - 1,200 Widgets"
  },
  key: 68
};
const stc34 = {
  attrs: {
    "role": "gridcell"
  },
  key: 70
};
const stc35 = {
  classMap: {
    "slds-truncate": true
  },
  key: 71
};
const stc36 = {
  attrs: {
    "role": "gridcell"
  },
  key: 72
};
const stc37 = {
  classMap: {
    "slds-truncate": true
  },
  key: 73
};
const stc38 = {
  attrs: {
    "role": "gridcell"
  },
  key: 74
};
const stc39 = {
  classMap: {
    "slds-button": true,
    "slds-button_icon": true,
    "slds-button_icon-border-filled": true,
    "slds-button_icon-x-small": true
  },
  attrs: {
    "aria-haspopup": "true",
    "tabindex": "-1",
    "title": "More actions for Acme - 1,200 Widgets"
  },
  key: 75
};
const stc40 = {
  classMap: {
    "slds-button__icon": true,
    "slds-button__icon_hint": true,
    "slds-button__icon_small": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 76,
  svg: true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, t: api_text, h: api_element, st: api_static_fragment, fid: api_scoped_frag_id, k: api_key, d: api_dynamic_text, i: api_iterator} = $api;
  return [api_element("table", stc0, [api_element("thead", stc1, [api_element("tr", stc2, [api_element("th", stc3, [api_element("span", {
    classMap: stc4,
    attrs: {
      "id": api_scoped_id("column-group-header")
    },
    key: 4
  }, [api_text("Choose a row")]), api_element("div", stc5, [api_element("div", stc6, [api_element("input", {
    attrs: {
      "type": "checkbox",
      "name": "options",
      "id": api_scoped_id("checkbox-unique-id-297"),
      "tabindex": "-1",
      "aria-labelledby": api_scoped_id("check-select-all-label column-group-header")
    },
    props: stc7,
    key: 7
  }), api_element("label", {
    classMap: stc8,
    attrs: {
      "for": api_scoped_id("checkbox-unique-id-297"),
      "id": api_scoped_id("check-select-all-label")
    },
    key: 8
  }, [api_static_fragment($fragment1(), 10), api_static_fragment($fragment2(), 12)])])])]), api_element("th", stc9, [api_element("a", {
    classMap: stc10,
    attrs: {
      "href": api_scoped_frag_id("#"),
      "role": "button",
      "tabindex": "-1"
    },
    key: 14
  }, [api_static_fragment($fragment3(), 16), api_element("div", stc11, [api_static_fragment($fragment4(), 19), api_element("span", stc12, [api_element("svg", stc13, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/utility-sprite/svg/symbols.svg#arrowdown")
    },
    key: 22,
    svg: true
  })])])])]), api_element("div", stc14, [api_element("input", {
    classMap: stc15,
    attrs: {
      "type": "range",
      "aria-label": "Name column width",
      "id": api_scoped_id("cell-resize-handle-540"),
      "max": "1000",
      "min": "20",
      "tabindex": "-1"
    },
    key: 24
  }), api_static_fragment($fragment5(), 26)])]), api_element("th", stc16, [api_element("a", {
    classMap: stc10,
    attrs: {
      "href": api_scoped_frag_id("#"),
      "role": "button",
      "tabindex": "-1"
    },
    key: 28
  }, [api_static_fragment($fragment6(), 30), api_element("div", stc17, [api_static_fragment($fragment7(), 33), api_element("span", stc18, [api_element("svg", stc19, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/utility-sprite/svg/symbols.svg#arrowdown")
    },
    key: 36,
    svg: true
  })])])])]), api_element("div", stc20, [api_element("input", {
    classMap: stc15,
    attrs: {
      "type": "range",
      "aria-label": "Account Name column width",
      "id": api_scoped_id("cell-resize-handle-541"),
      "max": "1000",
      "min": "20",
      "tabindex": "-1"
    },
    key: 38
  }), api_static_fragment($fragment8(), 40)])]), api_element("th", stc21, [api_element("a", {
    classMap: stc10,
    attrs: {
      "href": api_scoped_frag_id("#"),
      "role": "button",
      "tabindex": "-1"
    },
    key: 42
  }, [api_static_fragment($fragment9(), 44), api_element("div", stc22, [api_static_fragment($fragment10(), 47), api_element("span", stc23, [api_element("svg", stc24, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/utility-sprite/svg/symbols.svg#arrowdown")
    },
    key: 50,
    svg: true
  })])])])]), api_element("div", stc25, [api_element("input", {
    classMap: stc15,
    attrs: {
      "type": "range",
      "aria-label": "Close Date column width",
      "id": api_scoped_id("cell-resize-handle-542"),
      "max": "1000",
      "min": "20",
      "tabindex": "-1"
    },
    key: 52
  }), api_static_fragment($fragment11(), 54)])]), api_static_fragment($fragment12(), 56)])]), api_element("tbody", stc26, api_iterator($cmp.products, function (product) {
    return api_element("tr", {
      classMap: stc27,
      attrs: stc28,
      key: api_key(58, product.Id)
    }, [api_element("td", stc29, [api_element("div", stc30, [api_element("input", {
      attrs: {
        "type": "checkbox",
        "name": "options",
        "id": api_scoped_id("checkbox-{product.Id}"),
        "tabindex": "-1",
        "aria-labelledby": api_scoped_id("check-button-label-01 column-group-header")
      },
      props: stc31,
      key: 61
    }), api_element("label", {
      classMap: stc8,
      attrs: {
        "for": api_scoped_id("checkbox-{product.Id}"),
        "id": api_scoped_id("check-button-label-{product.Id}")
      },
      key: 62
    }, [api_static_fragment($fragment13(), 64), api_static_fragment($fragment14(), 66)])])]), api_element("th", stc32, [api_element("div", stc33, [api_element("a", {
      attrs: {
        "href": api_scoped_frag_id("#"),
        "tabindex": "-1"
      },
      key: 69
    }, [api_text(api_dynamic_text(product.id))])])]), api_element("td", stc34, [api_element("div", stc35, [api_text(api_dynamic_text(product.name))])]), api_element("td", stc36, [api_element("div", stc37, [api_text("$ " + api_dynamic_text(product.price))])]), api_element("td", stc38, [api_element("button", stc39, [api_element("svg", stc40, [api_element("use", {
      attrs: {
        "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/utility-sprite/svg/symbols.svg#down")
      },
      key: 77,
      svg: true
    })]), api_static_fragment($fragment15(), 79)])])]);
  }))])];
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
tmpl.stylesheetToken = "lwc-77504qobm6g";
tmpl.legacyStylesheetToken = "x-table_table";
freezeTemplate(tmpl);
