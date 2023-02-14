import { LightningElement, track } from "lwc";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class TrackDecorator extends LightningElement {
  /**
   * Primitive data type
   */
  nameWithoutTrack = "Avi Rai";
  @track nameWithTrack = "Avi Rai";

  /**
   * Object data type
   */
  personWithoutTrack = { 'rollNumber' : 1, 'marks' : 20 };
  @track personWithTrack = { 'rollNumber' : 1, 'marks' : 20 };

  renderedCallback() {
    const event = new ShowToastEvent({
      title: 'Rendered',
      message: 'Template is rendered.',
      variant: 'info'
    });
    this.dispatchEvent(event);
  }

  handleChange1() {
    this.nameWithoutTrack = 'Payal Loungani';
  }

  handleChange2() {
    this.nameWithTrack = 'Esha Garg';
  }

  handleChange3() {
    this.personWithoutTrack.marks = 40;
  }

  handleChange4() {
    this.personWithTrack.marks = 60; 
  }
}
