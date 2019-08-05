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


}
