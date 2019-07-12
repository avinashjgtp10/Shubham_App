import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EnggViewComplaintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-engg-view-complaint',
  templateUrl: 'engg-view-complaint.html',
})
export class EnggViewComplaintPage {
  filterData={};
  enggData={};
  complaintData=[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.filterData  = this.navParams.get('ObjData');
  }

}
