import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../../app/app.settings'
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }
  public userLogin(username:string,pass:string){
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
  
    let data={
      "email":username,
      "password":pass
    }
    return this.http.post(AppSettings.baseUrl+'users/login',data); 
  }
   
  public getAllComplaint(){
    return this.http.get(AppSettings.baseUrl+'complaint/gelAllcomplaint');
  }

}
