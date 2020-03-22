import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnggViewComplaintPage } from '../engg-view-complaint/engg-view-complaint'
import { RestProvider } from "../../providers/rest/rest"


/**
 * Generated class for the EnggAcceptComplaintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-engg-accept-complaint',
  templateUrl: 'engg-accept-complaint.html',
})
export class EnggAcceptComplaintPage {

  complaintData = [];
  constructor(public navCtrl: NavController, private _rest: RestProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.initializeItems()
  }
  action(Obj: any) {
    this.navCtrl.push(EnggViewComplaintPage, { ObjData: Obj });
  }

  initializeItems(){
    this._rest.getAllComplaint().subscribe((data: any) => {
      this.complaintData = data.data.filter(el => {
        if (el.c_assignTo === this.navParams.get("user_id")) {
          if (el.c_status === 3 || el.c_status === 1) {
            return el;
          }
        };
      });
    });
  }


  ionViewWillUnload() {
  }

  getItems(ev: any) {
    // set val to the value of the searchbar
    const val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.complaintData = this.complaintData.filter((item) => {
       if(parseInt(item.c_id) === parseInt(val)){
        return parseInt(item.c_id) === parseInt(val);
       }
        
      })
    }
    if(val.length === 0){
      this.initializeItems();   // Reset items back to all of the items
    }
  }



}
