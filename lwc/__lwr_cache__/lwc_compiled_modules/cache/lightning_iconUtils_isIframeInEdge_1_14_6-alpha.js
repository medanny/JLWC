import _tmpl from "./isIframeInEdge.html";
import { registerComponent as _registerComponent } from "lwc";
// Taken from https://github.com/jonathantneal/svg4everybody/pull/139
// Remove this iframe-in-edge check once the following is resolved https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8323875/
const isEdgeUA = /\bEdge\/.(\d+)\b/.test(navigator.userAgent);
const inIframe = window.top !== window.self;
const isIframeInEdge = isEdgeUA && inIframe;
export default _registerComponent(isIframeInEdge, {
  tmpl: _tmpl,
  sel: "lightning-icon-utils",
  apiVersion: 60
});