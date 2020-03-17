import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { RestProvider } from "../../providers/rest/rest";
import { ToastProvider } from "../../providers/toast/toast"
/**
 * Generated class for the AssignEnggModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assign-engg-modal',
  templateUrl: 'assign-engg-modal.html',
})
export class AssignEnggModalPage {
  complaintData:any;
  getAllEngg = [];

  constructor(public navCtrl: NavController,
    public viewCtrl:ViewController,
    public toast: ToastProvider,
    public rest: RestProvider,
     public navParams: NavParams) {
      this.complaintData=navParams.get('complaintData');
  }

  ionViewDidLoad() {
    this.initializeUser();
    console.log('ionViewDidLoad AssignEnggModalPage');
  }

  initializeUser() {
    this.rest.getAllUsers().subscribe((allUser: any) => {
      this.getAllEngg = allUser.data.filter((el: any) => {
        return parseInt(el.u_role) === 3
      })
    })
  }

  getEngg(ev: any) {
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.getAllEngg = this.getAllEngg.filter((item) => {
        return parseInt(item.u_id) === parseInt(val) || (item.u_email.toLowerCase().indexOf(val.toLowerCase())) > -1 ||
          (item.u_name.toLowerCase().indexOf(val.toLowerCase())) > -1
      })
    }
    if (val.length === 0) {
      this.initializeUser();
    }
  }
  updateComplaint(user: any) {
    let data = {
      status: 3,
      complaintId: this.complaintData.c_id,
      assignTo: user.u_id
    }
    this.rest.assignComplaint(data).subscribe((result: any) => {
      if (result.status === "success") {
        
        this.toast.showToast("Success!");
        this.closeModal();
      }
    })
  }


  closeModal(){
    this.viewCtrl.dismiss({status:"dismiss"})
  }

}
