// Core Modules
import { Injectable } from '@angular/core';

// Services
import { HttpClient } from './../../core/net/http-client';

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  isLoggedIn() {
    const token = this.httpClient.getToken();

    if (token) {
      return true;
    }
    return false;
  }
}
