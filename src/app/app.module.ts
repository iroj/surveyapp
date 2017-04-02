import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {IonicStorageModule } from '@ionic/storage';

//pages
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { HomePage } from '../pages/home/home';
import { EventsPage } from '../pages/events/events';
import { SettingsPage } from '../pages/settings/settings';
import { SignoutPage } from '../pages/signout/signout';
//native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// providers
import {OauthService } from '../providers/oauth-service';
import {StorageService } from '../providers/storage-service';
import {ApiService } from '../providers/api-service';
import {Config } from '../config/config';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '5a4a8e68'
  }
}

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    MainPage,
    HomePage,
    EventsPage,
    SignoutPage,
    SettingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    LoginPage,
    MainPage,
    HomePage,
    EventsPage,
    SignoutPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    OauthService,
    ApiService,
    StorageService,
    Config,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
