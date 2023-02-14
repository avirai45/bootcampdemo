import { LightningElement } from 'lwc';

export default class Expressions extends LightningElement {
    title = 'Lightning Component Workshop';

    get showTitle() {
        return this.title.includes('Web');
    }
}