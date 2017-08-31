// Core Modules
import { NgModule } from '@angular/core';

// Application Modules
import { SharedModule } from './../shared/shared.module';
import { SignupRoutingModule } from './signup-routing.module';

// Components
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  imports: [
    SharedModule,
    SignupRoutingModule
  ],
  declarations: [
    SignupComponent
  ]
})
export class SignupModule { }
