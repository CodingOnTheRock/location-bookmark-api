// Core Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Application Modules
import { SharedModule } from './../shared/shared.module';
import { SignupRoutingModule } from './signup-routing.module';

// Components
import { SignupComponent } from './signup.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    SharedModule,

    SignupRoutingModule
  ],
  declarations: [
    SignupComponent
  ]
})
export class SignupModule { }
