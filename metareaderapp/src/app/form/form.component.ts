import { Component, OnInit } from '@angular/core';
import { Metadata } from '../metadata';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{
  private metaDataArray: Array<Metadata> = [];
  private fieldData: Metadata = {fieldname: null, fieldtype: null};

  submitted = false;

  // click function for when a new field is added
  addField() {
     this.metaDataArray.push(this.fieldData);
     this.fieldData = {fieldname: null, fieldtype: null};
  }

  // click function for when a field is being deleted
  deleteField(index: number) {
    this.metaDataArray.splice(index, 1);
  }

  // clear all fields from the current form
  clear() {
    this.metaDataArray = [];
  }

  // TO DO: POST method to server-side code
  saveForm() {
    this.submitted = true;
    console.log(this.metaDataArray);
    console.log('save to db');
  }

  editForm() {
    this.submitted = false;
  }
  // get diagnostic() { return JSON.stringify(this.metaDataArray); }

}
