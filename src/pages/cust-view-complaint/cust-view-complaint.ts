import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from "../../providers/rest/rest"
import { AppSettings} from "../../app/app.settings"
/**
 * Generated class for the CustViewComplaintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cust-view-complaint',
  templateUrl: 'cust-view-complaint.html',
})
export class CustViewComplaintPage {
  complaintData: any = [];

  constructor(public _rest: RestProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.initializeItems();
  }

  initializeItems(){
    this._rest.getAllComplaint().subscribe((data: any) => {
      this.complaintData = data.data.filter(el => {
        if (el.c_assignBy === this.navParams.get("user_id")) {
          AppSettings.status.forEach((s_code:any)=>{
            if(parseInt(el.c_status) === parseInt(s_code.id)){
              el.c_status = s_code.value;
            }
          })
          return el;
        };
      });
    });
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
