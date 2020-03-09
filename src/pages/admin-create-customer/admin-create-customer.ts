import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PasswordValidator } from '../../validators/password.validator';
import { RestProvider } from '../../providers/rest/rest'
import { ToastProvider } from "../../providers/toast/toast"
import { MockData } from "../../app/mock-data"
/**
 * Generated class for the AdminCreateCustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-create-customer',
  templateUrl: 'admin-create-customer.html',
})
export class AdminCreateCustomerPage {


  password_type:string="password";
  cpassword_type:string="password"
  validations_form: FormGroup;
  matching_passwords_group: FormGroup;
  validation_messages=MockData.adminCreateCustomerValidationMessage;
  maxDate:string=new Date().toISOString();

  typesOfMachin: any = [
    "Computerised Embroidery Machines",
    "Reconditioned Barudan  Embroidery Machines",
    "Circular Knitting Machines",
    "Flat knitting Machines",
    "Chain Stitch Machines",
    "Laser Cutting Machines",
    "Dual sequence cording Machines",
    "Cap knitting Machines", "Coller Knitting Machines"]

  constructor(public toast: ToastProvider, public navCtrl: NavController, public rest: RestProvider, public formBuilder: FormBuilder, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminCreateCustomerPage');
  }

  changePaswordType(){
    this.password_type=this.password_type === "text" ? "password":"text";
  }
  changecPaswordType(){
    this.cpassword_type=this.cpassword_type === "text" ? "password":"text";
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
      u_dateOf_Purchased: new FormControl('', Validators.required),
      address: new FormControl(""),
      u_MachinePurchased: new FormControl('', Validators.required),
      alter: new FormControl("", [Validators.minLength(10),Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      matching_passwords: this.matching_passwords_group,
      phone: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10) ,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
    });
  }

  onSubmit(values: any) {
    let Obj = {
      "u_name": values.name,
      "u_mobile": values.phone,
      "u_altermobile": values.alter,
      "u_email": values.email,
      "u_address": values.address,
      "u_MachinePurchased": values.u_MachinePurchased,
      "u_dateOf_Purchased": new Date(values.u_dateOf_Purchased),
      "u_password": values.matching_passwords.u_password,
      "u_cpassword": values.matching_passwords.u_cpassword,
      "u_role": 1,
      "u_roleType": null,
      "u_joinDate": new Date()
    }
        this.rest.createCustomer(Obj).subscribe((result: any) => {
          if (result.status === "success") {
            this.toast.showToast("Customer Details saved");
            this.validations_form.reset();
          }
          if(result.status === "error"){
            this.toast.showToast(result.message)
          }
        })
      
  }
}
