import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EnggDashboardPage } from '../engg-dashboard/engg-dashboard'
import { RestProvider } from '../../providers/rest/rest';
import { LoaderProvider } from '../../providers/loader/loader'
import { ToastProvider } from "../../providers/toast/toast"
import { AdminDashboardPage } from "../admin-dashboard/admin-dashboard";
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PageLoader } from "../../reusable_component/loader/page_loader"
import { CustDashboardPage } from "../cust-dashboard/cust-dashboard"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  password_type:string= 'password'
  @ViewChild(PageLoader) loadPage: PageLoader;
  validations_form: FormGroup;
  matching_passwords_group: FormGroup;
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, private toast: ToastProvider, private loader: LoaderProvider, private rest: RestProvider) {

  }

  changePaswordType(){
    console.log(this.password_type)
    this.password_type=  this.password_type === 'text' ? 'password':'text'
  }
  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      password: new FormControl("", [Validators.minLength(3), Validators.required]),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]))
    });

    console.log(this.validations_form.get('email'))
  }

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'maxLength', message: 'Password length should be grater than 5!' },
      { type: 'required', message: 'Password is required.' }
    ],
  };


  login(value: any) {
    this.loadPage.showLoader()
    this.rest.userLogin(value.email, value.password).subscribe((data: any) => {
      this.loadPage.hideLoader()
      if (data.status === "success" && data.data.u_role === 3) {
        this.navCtrl.push(EnggDashboardPage, { user_id: data.data.u_id });
      } if (data.status === "success" && data.data.u_role === 2) {
        this.navCtrl.push(AdminDashboardPage, { user_id: data.data.u_id });
      } if (data.status === "success" && data.data.u_role === 1) {
        this.navCtrl.push(CustDashboardPage, { user_id: data.data.u_id });
      } if (data.status === "error") {
        this.toast.showToast("Wrong Password");
        console.log("error")
      } else {
        console.log('error!')
      }
    });

  }

}
