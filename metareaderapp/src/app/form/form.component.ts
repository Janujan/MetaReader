import { Component, OnInit } from '@angular/core';
import { Metadata } from '../metadata';
import { MetadataService } from '../metadata.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit{

  private metaDataArray: Array<Metadata> = [];
  private fieldData: Metadata = {id: null, fieldName: null, fieldType: null};

  submitted = false;
  constructor(private metadataService: MetadataService) {}

  // load the already saved meta data
  ngOnInit() {
    this.metadataService.getMetaData()
    .subscribe(
      data => {
        this.metaDataArray = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  // click function for when a new field is added
  addField() {
     this.metaDataArray.push(this.fieldData);
     this.fieldData = {id: null, fieldName: null, fieldType: null};
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
    this.metadataService.postMetaData(this.metaDataArray)
    .subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  editForm() {
    this.submitted = false;
  }
  // get diagnostic() { return JSON.stringify(this.metaDataArray); }

}
