import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./table.html";
class Table extends LightningElement {
  constructor() {
    super();
    this.products = [];
    this.getProducts();
  }
  getProducts() {
    const fetchPromise = fetch("http://localhost:8080/product");
    fetchPromise.then(response => {
      return response.json();
    }).then(products => {
      for (let product of products) {
        this.products.push(product);
      }
    });
  }
  /*LWC compiler v5.0.0*/
}
_registerDecorators(Table, {
  track: {
    products: 1
  }
});
export default _registerComponent(Table, {
  tmpl: _tmpl,
  sel: "x-table",
  apiVersion: 60
});