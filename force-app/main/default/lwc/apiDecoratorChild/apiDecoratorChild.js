import { LightningElement,api } from 'lwc';

export default class ApiDecoratorChild extends LightningElement {
    @api firstName;
    lName;

    @api
    get lastName() {
        return this.lName;
    }

    set lastName(value) {
        this.lName = value;
    }

    get fullName() {
        return this.firstName + ' ' + this.lName;
    }
}