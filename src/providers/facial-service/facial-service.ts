import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

/*
  Generated class for the FacialServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FacialServiceProvider {

private url: string="http://localhost:3000/products";

 constructor(private http: HttpClient) {
    console.log('Hello FacialServiceProvider Provider');
  }

  getFacialCleansers(){
    return this.http.get(this.url)
    .do(this.logResponse)
    .map(this.extractData);
   }


  private logResponse(res:Response){
   console.log(res);
  }

  private extractData(res:Response){

   return res;
  }

}
