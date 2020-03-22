import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { RestProvider } from "../../providers/rest/rest"
import {UpdateCustomerModalPage} from "../update-customer-modal/update-customer-modal"
import { AlertController } from 'ionic-angular';
import { ToastProvider } from "../../providers/toast/toast"
/**
 * Generated class for the EnggDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-engg-details',
  templateUrl: 'engg-details.html',
})
export class EnggDetailsPage {
  userDetail:any;

  constructor(
    public navCtrl: NavController,
        private toast:ToastProvider,
        public modalCtrl: ModalController,
        private service:RestProvider ,
        public alertCtrl: AlertController,
         public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    this.getUserDeatils();
  }

  getUserDeatils(){
    this.userDetail = [];
    this.service.getAllUsers().subscribe((data:any)=>{
      this.userDetail=data.data.filter((el:any)=>{
        return el.u_role === 3
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

delete(data:any){
  const confirm= this.alertCtrl.create({
    title:"Alert",
    message:"Are you sure you want to delete?",
    buttons: [
     {
       text: 'No',
       handler: () => {
         console.log('Disagree clicked');
       }
     },
     {
       text: 'Yes',
       handler: () => {
         let payload={
           "u_id":data.u_id
         }
         this.service.deleteUserByID(payload).subscribe((result:any)=>{
           if( result.status === "success"){
             this.toast.showToast("Record has been successfully deleted!")
             this.getUserDeatils()
           }else{
            this.toast.showToast(" Cannot delete !")
           }

         })
         console.log('Agree clicked');
       }
     }
   ]
  })
  confirm.present();
 }


}
