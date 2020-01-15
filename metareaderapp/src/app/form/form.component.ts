import { Component, OnInit } from '@angular/core';
import { Metadata } from '../metadata';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{

  constructor() { }

  model = new Metadata(1, 'user1', 'csv');
  submitted = false;

   // TODO: Remove this when we're done
   get diagnostic() { return JSON.stringify(this.model); }

   onSubmit() { this.submitted = true; }

}
