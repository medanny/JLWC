import { LightningElement } from 'lwc';
import {saveProduct} from 'x/productApi';
export default class NewProduct extends LightningElement {
    name = '';
    price = '';
    handleClick(e){
        console.log("ClickeD!~");
        let payload = {
            name : this.name,
            price: this.price
        }

        console.log(payload);
        saveProduct(JSON.stringify(payload));
    }

    handleNameChange(e){
        this.name = e.target.value;
    }

    handlePriceChange(e){
        this.price = e.target.value;
    }
}
