import _tmpl from "./iconSvgTemplatesUtility.html";
import { registerComponent as _registerComponent } from "lwc";
import templates from './buildTemplates/templates';
export default _registerComponent(templates, {
  tmpl: _tmpl,
  sel: "lightning-icon-svg-templates-utility",
  apiVersion: 60
});