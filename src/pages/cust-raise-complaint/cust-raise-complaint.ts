import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { RestProvider } from '../../providers/rest/rest'
import { ToastProvider } from "../../providers/toast/toast"
/**
 * Generated class for the CustRaiseComplaintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cust-raise-complaint',
  templateUrl: 'cust-raise-complaint.html',
})
export class CustRaiseComplaintPage {

  validations_form: FormGroup;

  typesOfMachin: any = [{ key: 1, value: "Mechnical" }, { key: 2, value: "Electronic" }, { key: 3, value: "Designing" }]

  constructor(public toast: ToastProvider, public navCtrl: NavController, public rest: RestProvider, public formBuilder: FormBuilder, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustRaiseComplaintPage');
  }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      u_Joining_date: new FormControl('', Validators.required),
      engg_type: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
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
      { type: 'required', message: 'Description is required.' }
    ],
  };
  onSubmit(values: any) {
    console.log(JSON.stringify(values));
    let data = {
      "c_desc": values.name,
      "c_assignBy": this.navParams.get("user_id"),
      "machine_type": values.engg_type,
      "c_date": values.u_Joining_date,
      "c_status": 1
    }
    this.rest.createComplaint(data).subscribe((result: any) => {
      if(result.status === "success"){
        this.toast.showToast("Your call has been submitted");
        this.validations_form.reset();
      }
    })
  }

}
