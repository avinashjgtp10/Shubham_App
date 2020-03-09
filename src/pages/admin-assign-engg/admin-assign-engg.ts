import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from "../../providers/rest/rest";
import { PageLoader } from "../../reusable_component/loader/page_loader";
import { ToastProvider } from "../../providers/toast/toast"
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
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
  userObj: any = {};
  isSearchEng = true;
  public columns : any;
  public rows : any;
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  constructor(public toast: ToastProvider, public rest: RestProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.columns = [
      { name:"name",prop: 'c_id' },
      { name: 'Summary' },
      { name: 'Company' }
    ];

  }

  ionViewDidLoad() {
    this.initializeItems();
    this.initializeUser();
    this.loadPage.showLoader()
  }
  updateComplaint(user: any) {
    let data = {
      status: 3,
      complaintId: this.userObj.c_id,
      assignTo: user.u_id
    }
    this.rest.assignComplaint(data).subscribe((result: any) => {
      if (result.status === "success") {
        this.isSearchEng = true;
        this.initializeItems();
        this.toast.showToast("Success!");
      }
    })
  }
  asign(event: any) {
    this.userObj = event;
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
  initializeUser() {
    this.rest.getAllUsers().subscribe((allUser: any) => {
      this.getAllEngg = allUser.data.filter((el: any) => {
        return parseInt(el.u_role) === 3
      })
    })
  }

  getItems(ev: any) {
    this.initializeItems();
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.allcomplaint = this.allcomplaint.filter((item) => {
        return parseInt(item.c_id) === parseInt(val) || (item.c_desc.toLowerCase().indexOf(val.toLowerCase())) > -1
      })
    }
  }

  initializeItems() {
    this.rest.getAllComplaint().subscribe((result: any) => {
      this.allcomplaint = result.data;
      console.log(this.allcomplaint)
      this.allcomplaint = this.allcomplaint.filter((ele: any) => {
        this.rest.getMachineType().subscribe((result: any) => {
          this.machinType = result.data;

          this.machinType.forEach((el: any) => {
            if (ele.Machine_type === el.id) {
              ele.Machine_type = el.Value;
            }
          })
        })
        console.log(JSON.stringify(this.allcomplaint))
        this.loadPage.hideLoader()
        return ele.c_status === 1
      })
    })
  }

}
