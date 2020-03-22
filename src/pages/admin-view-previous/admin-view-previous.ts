import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest'
import { AppSettings } from "../../app/app.settings"

/**
 * Generated class for the AdminViewPreviousPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-view-previous',
  templateUrl: 'admin-view-previous.html',
})
export class AdminViewPreviousPage {


  allcomplaint = []
  constructor(public rest: RestProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.initializeItems();
    console.log('ionViewDidLoad AdminViewPreviousPage');
  }

  initializeItems() {
    this.rest.getAllComplaint().subscribe((result: any) => {
      this.allcomplaint = result.data;
      this.allcomplaint = this.allcomplaint.filter((ele: any) => {
        AppSettings.status.forEach((e: any) => {
          if (parseInt(e.id) === parseInt(ele.c_status)) {
            ele.c_status = e.value;
          }
        });
        return ele
      })
    })
  }
  getItems(ev: any) {
    // set val to the value of the searchbar
    const val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.allcomplaint = this.allcomplaint.filter((item) => {
       if(parseInt(item.c_id) === parseInt(val)){
        return parseInt(item.c_id) === parseInt(val);
       }
        
      })
    }
    if(val.length === 0){
      this.initializeItems();   // Reset items back to all of the items
    }
  }

  filterItem(){

  }
  
}
