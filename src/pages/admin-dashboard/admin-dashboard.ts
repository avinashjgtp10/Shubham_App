import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdminCreateCustomerPage } from "../admin-create-customer/admin-create-customer"
import { AdminCreateEnggPage } from "../admin-create-engg/admin-create-engg"
import { HomePage } from "../home/home"
import { AdminAssignEnggPage } from "../admin-assign-engg/admin-assign-engg"
/**
 * Generated class for the AdminDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-dashboard',
  templateUrl: 'admin-dashboard.html',
})
export class AdminDashboardPage {
  label:string="Admin"
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminDashboardPage');
  }
  createComplaint() {
    this.navCtrl.push(AdminCreateCustomerPage, { user_id: this.navParams.get("user_id") })
  }
  createEngg() {
    this.navCtrl.push(AdminCreateEnggPage, { user_id: this.navParams.get("user_id") })
  }
  assignEng(){
    this.navCtrl.push(AdminAssignEnggPage,{ user_id: this.navParams.get("user_id") });
  }
  goToHome(event){
    this.navCtrl.push(HomePage);
  }
}
