import { LightningElement, track, wire } from 'lwc';
import {getProducts} from 'x/productApi';

export default class Table extends LightningElement {
    @wire(getProducts)
    products;
}