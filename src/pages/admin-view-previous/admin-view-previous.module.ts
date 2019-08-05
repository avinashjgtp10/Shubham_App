import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminViewPreviousPage } from './admin-view-previous';

@NgModule({
  declarations: [
    AdminViewPreviousPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminViewPreviousPage),
  ],
})
export class AdminViewPreviousPageModule {}
