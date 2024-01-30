const getProductsInstance = new Set();

export class getProducts {
    products = [];
    constructor(dataCallback) {
        this.dataCallback = dataCallback;
        this.dataCallback();
    }

    update() {
        this._refresh();
    }

    connect() {
        getProductsInstance.add(this);
    }

    disconnect() {
        getProductsInstance.remove(this);
    }

    _refresh() {

        const fetchPromise = fetch("http://localhost:8080/product");
        fetchPromise.then(response => {
            return response.json();
          }).then(products => {
            for(let product of products){
                this.products.push(product);
            }

            this.dataCallback(this.products);
        });
    };
}

export function saveProduct(body){
    fetch('http://localhost:8080/product', {
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