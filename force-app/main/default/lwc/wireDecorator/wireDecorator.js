import { LightningElement,wire } from 'lwc';
import getAccount from '@salesforce/apex/WireDecoratorController.getAccount';
import getContact from '@salesforce/apex/WireDecoratorController.getContact';

import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';

export default class WireDecorator extends LightningElement {
    contactName;
    popDisplay = false;

    /**
     * Wire Property
     */
    @wire(getAccount)
    acc;

    /**
     * Wire functions
     */
    @wire(getContact, { accName : '$acc.data.Name'})
    wireCon ({error, data}) {
        if (error) {
            console.error(error);
        } else if (data) {
            this.contactName = data.FirstName + ' ' + data.LastName;
        }
    }

    /**
     * Wire Adaptor
     */
    @wire(getRecord, { recordId: '0065j00000PeegTAAR', fields: [NAME_FIELD] })
    opp;

    /**
     * Getter for opportunity name
     */
    get oppName() {
        return getFieldValue(this.opp.data, NAME_FIELD);
    }

    showPop() {
        this.popDisplay = true;
    }

    closePop() {
        this.popDisplay = false;
    }
}