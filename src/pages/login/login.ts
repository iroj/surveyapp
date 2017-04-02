import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OauthService } from '../../providers/oauth-service';
import { ApiService } from '../../providers/api-service';
import { MainPage } from '../main/main';
import { User } from '@ionic/cloud-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public oauth: OauthService, public apiService: ApiService, public user: User, public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  googleLogin() {
    console.log('logging in with google');
    this.oauth.googleLogin().then(res => {
      console.log(res);
    }, err => {
      console.log(err)
    })
  }

  linkedInLogin() {
    console.log('logging in with linkedin');
    this.oauth.linkedInLogin().then(res => {
      console.log(res);
      if (res.username)//save if new user
        this.apiService.signup(res).subscribe(user => {
          this.user.set('appId', user._id);
          this.user.save();
          console.log(user)
        }, err => {
          console.log(err);
        })
      else if (res === true) //old user
        this.navCtrl.setRoot(MainPage);
      else
        console.log('cordova error')

    }, err => {
      console.log(err)
    })
  }
}
