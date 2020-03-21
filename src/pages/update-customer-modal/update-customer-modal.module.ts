import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateCustomerModalPage } from './update-customer-modal';

@NgModule({
  declarations: [
    UpdateCustomerModalPage,
  ],
  imports: [
    IonicPageModule.forChild(UpdateCustomerModalPage),
  ],
})
export class UpdateCustomerModalPageModule {}
