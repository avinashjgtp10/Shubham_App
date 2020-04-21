import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';

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
import { AdminViewPreviousPage } from "../pages/admin-view-previous/admin-view-previous"
import { CustDashboardPage } from "../pages/cust-dashboard/cust-dashboard"
import { CustRaiseComplaintPage } from "../pages/cust-raise-complaint/cust-raise-complaint"
import { CustViewComplaintPage } from "../pages/cust-view-complaint/cust-view-complaint"
import { NgxDatatableModule} from "@swimlane/ngx-datatable"
import { CustDetailsPage } from "../pages/cust-details/cust-details"
import { EnggDetailsPage } from "../pages/engg-details/engg-details";

//Modal
import { AssignEnggModalPage } from "../pages/assign-engg-modal/assign-engg-modal"
import { UpdateCustomerModalPage } from "../pages/update-customer-modal/update-customer-modal"


//http call
import { HttpClientModule } from '@angular/common/http'
import { LoaderProvider } from '../providers/loader/loader';
import { ToastProvider } from '../providers/toast/toast';
import { FileTransformationProvider } from '../providers/file-transformation/file-transformation'

//Reusable Component
import { HeaderComponent } from "../reusable_component/header/header_component"
import { PageLoader } from "../reusable_component/loader/page_loader";
import { TabComponent } from "../components/tab/tab"
import { ComponentsShowPasswordComponent } from "../components/components-show-password/components-show-password"


//pipe
import { ConvertMachinNamePipe } from "../pipes/convert-machin-name/convert-machin-name"

//Directives
import { DirectivesShowPasswordDirective } from "../directives/directives-show-password/directives-show-password"


@NgModule({
  declarations: [
    EnggDetailsPage,
    CustDetailsPage,
    ConvertMachinNamePipe,
    ComponentsShowPasswordComponent,
    DirectivesShowPasswordDirective,
    TabComponent,
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
    AdminViewPreviousPage,
    CustDashboardPage,
    CustViewComplaintPage,
    CustRaiseComplaintPage,
    HeaderComponent,
    AssignEnggModalPage,
    UpdateCustomerModalPage
  ],
  imports: [
    BrowserModule,
    
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    NgxDatatableModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AssignEnggModalPage,
    EnggDashboardPage,
    CustDetailsPage,
    EnggDetailsPage,
    EnggViewComplaintPage,
    EnggAcceptComplaintPage,
    EnggViewPreviousPage,
    AdminDashboardPage,
    AdminCreateEnggPage,
    AdminCreateCustomerPage,
    AdminAssignEnggPage,
    AdminViewPreviousPage,
    PageLoader,
    CustDashboardPage,
    CustViewComplaintPage,
    CustRaiseComplaintPage,
    HeaderComponent,
    UpdateCustomerModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RestProvider,
    LoaderProvider,
    ToastProvider,
    FileTransformationProvider,
    FileTransfer,
    File
  ]
})
export class AppModule { }
