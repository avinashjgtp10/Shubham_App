import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnggDashboardPage } from './engg-dashboard';

@NgModule({
  declarations: [
    EnggDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(EnggDashboardPage),
  ],
})
export class EnggDashboardPageModule {}
