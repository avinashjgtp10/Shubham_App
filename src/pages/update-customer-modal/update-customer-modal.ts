import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { RestProvider } from "../../providers/rest/rest";
import { ToastProvider } from "../../providers/toast/toast"
import { MockData } from "../../app/mock-data"
import { PasswordValidator } from '../../validators/password.validator';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
/**
 * Generated class for the UpdateCustomerModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-customer-modal',
  templateUrl: 'update-customer-modal.html',
})
export class UpdateCustomerModalPage {
  cust_data:any;
  current_pass:any;
  passwordEye = "eye";
  cPassEye = "eye"
  public form = [
    { key: "new", val: 'New', isChecked: true },
    { key: "reCondition", val: 'Re Conditioned', isChecked: false }
  ];
  password_type: string = "password";
  cpassword_type: string = "password"
  validations_form: FormGroup;
  matching_passwords_group: FormGroup;
  validation_messages = MockData.adminCreateCustomerValidationMessage;
  maxDate: string = new Date().toISOString();

  constructor(public navCtrl: NavController,
    public viewCtrl:ViewController,
    public toast: ToastProvider,
    public formBuilder: FormBuilder,
    public rest: RestProvider,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let data={
      "u_id":this.navParams.get('userId')
    }
    this.rest.getUserByID(data).subscribe((result:any)=>{
      this.validations_form.patchValue({
        name:result.data[0].u_name,
        phone:result.data[0].u_mobile,
        alter:result.data[0].u_altermobile,
        email:result.data[0].u_email,
      })
      this.current_pass=result.data[0].u_password
    })
  }

  closeModal(){
    this.viewCtrl.dismiss({status:"dismiss"})
  }
  changePaswordType() {
    this.passwordEye = this.passwordEye === "eye" ? "eye-off" : "eye";
    this.password_type = this.password_type === "text" ? "password" : "text";
  }
  changecPaswordType() {
    this.cPassEye = this.cPassEye === "eye" ? "eye-off" : "eye";
    this.cpassword_type = this.cpassword_type === "text" ? "password" : "text";
  }
  ngOnInit() {
    this.matching_passwords_group = new FormGroup({
      u_password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('')
      ])),
      u_cpassword: new FormControl('', Validators.required)
    }, (formGroup: FormGroup) => {
      return PasswordValidator.areEqual(formGroup);
    });

    this.validations_form = this.formBuilder.group({
      // u_dateOf_Purchased: new FormControl('', Validators.required),
      // purchase_condation: new FormControl(''),
      // address: new FormControl(""),
      // u_MachinePurchased: new FormControl('', Validators.required),
      alter: new FormControl("", [Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      name: new FormControl('', Validators.required),
      // u_note: new FormControl(''),
      // service_period:new FormControl('',Validators.required),
      // warrenty_period:new FormControl('',Validators.required),
      // Machine_No:new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      matching_passwords: this.matching_passwords_group,
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
    });
  }

  onSubmit(formValue:any){
    let payload={
      "u_mobile":formValue.phone,
      "u_password":formValue.matching_passwords.u_password,
      "u_cpassword":formValue.matching_passwords.u_cpassword,
      "u_name":formValue.name,
      "u_id":this.navParams.get('userId'),
      "u_altermobile":formValue.alter
    }
    this.rest.updateUserByID(payload).subscribe((result:any)=>{
        if(result.status === "success"){
          this.toast.showToast("Record updated successfully!")
        }
    })
  }

}
