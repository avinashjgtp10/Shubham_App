import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnggViewComplaintPage }  from '../engg-view-complaint/engg-view-complaint'
import { RestProvider } from "../../providers/rest/rest"

/**
 * Generated class for the EnggAcceptComplaintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-engg-accept-complaint',
  templateUrl: 'engg-accept-complaint.html',
})
export class EnggAcceptComplaintPage {

  complaintData=[{c_no:1,c_date:'24-06-2019'},{c_no:2,c_date:'22-06-2019'},{c_no:3,c_date:'23-05-2019'},{c_no:4,c_date:'19-06-2019'},{c_no:5,c_date:'24-06-2019'},{c_no:6,c_date:'02-06-2019'},{c_no:8,c_date:'10-06-2019'},{c_no:9,c_date:'23-06-2019'}]
  constructor(public navCtrl: NavController,private _rest:RestProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log("Id",this.navParams.get("user_id"))
    this._rest.getAllComplaint().subscribe((data:any)=>{  
        this.complaintData=data.data.filter(el=>{
          if(el.c_assignTo === this.navParams.get("user_id")){
            if(el.c_status ===  3 || el.c_status === 1){
              return el;
            }
          };
        });
    });
  }
  action(Obj:any){
    this.navCtrl.push(EnggViewComplaintPage,{ObjData:Obj});
  }

ionViewWillUnload(){

}

}
