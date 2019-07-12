import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EnggDashboardPage }  from '../pages/engg-dashboard/engg-dashboard'
import { RestProvider } from '../providers/rest/rest';
import { EnggViewComplaintPage} from '../pages/engg-view-complaint/engg-view-complaint'
import { EnggAcceptComplaintPage} from '../pages/engg-accept-complaint/engg-accept-complaint'

//http call
import { HttpClientModule } from '@angular/common/http'
import { LoaderProvider } from '../providers/loader/loader';
import { ToastProvider } from '../providers/toast/toast';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EnggDashboardPage,
    EnggViewComplaintPage,
    EnggAcceptComplaintPage
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
    EnggAcceptComplaintPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    LoaderProvider,
    ToastProvider
  ]
})
export class AppModule {}
