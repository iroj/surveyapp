import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Config } from '../config/config';
import { User } from '@ionic/cloud-angular';
@Injectable()
export class ApiService {
  public headers: Headers;
  public options: RequestOptions;
  public params: URLSearchParams;
  constructor(public http: Http, public config: Config, public user: User) {

  }
  signup(user) {
    let options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'Parameter': this.params
      })
    }),
      link = this.config.serverAdd + 'api/auth/signup';
    console.log(link);
    return this.http.post(link, JSON.stringify(user), options)
      .map(res => res.json());
  }

  getSurveys() {
    console.log(this.user.data.get('appUserId'));
    let options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'Parameter': this.params,
        'Authuser': this.user.data.get('appUserId')
      })
    }),
      link = this.config.serverAdd + 'api/getSurveys';
    console.log(link);
    return this.http.get(link, options)
      .map(res => res.json());
  }
}
