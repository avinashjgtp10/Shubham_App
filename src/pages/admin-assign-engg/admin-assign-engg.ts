import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from "../../providers/rest/rest";
import { PageLoader } from "../../reusable_component/loader/page_loader"
/**
 * Generated class for the AdminAssignEnggPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-assign-engg',
  templateUrl: 'admin-assign-engg.html',
})
export class AdminAssignEnggPage {
  @ViewChild(PageLoader) loadPage: PageLoader;
  machinType = [];
  allcomplaint = [];
  getAllEngg = [];
  isSearchEng = true;

  constructor(public rest: RestProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.rest.getAllUsers().subscribe((data:any)=>{
      console.log(JSON.stringify(data));
    });
    this.initializeItems();
    this.initializeUser();
    this.loadPage.showLoader()
  }
  asign(event){
  this.isSearchEng = false;
  }
  getEngg(ev: any) {
    this.initializeUser();
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.getAllEngg = this.getAllEngg.filter((item) => {
        return parseInt(item.u_id) === parseInt(val) || (item.u_email.toLowerCase().indexOf(val.toLowerCase())) > -1 ||
        (item.u_name.toLowerCase().indexOf(val.toLowerCase())) > -1
      })
    }
  }
  initializeUser(){
    this.rest.getAllUsers().subscribe((allUser:any)=>{
    this.getAllEngg = allUser.data.filter((el:any)=>{
      return parseInt(el.u_role) === 3
    })
  })
  }
  
  initializeItems() {
    this.rest.getAllComplaint().subscribe((result: any) => {
      this.allcomplaint = result.data;
      this.allcomplaint = this.allcomplaint.filter((ele: any) => {
        this.rest.getMachineType().subscribe((result: any) => {
          this.machinType = result.data;
          this.machinType.forEach((el: any) => {
            console.log(this.machinType);
            if (ele.Machine_type === el.id) {
              ele.Machine_type = el.Value;
            }
          })
        })
        this.loadPage.hideLoader()
        return ele.c_status === 1
      })
    })
  }

}
