import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Auth } from '@ionic/cloud-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-signout',
  templateUrl: 'signout.html'
})
export class SignoutPage {

  constructor(public navCtrl: NavController, public auth: Auth, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignoutPage');
  }

  signout() {
    this.auth.logout();
    this.navCtrl.setRoot(LoginPage);
  }

}
