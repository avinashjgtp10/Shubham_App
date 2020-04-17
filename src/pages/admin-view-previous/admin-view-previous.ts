import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest'
import { AppSettings } from "../../app/app.settings"
import { Observable } from 'rxjs';

/**
 * Generated class for the AdminViewPreviousPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-view-previous',
  templateUrl: 'admin-view-previous.html',
})
export class AdminViewPreviousPage {
  totalRecord: any;
  allcomplaint = []
  complaintArray = []
  openFilter: boolean = false
  customPickerOptionFrom = {
    buttons: [{
      text: 'Clear',
      handler: () => {
        this.data.startDate = "";
        this.data.endDate = ""
      }

    }]
  }
  customPickerOptionEndFrom = {
    buttons: [{
      text: 'Clear',
      handler: () =>
        this.data.endDate = ""
    }]
  }
  data = {
    startDate: "",
    endDate: "",
    status: "",
    searchBy: "",
    searchByText: ""
  }
  maxDate: string = new Date().toISOString();
  status = AppSettings.status;
  constructor(public rest: RestProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.initializeItems();
    this.totalRecord = this.allcomplaint.length;
  }

  onCancel(ev:any){
    console.log(ev)
  }

  initializeItems() {
    console.log("calling ini")
    this.allcomplaint = []
    this.rest.getAllComplaint().subscribe((result: any) => {
      this.allcomplaint = result.data;
      this.allcomplaint = this.allcomplaint.filter((ele: any) => {
        AppSettings.status.forEach((e: any) => {
          if (parseInt(e.id) === parseInt(ele.c_status)) {
            ele.c_status = e.value;
          }
        });
        return ele
      })
      this.complaintArray = this.allcomplaint;
      this.totalRecord = this.allcomplaint.length;
    })

  }
  getItems(ev: any) {
    // set val to the value of the searchbar
    const val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != ''  ) {
      let arr=[];
      this.rest.getAllUsers().subscribe((user:any) =>{
        arr=user.data.filter((el:any)=>{
         if(el.u_name === val || el.u_MachineNo === val){
           return el.u_id
         }
        })
        if(arr){
          this.allcomplaint = this.allcomplaint.filter((item) => {
              for(let i=0;i<arr.length;i++){
                if(parseInt(arr[i].u_id) === parseInt(item.c_assignTo) ){
                return parseInt(arr[i].u_id) === parseInt(item.c_assignTo) 
              }
              if(parseInt(arr[i].u_id) === parseInt(item.c_assignBy) ){
                return parseInt(arr[i].u_id) === parseInt(item.c_assignBy) 
              }
            }
           }) 
        } })

    }
    if (val.length === 0) {
      this.initializeItems();   // Reset items back to all of the items
    }
  }

  getRealTimeUserData(value:any){
     this.rest.getAllUsers().subscribe((result:any)=>{

    })
  }

  openFilterModal() {
    this.openFilter = !this.openFilter
    if (!this.openFilter) {
      this.initializeItems()
    } else (
      this.filterItem(this.data)
    )
  }
  filterItem(data: any) {
    console.log(data)
    this.allcomplaint = this.complaintArray.filter((item) => {
      // if (this.data.searchBy) {
      //   if(this.data.searchBy === "party"){
      //     this.rest.getAllUsers().subscribe((partyData:any)=>{

      //     })
      //   }
      //  }
      // else {
        if ((data.status !== "") && (data.startDate !== "")) {
          return (item.c_status === data.status) && ((new Date(data.startDate) <= new Date(item.c_date)) && (new Date(data.endDate) >= new Date(item.c_date)));
        } else if (data.status && data.startDate === "") {
          return (item.c_status === data.status)
        } else if ((data.status === "") && (data.startDate !== "")) {
          return (new Date(data.startDate) <= new Date(item.c_date)) && (new Date(data.endDate) >= new Date(item.c_date))
        }
      //}
    })

  }


}




