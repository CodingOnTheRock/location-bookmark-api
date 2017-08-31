import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './components/signup/signup.component';

const signupRoutes: Routes = [
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(signupRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class SignupRoutingModule { }
