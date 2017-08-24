// Core Modules
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

// Services
import { AuthService } from './../../services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    const isLoggedIn = this.authService.isLoggedIn();

    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/signin']);
    }
  }
}
