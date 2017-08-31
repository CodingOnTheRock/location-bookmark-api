// Core Modules
import { Injectable } from '@angular/core';

// Services
import { LocalStorageUtils } from './../../core/browser/local-storage-utils';
import { environment } from './../../../environments/environment';

@Injectable()
export class AuthService {

  constructor(private localStorageUtils: LocalStorageUtils) { }

  isLoggedIn() {
    const token = this.localStorageUtils.getToken(environment.application.security.token_key);

    if (token) {
      return true;
    }
    return false;
  }
}
