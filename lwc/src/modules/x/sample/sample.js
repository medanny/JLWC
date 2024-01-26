import { LightningElement } from 'lwc';

export default class Sample extends LightningElement {
    name = '';
    price = '';
    handleClick(e){
        console.log("ClickeD!~");
        let payload = {
            name : this.name,
            price: this.price
        }

        console.log(payload);
        this.saveProduct(JSON.stringify(payload));
    }

    handleNameChange(e){
        this.name = e.target.value;
    }

    handlePriceChange(e){
        this.price = e.target.value;
    }
    saveProduct(body){

        const rawResponse =  fetch('http://localhost:8080/product', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: body
        }).then(res =>{
            return res.json();
          }).then(product =>{
            console.log(product);
            location.reload();
          });
    }
}
