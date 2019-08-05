import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustRaiseComplaintPage } from "../cust-raise-complaint/cust-raise-complaint"
import { CustViewComplaintPage } from "../cust-view-complaint/cust-view-complaint"
import { HomePage } from "../home/home"
/**
 * Generated class for the CustDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cust-dashboard',
  templateUrl: 'cust-dashboard.html',
})
export class CustDashboardPage {
  label: string = "Home"
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustDashboardPage');
  }
  goToHome(event) {
    this.navCtrl.push(HomePage);
  }
  raise() {
    this.navCtrl.push(CustRaiseComplaintPage, { user_id: this.navParams.get("user_id") })
  }
  view() {
    this.navCtrl.push(CustViewComplaintPage, { user_id: this.navParams.get("user_id") })
  }

}
