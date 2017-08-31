// Core Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Material Design's Modules
import { MdInputModule, MdButtonModule, MdProgressBarModule, MdSnackBarModule } from '@angular/material';

// Services
import { HttpClient } from './../../core/net/http-client';
import { HttpService } from './services/http-service/http-service.service';
import { LocalStorageUtils } from './../../core/browser/local-storage-utils';
import { RegularExpression } from './../../core/utils/regular-expression';

// Components
import { ProgressBarComponent } from './components/progressbar/progressbar.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    MdInputModule,
    MdButtonModule,
    MdProgressBarModule,
    MdSnackBarModule
  ],
  declarations: [
    ProgressBarComponent
  ],
  providers: [
    HttpClient,
    HttpService,
    LocalStorageUtils,
    RegularExpression
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    MdInputModule,
    MdButtonModule,
    MdProgressBarModule,
    MdSnackBarModule,

    ProgressBarComponent
  ]
})
export class SharedModule { }
