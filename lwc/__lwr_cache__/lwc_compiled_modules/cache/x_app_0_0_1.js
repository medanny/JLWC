import _tmpl from "./app.html";
import { registerComponent as _registerComponent, LightningElement } from "lwc";
class HelloWorldApp extends LightningElement {
  constructor() {
    super();
    LoadCss('style.css', this);
  }
  /*LWC compiler v5.0.0*/
}
export default _registerComponent(HelloWorldApp, {
  tmpl: _tmpl,
  sel: "x-app",
  apiVersion: 60
});
function LoadCss(path, scope) {
  return new Promise(resolve => {
    const style = document.createElement('link');
    style.href = path;
    style.rel = 'stylesheet';
    style.onload = () => {
      resolve(style);
    };
    style.onerror = e => {
      console.error('Unable to load', path, e);
    };
    if (scope) {
      scope.template.appendChild(style);
    } else {
      document.querySelector('head').appendChild(style);
    }
  });
}