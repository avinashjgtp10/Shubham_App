import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PasswordValidator } from '../../validators/password.validator';
import { RestProvider } from '../../providers/rest/rest'
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

  validations_form: FormGroup;
  matching_passwords_group: FormGroup;

  typesOfMachin: any = [
    "Computerised Embroidery Machines",
    "Reconditioned Barudan  Embroidery Machines",
    "Circular Knitting Machines",
    "Flat knitting Machines",
    "Chain Stitch Machines",
    "Laser Cutting Machines",
    "Dual sequence cording Machines",
    "Cap knitting Machines", "Coller Knitting Machines"]

  constructor(public navCtrl: NavController,public rest:RestProvider, public formBuilder: FormBuilder, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminCreateCustomerPage');
  }

  ngOnInit() {

    this.matching_passwords_group = new FormGroup({
      u_password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      u_cpassword: new FormControl('', Validators.required)
    }, (formGroup: FormGroup) => {
      return PasswordValidator.areEqual(formGroup);
    });

    this.validations_form = this.formBuilder.group({
      u_dateOf_Purchased: new FormControl('', Validators.required),
      address: new FormControl(""),
      u_MachinePurchased: new FormControl('', Validators.required),
      alter: new FormControl("", [Validators.minLength(10), Validators.pattern("[0-9]+")]),
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      matching_passwords: this.matching_passwords_group,
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern("[0-9]+")])
    });



  }
  validation_messages = {
    'u_dateOf_Purchased': [
      { type: 'required', message: 'Date is required.' }
    ],
    'u_MachinePurchased': [
      { type: 'required', message: 'Machine name is required.' }
    ],
    'name': [
      { type: 'required', message: 'Name is required.' }
    ],
    'lastname': [
      { type: 'required', message: 'Last name is required.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please wnter a valid email.' }
    ],
    'phone': [
      { type: 'required', message: 'Phone is required.' },
      { type: 'maxLength', message: 'The phone is incorrect' },
      { type: 'pattern', message: 'The phone is incorrect' }
    ],
    'alter': [
      { type: 'maxLength', message: 'The phone is incorrect' },
      { type: 'pattern', message: 'The phone is incorrect' }
    ],
    'u_password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
    ],
    'u_cpassword': [
      { type: 'required', message: 'Confirm password is required.' }
    ],
    'matching_passwords': [
      { type: 'areEqual', message: 'Password mismatch.' }
    ],
    'terms': [
      { type: 'pattern', message: 'You must accept terms and conditions.' }
    ],
  };

  onSubmit(values:any) {
    console.log("Hello", values);
    let Obj={
      "u_name": values.name,
      "u_mobile": values.phone,
      "u_altermobile": values.alter,
      "u_email": values.email,
      "u_address": values.address,
      "u_MachinePurchased": values.u_MachinePurchased,
      "u_dateOf_Purchased": values.u_dateOf_Purchased,
      "u_password": values.matching_passwords.u_password,
      "u_cpassword": values.matching_passwords.u_cpassword,
      "u_role": 1,
      "u_roleType": null,
      "u_joinDate": new Date()
  }
    this.rest.createCustomer(Obj).subscribe((result:any) => {
      if(result.status === "success"){
        alert("success")
      }
    })
  }

}
