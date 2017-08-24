// Core Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Application Modules
import { SharedModule } from './../shared/shared.module';
import { SigninRoutingModule } from './signin-routing.module';

// Components
import { SigninComponent } from './signin.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    SharedModule,
    SigninRoutingModule
  ],
  declarations: [
    SigninComponent
  ]
})
export class SigninModule { }
