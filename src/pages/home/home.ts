import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiService } from '../../providers/api-service'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public surveys = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public apiService: ApiService) {
    this.apiService.getSurveys().subscribe(data => {
      this.surveys = data;
      console.log(data);
    }, err => {
      console.log(err)
    })
  }

  ionViewDidLoad() {
    console.log('Welcome to Survey App');

  }

}
