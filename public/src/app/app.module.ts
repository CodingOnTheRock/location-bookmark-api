// Core Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Extended Modules
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';

// Modules
import { HomeModule } from './modules/home/home.module';
import { SigninModule } from './modules/signin/signin.module';
import { SignupModule } from './modules/signup/signup.module';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    Angular2FontawesomeModule,
    BrowserAnimationsModule,

    HomeModule,
    SigninModule,
    SignupModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
