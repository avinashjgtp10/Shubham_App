import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommonCartPage } from './common-cart';

@NgModule({
  declarations: [
    CommonCartPage,
  ],
  imports: [
    IonicPageModule.forChild(CommonCartPage),
  ],
})
export class CommonCartPageModule {}
