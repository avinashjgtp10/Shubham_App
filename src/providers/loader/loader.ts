import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

/*
  Generated class for the LoaderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoaderProvider {

   loading:any;
  constructor(public http: HttpClient, public loadingController: LoadingController) {
    console.log('Hello LoaderProvider Provider');
    this.loading = this.loadingController.create({
      content: 'Please Wait....',
      duration: 3000
    });
  }
public presentLoading() {
     this.loading.present();
  }
  public stoploading(){
     this.loading.dismiss();
  }

}
