import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdminCreateCustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-create-customer',
  templateUrl: 'admin-create-customer.html',
})
export class AdminCreateCustomerPage {

  typesOfMachin:any = [
    "Computerised Embroidery Machines",
    "Reconditioned Barudan  Embroidery Machines",
    "Circular Knitting Machines",
    "Flat knitting Machines",
    "Chain Stitch Machines",
    "Laser Cutting Machines",
    "Dual sequence cording Machines",
    "Cap knitting Machines", "Coller Knitting Machines"]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminCreateCustomerPage');
  }

}
