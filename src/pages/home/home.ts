import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EnggDashboardPage } from '../engg-dashboard/engg-dashboard'
import { RestProvider } from '../../providers/rest/rest';
import { NgForm } from '@angular/forms';
import { LoaderProvider } from '../../providers/loader/loader'
import { ToastProvider } from "../../providers/toast/toast"
import { AdminDashboardPage } from "../admin-dashboard/admin-dashboard";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private toast: ToastProvider, private loader: LoaderProvider, private rest: RestProvider) {

  }
  ionViewDidLoad() {
  }

  login(form: NgForm) {
    this.loader.presentLoading();
    let value = form.value
    this.rest.userLogin(value.email, value.password).subscribe((data: any) => {
      this.loader.stoploading();
      if (data.status === "success" && data.data.u_role === 3) {
        this.navCtrl.push(EnggDashboardPage, { user_id: data.data.u_id });
      } if (data.status === "success" && data.data.u_role === 2) {
        this.navCtrl.push(AdminDashboardPage, { user_id: data.data.u_id });
      } if (data.status === "success" && data.data.u_role === 1) {
        console.log("client")
      } if (data.status === "error") {
        this.toast.showToast("Wrong Password");
        console.log("error")
      } else {
        console.log('error!')
      }
    });

  }

}
