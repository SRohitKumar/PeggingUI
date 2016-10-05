declare var xml2json: any;
import { Injectable } from '@angular/core';
import {Http , Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class SampleService {
  private data: String[] = ["Nithya", "Rohit"];


   constructor(private http: Http){

   }

  getData1(){
  return this.data;
  }

  getData() { 
  let headers = new Headers();
  headers.append('Accept', 'application/xml');
  return this.http.get('https://webapps-qa.homedepot.com/VendorWS/vendor/search?type=O&subType=2&results=2000&max=2000', {
  headers: headers
  })
  .map(this.extractData).catch(this.handleError);
   //.map((response:Response) => response.json());
    
  }


private extractData(res: Response) {
    let jsonBody = JSON.parse(xml2json(res.text(),'  '));
    let body = res.json();
    return body || { };
  }


private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return errMsg;
  }



 


}
