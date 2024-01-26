import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./sample.html";
class Sample extends LightningElement {
  constructor(...args) {
    super(...args);
    this.name = '';
    this.price = '';
  }
  handleClick(e) {
    console.log("ClickeD!~");
    let payload = {
      name: this.name,
      price: this.price
    };
    console.log(payload);
    this.saveProduct(JSON.stringify(payload));
  }
  handleNameChange(e) {
    this.name = e.target.value;
  }
  handlePriceChange(e) {
    this.price = e.target.value;
  }
  saveProduct(body) {
    const rawResponse = fetch('http://localhost:8080/product', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: body
    }).then(res => {
      return res.json();
    }).then(product => {
      console.log(product);
      location.reload();
    });
  }
  /*LWC compiler v5.0.0*/
}
_registerDecorators(Sample, {
  fields: ["name", "price"]
});
export default _registerComponent(Sample, {
  tmpl: _tmpl,
  sel: "x-sample",
  apiVersion: 60
});