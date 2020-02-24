import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdminCreateCustomerPage } from "../admin-create-customer/admin-create-customer"
import { AdminCreateEnggPage } from "../admin-create-engg/admin-create-engg"
import { HomePage } from "../home/home"
import { AdminAssignEnggPage } from "../admin-assign-engg/admin-assign-engg"
import { AdminViewPreviousPage } from "../admin-view-previous/admin-view-previous"
import { CustDetailsPage } from "../cust-details/cust-details"
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
  tabData=[
  {url:"../../assets/imgs/creatCust.jpeg",
  title:"Create Customer",
  title1:"Create Service Enginner",
  event:"createCustomer",
  class:"",
  class1:"",
  event1:"createService",
  url1:"../../assets/imgs/serviceEngg.png"},
  {url:"../../assets/imgs/assignService.png",
  title:"Assign Enginner",
  event:"assignEnginner",
  class:"",
  class1:"",
  event1:"viewComplaint",
  title1:"View Complaint",
  url1:"../../assets/imgs/viewComplaint.png"},
  {url:"../../assets/imgs/cust_details.png",
  title:"Customer Details",
  event:"custDetails",
  class:"",
  class1:"",
  event1:"viewComplaint",
  title1:"Engineer Details ",
  url1:"../../assets/imgs/engg_details.png"}

]
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminDashboardPage');
  }
  goToHome(event){
    this.navCtrl.push(HomePage);
  }
  tabEvent(value){
   
    if(value === "createCustomer"){
      console.log(value)
      this.navCtrl.push(AdminCreateCustomerPage, { user_id: this.navParams.get("user_id") })
    }
    if(value === "custDetails"){
      console.log(value)
      this.navCtrl.push(CustDetailsPage,{user_id: this.navParams.get("user_id") })
    }
    if(value === "assignEnginner"){
      console.log(value)
      this.navCtrl.push(AdminAssignEnggPage,{ user_id: this.navParams.get("user_id") });
    }
  
  }
  tabEvent2(value){

    if(value === "createService"){
      console.log(value)
      this.navCtrl.push(AdminCreateEnggPage, { user_id: this.navParams.get("user_id") })
    }
    if(value === "viewComplaint"){
      console.log(value)
      this.navCtrl.push(AdminViewPreviousPage,{ user_id: this.navParams.get("user_id") });
    }
  }


}
