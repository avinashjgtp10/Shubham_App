import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustDashboardPage } from './cust-dashboard';

@NgModule({
  declarations: [
    CustDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(CustDashboardPage),
  ],
})
export class CustDashboardPageModule {}
