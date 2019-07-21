import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest'

/**
 * Generated class for the EnggViewPreviousPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-engg-view-previous',
  templateUrl: 'engg-view-previous.html',
})
export class EnggViewPreviousPage {
  complaintData = [];

  constructor(public navCtrl: NavController, public _rest: RestProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this._rest.getAllComplaint().subscribe((data: any) => {
      console.log(JSON.stringify(data));
      this.complaintData = data.data.filter((el:any) => {
        if (el.c_assignTo === this.navParams.get("user_id")) {
          if (el.c_status === 2) {
            return el;
          }
        };
      });
      console.log(JSON.stringify(this.complaintData));
    });

  }

}
