import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminCreateCustomerPage } from './admin-create-customer';

@NgModule({
  declarations: [
    AdminCreateCustomerPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminCreateCustomerPage),
  ],
})
export class AdminCreateCustomerPageModule {}
