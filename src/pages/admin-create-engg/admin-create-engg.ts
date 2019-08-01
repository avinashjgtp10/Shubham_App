import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PasswordValidator } from '../../validators/password.validator';
import { RestProvider } from '../../providers/rest/rest'
import { ToastProvider } from "../../providers/toast/toast"
/**
 * Generated class for the AdminCreateEnggPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-create-engg',
  templateUrl: 'admin-create-engg.html',
})
export class AdminCreateEnggPage {

  validations_form: FormGroup;
  matching_passwords_group: FormGroup;

  typesOfMachin: any = [{key:1,value:"Mechnical"},{key:2,value:"Electronic"},{key:3,value:"Designing"}]

  constructor(public toast: ToastProvider, public navCtrl: NavController, public rest: RestProvider, public formBuilder: FormBuilder, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminCreateEnggPage');
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
      u_Joining_date: new FormControl('', Validators.required),
      address: new FormControl(""),
      engg_type: new FormControl('', Validators.required),
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
    'u_Joining_date': [
      { type: 'required', message: 'Date is required.' }
    ],
    'engg_type': [
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

  onSubmit(values: any) {
    console.log("Hello", values);
    let Obj = {
      "u_name": values.name,
      "u_mobile": values.phone,
      "u_altermobile": values.alter,
      "u_email": values.email,
      "u_address": values.address,
      "u_MachinePurchased": null,
      "u_dateOf_Purchased": new Date(values.u_dateOf_Purchased),
      "u_password": values.matching_passwords.u_password,
      "u_cpassword": values.matching_passwords.u_cpassword,
      "u_role": 3,
      "u_roleType": values.engg_type,
      "u_joinDate": values.u_Joining_date
    }

    console.log(JSON.stringify(Obj));
    this.rest.isCustomer().subscribe((result: any) => {
      let i = result.data.findIndex((obj: any) => {
        return obj.u_email === Obj.u_email
      })
      if (i === -1) {
        this.rest.createCustomer(Obj).subscribe((result: any) => {
          if (result.status === "success") {
            this.toast.showToast("Engineer Details saved")
          }
        })
      } else {
        this.toast.showToast("Engineer Email-id already exist");
      }
    })
  }


}
