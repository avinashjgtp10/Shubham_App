import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the ToastProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToastProvider {

  constructor(public http: HttpClient, private  toastCtrl:ToastController) {
    console.log('Hello ToastProvider Provider');
  }
 showToast(msg:string){
  const toast=this.toastCtrl.create({
    message:msg,
    duration:3000
  });
  toast.present();
 }

}
