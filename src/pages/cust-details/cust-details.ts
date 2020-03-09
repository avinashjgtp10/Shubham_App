import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from "../../providers/rest/rest"

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

  constructor(public navCtrl: NavController,private service:RestProvider , public navParams: NavParams) {
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
  

}
