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

  public isCustomer() {
    return this.http.get(AppSettings.baseUrl + 'users/getAllCustomer');

  }
  public userLogin(username: string, pass: string) {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');

    let data = {
      "email": username,
      "password": pass
    }
    return this.http.post(AppSettings.baseUrl + 'users/login', data);
  }

  public getAllComplaint() {
    return this.http.get(AppSettings.baseUrl + 'complaint/gelAllcomplaint');
  }

  public getCustomerDetails(id: any) {
    let data = {
      "u_id": id
    }
    return this.http.post(AppSettings.baseUrl + 'users/getAll', data);
  }

  public assignComplaint(data: any) {
    return this.http.post(AppSettings.baseUrl + 'complaint/assignComplaint', data);
  }

  public updateComplaint(updatedate: any) {
    return this.http.post(AppSettings.baseUrl + 'complaint/updateComplaint', updatedate);
  }
  public createCustomer(userData: any) {
    return this.http.post(AppSettings.baseUrl + 'users/createUser', userData);
  }

  public getMachineType() {
    return this.http.get(AppSettings.baseUrl + 'complaint/getMachineType');
  }

  public getAllUsers() {
    return this.http.get(AppSettings.baseUrl + 'users/getAllCustomer');
  }

  public createComplaint(data: any) {
    return this.http.post(AppSettings.baseUrl + 'complaint/newComplaint', data);
  }

  public getUserByID(uId:any){
    return this.http.post(AppSettings.baseUrl + 'users/getUserById', uId);    
  }

  public updateUserByID(data:any){
    return this.http.post(AppSettings.baseUrl + 'users/updateUserById', data);    
  }
  public deleteUserByID(data:any){
    return this.http.post(AppSettings.baseUrl + 'users/deleteUserById', data);    
  }

  public sendDataExcel(data:any){
    return this.http.post(AppSettings.baseUrl + 'users/excelToMail', data);
  }

}
