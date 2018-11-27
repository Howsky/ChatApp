import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'chatapp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });

    this.authService.userNotFound.subscribe(res => {
      if (res === true) {
        this.loginForm.controls['email'].setErrors({userNotFound: true});
      }
    });

    this.authService.loginWrongPassword.subscribe(res => {
      if (res === true) {
        this.loginForm.controls['password'].setErrors({invalidPassword: true});
      }
    });
  }

  login() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.authService.login(email, password).then(() => {
      this.router.navigate(['welcome']);
    });
  }

  gotoRegistration() {
    this.router.navigate(['register']);
  }

  getErrorMessage(control) {
    if (control === this.loginForm.controls['email']) {
      return control.hasError('required') ? 'You must enter a value' :
      control.hasError('email') ? 'Not a valid email' :
      control.hasError('userNotFound') ? 'User does not exist' :
      '';
    }
    if (control === this.loginForm.controls['email']) {
      return control.hasError('required') ? 'You must enter a value' :
      control.hasError('invalidPassword') ? 'Invalid password' :
      control.hasError('minlength') ? 'Password is too short' :
      '';
    }
  }

}
