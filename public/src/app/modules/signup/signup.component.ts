import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { EMAIL_REGEX } from './../../core/utils/regular-expression';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isProcessing: Boolean = false;

  form_signup: FormGroup;
  tbx_firstname: FormControl;
  tbx_lastname: FormControl;
  tbx_email: FormControl;
  tbx_password: FormControl;
  tbx_confirmpassword: FormControl;

  constructor() { }

  ngOnInit() {
    this.initialForm();
  }

  initialForm() {
    this.tbx_firstname = new FormControl('', [
      Validators.required
    ]);
    this.tbx_lastname = new FormControl('', [
      Validators.required
    ]);
    this.tbx_email = new FormControl('', [
      Validators.required,
      Validators.pattern(EMAIL_REGEX)
    ]);
    this.tbx_password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.tbx_confirmpassword = new FormControl('', [
      Validators.required
    ]);

    this.form_signup = new FormGroup({
      firstname: this.tbx_firstname,
      lastname: this.tbx_lastname,
      email: this.tbx_email,
      password: this.tbx_password,
      comfirmpassword: this.tbx_confirmpassword
    });
  }

  isSignupFormValid() {
    return this.form_signup.valid;
  }

  disableSignupForm() {
    this.form_signup.disable();
  }

  enableSignupForm() {
    this.form_signup.enable();
  }

  raiseSignupFormError() {
    this.tbx_firstname.markAsTouched();
    this.tbx_lastname.markAsTouched();
    this.tbx_email.markAsTouched();
    this.tbx_password.markAsTouched();
    this.tbx_confirmpassword.markAsTouched();
  }

  signupFormSubmit() {
    const isSignupFormValid = this.isSignupFormValid();
    if (!isSignupFormValid) {
      this.raiseSignupFormError();
      return;
    }

    this.signup();
  }

  beforeSignupRequest() {
    // Show progress bar
    this.isProcessing = true;

    // Disable signin form
    this.disableSignupForm();
  }

  afterSignupRequest() {
    // Hide progress bar
    this.isProcessing = false;

    // Enable signin form
    this.enableSignupForm();
  }

  signup() {
    this.beforeSignupRequest();

    // http request for signup

    // this.afterSignupRequest();
  }
}
