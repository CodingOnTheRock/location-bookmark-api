// Core Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Material Design's Modules
import { MdInputModule, MdButtonModule, MdProgressBarModule, MdSnackBarModule } from '@angular/material';

// Components
import { ProgressBarComponent } from './../../components/progressbar/progressbar.component';

@NgModule({
  imports: [
    BrowserModule,

    MdInputModule,
    MdButtonModule,
    MdProgressBarModule,
    MdSnackBarModule
  ],
  declarations: [
    ProgressBarComponent
  ],
  exports: [
    MdInputModule,
    MdButtonModule,
    MdProgressBarModule,
    MdSnackBarModule,

    ProgressBarComponent
  ]
})
export class SharedModule { }
