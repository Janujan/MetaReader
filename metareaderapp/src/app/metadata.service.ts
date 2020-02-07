import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable, config, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Metadata } from './metadata';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    })
};

// const configUrl = 'assets/config.json';

const url = 'http://localhost:8080/';

// Services unique to the MetaData Clsee
@Injectable({
  providedIn: 'root'
})
export class MetadataService {

  constructor(private httpclient: HttpClient) { }

  // Get method for that returns the current list of stuff
  // I want to pass by user id eventually
  getMetaData(): Observable<any> {
    return this.httpclient.get(url).pipe(catchError((error: HttpErrorResponse) => {
      return throwError(`Error retreiving metadata. ${error.statusText || 'Unknown'} `);
      }));
  }

  // Post method for saving data
  // only post the fields that were not already stored
  postMetaData( data: Metadata[]): Observable<any> {
    
    const newdata = [];

    data.forEach(element => {
      if ( element.id == null){
        newdata.push(element);
      }
    });

    console.log(newdata);
    return this.httpclient.post(url, newdata, httpOptions).pipe(catchError((error: HttpErrorResponse) => {
      return throwError(`Error saving metadata. ${error.statusText || 'Unknown'} `);
    }));
  }

}
