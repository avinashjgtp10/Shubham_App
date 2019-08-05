import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustViewComplaintPage } from './cust-view-complaint';

@NgModule({
  declarations: [
    CustViewComplaintPage,
  ],
  imports: [
    IonicPageModule.forChild(CustViewComplaintPage),
  ],
})
export class CustViewComplaintPageModule {}
