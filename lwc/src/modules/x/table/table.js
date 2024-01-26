import { LightningElement, track } from 'lwc';

export default class Table extends LightningElement {
    @track
    products = [];

    constructor(){
        super();
        this.getProducts();
    }

    getProducts(){
        const fetchPromise = fetch("http://localhost:8080/product");
        fetchPromise.then(response => {
            return response.json();
          }).then(products => {
            for(let product of products){
                this.products.push(product);
            }
          });
    }
}