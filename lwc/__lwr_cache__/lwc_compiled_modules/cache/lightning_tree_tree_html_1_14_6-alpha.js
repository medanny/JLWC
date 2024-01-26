import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tree.css";

import _implicitScopedStylesheets from "./tree.scoped.css?scoped=true";

import _lightningTreeItem from "lightning/treeItem";
import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "slds-tree_container": true
  },
  key: 0
};
const stc1 = {
  "slds-tree__group-header": true
};
const stc2 = {
  "slds-tree": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, d: api_dynamic_text, t: api_text, h: api_element, c: api_custom_element} = $api;
  return [api_element("div", stc0, [api_element("h4", {
    classMap: stc1,
    attrs: {
      "id": api_scoped_id("treeheading")
    },
    key: 1
  }, [api_text(api_dynamic_text($cmp.header))]), $cmp.hasChildren ? api_custom_element("lightning-tree-item", _lightningTreeItem, {
    classMap: stc2,
    props: {
      "role": "tree",
      "ariaLabelledBy": api_scoped_id("treeheading"),
      "isRoot": true,
      "nodeKey": $cmp.rootElement,
      "childItems": $cmp.children,
      "focusedChild": $cmp.focusedChild
    },
    key: 2
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
tmpl.stylesheetToken = "lwc-p6oc2e8gru";
tmpl.legacyStylesheetToken = "lightning-tree_tree";
freezeTemplate(tmpl);
