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
  action(Obj: any) {
    this.navCtrl.push(EnggViewComplaintPage, { ObjData: Obj });
  }

  ionViewWillUnload() {

  }

}
