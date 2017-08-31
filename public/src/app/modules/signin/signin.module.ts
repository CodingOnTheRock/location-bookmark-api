// Core Modules
import { NgModule } from '@angular/core';

// Application Modules
import { SharedModule } from './../shared/shared.module';
import { SigninRoutingModule } from './signin-routing.module';

// Components
import { SigninComponent } from './components/signin/signin.component';

@NgModule({
  imports: [
    SharedModule,
    SigninRoutingModule
  ],
  declarations: [
    SigninComponent
  ]
})
export class SigninModule { }
