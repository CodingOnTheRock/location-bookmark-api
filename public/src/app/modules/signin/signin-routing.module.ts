import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './signin.component';

const signinRoutes: Routes = [
  { path: 'signin', component: SigninComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(signinRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class SigninRoutingModule { }
