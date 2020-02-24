import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustDetailsPage } from './cust-details';

@NgModule({
  declarations: [
    CustDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CustDetailsPage),
  ],
})
export class CustDetailsPageModule {}
