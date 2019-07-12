import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EnggDashboardPage } from '../engg-dashboard/engg-dashboard'
import { RestProvider } from '../../providers/rest/rest';
import { NgForm } from '@angular/forms';
import { LoaderProvider } from '../../providers/loader/loader'
import { ToastProvider } from "../../providers/toast/toast"
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  config=[
    {id:1,
      username:"engg@gmail.com",
    password:'engg123',
    role:2},
    {id:2,
      username:"user@gmail.com",
    password:'user123',
    role:1},
    {id:3,
      username:"admin@gmail.com",
    password:'admin',
    role:3},
   ]

  constructor(public navCtrl: NavController,private toast:ToastProvider, private loader:LoaderProvider, private rest:RestProvider) {

  }
  ionViewDidLoad(){
  this.rest.getAllComplaint().subscribe((data:any)=>{
    console.log(data);
  })
  }

  login(form:NgForm){
    this.loader.presentLoading();
    let value=form.value
    this.rest.userLogin(value.email,value.password).subscribe((data:any)=>{
      this.loader.stoploading();
      if(data.status  === "success" && data.data.u_role === 3 ){
        this.navCtrl.push(EnggDashboardPage,{user_id:data.data.u_id});
      }if(data.status  === "success" && data.data.u_role === 2 ){
        console.log("admin")
      }if(data.status  === "success" && data.data.u_role === 1 ){
        console.log("client")
      }if(data.status  === "error" ){
        this.toast.showToast("Wrong Password");
        console.log("error")
      }else{
        console.log('error!')
      }
    });

  }

}
