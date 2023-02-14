import { LightningElement } from 'lwc';

export default class Getter extends LightningElement {
    firstName = '';
    secondName = '';

    handleChange(event){
        if(event.target.name==='input1'){
            this.firstName = event.target.value;
        }else if(event.target.name==='input2'){
            this.secondName = event.target.value;
        }
    }

    // getter function
    get fullName() {
        return this.firstName.toUpperCase() + ' ' + this.secondName.toUpperCase();
    }
}