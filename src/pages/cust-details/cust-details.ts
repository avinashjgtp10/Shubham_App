import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { RestProvider } from "../../providers/rest/rest"
import {UpdateCustomerModalPage} from "../update-customer-modal/update-customer-modal"
/**
 * Generated class for the CustDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cust-details',
  templateUrl: 'cust-details.html',
})
export class CustDetailsPage {
  userDetail:any;

  constructor(public navCtrl: NavController,    public modalCtrl: ModalController,private service:RestProvider , public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getUserDeatils();
  }

  getUserDeatils(){
    this.userDetail = [];
    this.service.getAllUsers().subscribe((data:any)=>{
      this.userDetail=data.data.filter((el:any)=>{
        return el.u_role === 1 
      })
    })
  }

  filterList(event:any){
    const searchterm=event.value;
    if(!searchterm){
      this.getUserDeatils()
      return
    }
    if(searchterm.length >= 1){
      this.userDetail=this.userDetail.filter((value:any)=>{
        if(value.u_name && searchterm){
          if(value.u_name.toLowerCase().indexOf(searchterm.toLowerCase())>-1){
            return true;
          }else{
            return false;
          }
        }
      })
    }
}

updateUser(uId:any){
  const updateModal = this.modalCtrl.create(UpdateCustomerModalPage,
    { userId: uId })
  updateModal.onDidDismiss((data: any) => {
    this.getUserDeatils()
  })
  updateModal.present();
}
  

}
