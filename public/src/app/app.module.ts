// Core Modules
import { NgModule } from '@angular/core';

// Extended Modules
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

// Components
import { AppComponent } from './app.component';

// Modules
import { HomeModule } from './modules/home/home.module';
import { SigninModule } from './modules/signin/signin.module';
import { SignupModule } from './modules/signup/signup.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    Angular2FontawesomeModule,

    HomeModule,
    SigninModule,
    SignupModule,
    DashboardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
