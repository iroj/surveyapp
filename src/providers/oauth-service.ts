import { Injectable } from '@angular/core';
import { Auth, User } from '@ionic/cloud-angular';
import { StorageService } from './storage-service';

import 'rxjs/add/operator/map';

@Injectable()
export class OauthService {

  constructor(public auth: Auth, public user: User, public storage: StorageService) {

  }
  googleLogin() {
    return this.auth.login('google').then(data => {
      console.log(data);
      return true;
    }, err => {
      console.log(err)
    })
  }

  linkedInLogin() {
    return this.auth.login('linkedin').then(data => {
      this.auth.storeToken({}, data.token);
      this.storage.save('accessToken', data.token);
      if (this.user.data.get('appUserId'))
        return true
      else return {
        username: this.user.social.linkedin.data.email,
        email: this.user.social.linkedin.data.email,
        profileImageURL: this.user.social.linkedin.data.profile_picture,
        displayName: this.user.social.linkedin.data.full_name,
        provider: 'linkedin',
        providerData: this.user.social.linkedin.data.raw_data,
        roles: ['surveyor']
      };
    }, err => {
      console.log(err)
      return err
    })
  }
  isAuthenticated() {
    console.log(this.auth);
    console.log(this.user);
    if (this.auth.isAuthenticated() && this.user && this.user.data.get('appUserId'))
      return true
    else return false
  }
}
