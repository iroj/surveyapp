import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';

import { OauthService } from '../providers/oauth-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('init') nav: Nav;
  constructor(public oauth: OauthService, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if (this.oauth.isAuthenticated())
        this.nav.setRoot(MainPage);
      else
        this.nav.setRoot(LoginPage);
    });
  }

}
