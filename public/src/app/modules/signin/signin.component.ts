import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { EMAIL_REGEX } from './../../core/utils/regular-expression';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  // States
  isProcessing: Boolean = false;

  // Form Controls
  form_signin: FormGroup;
  tbx_email: FormControl;
  tbx_password: FormControl;

  // Constructor
  constructor() { }

  ngOnInit() {
    this.initialSigninForm();
  }

  initialSigninForm() {
    this.tbx_email = new FormControl('', [
      Validators.required,
      Validators.pattern(EMAIL_REGEX)
    ]);
    this.tbx_password = new FormControl('', [
      Validators.required
    ]);

    this.form_signin = new FormGroup({
      email: this.tbx_email,
      password: this.tbx_password
    });
  }

  isSigninFormValid() {
    return this.form_signin.valid;
  }

  resetSigninForm() {
    this.form_signin.reset();
  }

  disableSigninForm() {
    this.form_signin.disable();
  }

  enableSigninForm() {
    this.form_signin.enable();
  }

  raiseSigninFormError() {
    this.tbx_email.markAsTouched();
    this.tbx_password.markAsTouched();
  }

  signinFormSubmit() {
    const isSigninFormValid = this.isSigninFormValid();
    if (!isSigninFormValid) {
      this.raiseSigninFormError();
      return;
    }

    this.signin();
  }

  beforeAuthenticationRequest() {
    // Show progress bar
    this.isProcessing = true;

    // Disable signin form
    this.disableSigninForm();
  }

  afterAuthenticationRequest() {
    // Hide progress bar
    this.isProcessing = false;

    // Enable signin form
    this.enableSigninForm();
  }

  signin() {
    this.beforeAuthenticationRequest();

    // http request for authentication

    // this.afterAuthenticationRequest();
  }
}
