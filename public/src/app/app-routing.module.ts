// Core Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Routes
const appRoutes: Routes = [
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
