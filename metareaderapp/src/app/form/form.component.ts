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

  addField() {
     this.metaDataArray.push(this.fieldData);
     this.fieldData = {fieldname: null, fieldtype: null};
  }
  deleteField(index: number) {
    this.metaDataArray.splice(index, 1);
  }
  //  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.metaDataArray); }

}
