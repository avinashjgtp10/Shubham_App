import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { RestProvider } from "../../providers/rest/rest";
import { PageLoader } from "../../reusable_component/loader/page_loader";

import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { AssignEnggModalPage } from "../assign-engg-modal/assign-engg-modal"
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
  madalDismissdata: any;
  @ViewChild(PageLoader) loadPage: PageLoader;
  machinType = [];
  allcomplaint = [];
  
  userObj: any = {};
  isSearchEng = true;
  public columns: any;
  public rows: any;
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  constructor(
    public modalCtrl: ModalController,
    public rest: RestProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.columns = [
      { name: "name", prop: 'c_id' },
      { name: 'Summary' },
      { name: 'Company' }
    ];

  }

  ionViewDidLoad() {
    this.initializeItems();
    this.loadPage.showLoader()
  }
  
  asign(event: any) {
    const enggModal = this.modalCtrl.create(AssignEnggModalPage,
      { complaintData: event })
    enggModal.onDidDismiss((data: any) => {
      this.initializeItems()
    })
    enggModal.present();
  }
  


  getItems(ev: any) {
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.allcomplaint = this.allcomplaint.filter((item) => {
        return parseInt(item.c_id) === parseInt(val) || (item.c_desc.toLowerCase().indexOf(val.toLowerCase())) > -1
      })
    }
    if (val.length === 0) {
      this.initializeItems()
    }
  }
  initializeItems() {
    this.rest.getAllComplaint().subscribe((result: any) => {
      this.allcomplaint = result.data;
      this.allcomplaint = this.allcomplaint.filter((ele: any) => {
        this.rest.getMachineType().subscribe((result: any) => {
          this.machinType = result.data;
          this.machinType.forEach((el: any) => {
            if (ele.Machine_type === el.id) {
              this.loadPage.hideLoader()
              ele.Machine_type = el.Value;
            }
          })
        })
        return ele.c_status === 1
      })
    })
  }

}
