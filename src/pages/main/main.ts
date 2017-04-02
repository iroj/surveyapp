import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EventsPage } from '../events/events';
import { SettingsPage } from '../settings/settings';
import { SignoutPage } from '../signout/signout';
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
  @ViewChild('menuContent') nav: NavController;
  public pages: Array<{ title: string, component: any }>;
  public rootPage:any
  constructor(public menu: MenuController) {
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Events', component: EventsPage },
      { title: 'Settings', component: SettingsPage },
      { title: 'Siaagnout', component: SignoutPage }
    ];
  }

  ionViewDidLoad() {
    this.nav.setRoot(HomePage);
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
