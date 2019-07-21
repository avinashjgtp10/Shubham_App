import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from "../../providers/rest/rest"
import { ToastProvider } from "../../providers/toast/toast"

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
  filterData = {
    c_id:"",
    c_assignBy: "",
    c_name: "",
    u_mobile:"",
    u_altermobile:"",
    e_desc:"",
    u_email:"",
    c_status:""
  };
  enggData = {};
  complaintData = [];

  constructor(public navCtrl: NavController,public toast:ToastProvider, public rest: RestProvider, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.filterData = this.navParams.get('ObjData');
    this.rest.getCustomerDetails(this.filterData.c_assignBy).subscribe((result:any) => {
      this.filterData.c_name = result.data.u_name;
      this.filterData.u_mobile=result.data.u_mobile;
      this.filterData.u_altermobile=result.data.u_altermobile;
      this.filterData.u_email=result.data.u_email;
      this.filterData.e_desc=result.data.e_desc;
    })
    console.log("Assigned user details");
  }
  addData(){
    let data={
      status:parseInt(this.filterData.c_status),
      complaintId:this.filterData.c_id,
      e_desc:this.filterData.e_desc
    }
    this.rest.updateComplaint(data).subscribe((result:any)=>{
      if(result.status === "success"){
        this.toast.showToast("Success!");
        this.navCtrl.pop();
      }
    })
    console.log("UserData"+JSON.stringify(this.filterData))
  }

}
