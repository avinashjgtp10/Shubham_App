import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnggAcceptComplaintPage } from '../engg-accept-complaint/engg-accept-complaint'
import { EnggViewPreviousPage } from "../engg-view-previous/engg-view-previous"


/**
 * Generated class for the EnggDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-engg-dashboard',
  templateUrl: 'engg-dashboard.html',
})
export class EnggDashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnggDashboardPage',this.navParams.get("user_id"));
  }

  acceptComplaint(event){
    this.navCtrl.push(EnggAcceptComplaintPage,{user_id:this.navParams.get("user_id")});
  }
  previousComplaint(){
    this.navCtrl.push(EnggViewPreviousPage,{user_id:this.navParams.get("user_id")});
  }
}
