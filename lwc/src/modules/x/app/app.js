import { LightningElement } from 'lwc';

export default class HelloWorldApp extends LightningElement {
    constructor(){
        super();
        LoadCss('style.css',this);
    }

}



function LoadCss(path, scope) {
    return new Promise((resolve) => {
        const style = document.createElement('link');
        style.href = path;
        style.rel = 'stylesheet';

        style.onload = () => {
            resolve(style);
        };
        style.onerror = (e) => {
            console.error('Unable to load', path, e);
        };

        if (scope) {
            scope.template.appendChild(style);
        } else {
            document.querySelector('head').appendChild(style);
        }
    });
}