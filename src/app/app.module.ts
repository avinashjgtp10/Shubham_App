import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EnggDashboardPage } from '../pages/engg-dashboard/engg-dashboard'
import { RestProvider } from '../providers/rest/rest';
import { EnggViewComplaintPage } from '../pages/engg-view-complaint/engg-view-complaint'
import { EnggAcceptComplaintPage } from '../pages/engg-accept-complaint/engg-accept-complaint'
import { EnggViewPreviousPage } from "../pages/engg-view-previous/engg-view-previous"
import { AdminDashboardPage } from "../pages/admin-dashboard/admin-dashboard"
import { AdminCreateCustomerPage } from "../pages/admin-create-customer/admin-create-customer"
import { AdminCreateEnggPage } from "../pages/admin-create-engg/admin-create-engg"
import { AdminAssignEnggPage } from "../pages/admin-assign-engg/admin-assign-engg"
//http call
import { HttpClientModule } from '@angular/common/http'
import { LoaderProvider } from '../providers/loader/loader';
import { ToastProvider } from '../providers/toast/toast';

//Reusable Component
import {HeaderComponent} from "../reusable_component/header/header_component"
import {PageLoader } from "../reusable_component/loader/page_loader";

//pipe
import {ConvertMachinNamePipe} from "../pipes/convert-machin-name/convert-machin-name"
@NgModule({
  declarations: [
    ConvertMachinNamePipe,
    MyApp,
    HomePage,
    EnggDashboardPage,
    EnggViewComplaintPage,
    EnggAcceptComplaintPage,
    EnggViewPreviousPage,
    AdminDashboardPage,
    AdminCreateEnggPage,
    AdminCreateCustomerPage,
    PageLoader,
    AdminAssignEnggPage,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EnggDashboardPage,
    EnggViewComplaintPage,
    EnggAcceptComplaintPage,
    EnggViewPreviousPage,
    AdminDashboardPage,
    AdminCreateEnggPage,
    AdminCreateCustomerPage,
    AdminAssignEnggPage,
    PageLoader,
    HeaderComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RestProvider,
    LoaderProvider,
    ToastProvider
  ]
})
export class AppModule { }
