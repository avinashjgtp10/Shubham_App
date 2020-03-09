import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnggDetailsPage } from './engg-details';

@NgModule({
  declarations: [
    EnggDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(EnggDetailsPage),
  ],
})
export class EnggDetailsPageModule {}
