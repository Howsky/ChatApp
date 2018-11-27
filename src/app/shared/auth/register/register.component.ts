import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from 'angularfire2/storage';
import { MatDialog, MatGridTileHeaderCssMatStyler } from '@angular/material';
import { ProgressModalComponent } from '..//progress-modal/progress-modal.component';
import { RegisterController } from './register.controller';

function passwordsMatchingValidator(value: FormGroup) {
  const pass = value.controls['password'];
  const repass = value.controls['rePassword'];
  const valid = pass.value === repass.value;
  if (pass.touched && repass.touched) {
    if (!valid) {
      pass.setErrors({ passwordsMatching: true });
      repass.setErrors({ passwordsMatching: true });
    }
    if (valid) {
      pass.setErrors(null);
      repass.setErrors(null);
    }
  }
  return valid ? null : { passwordsMatching: true };
}

@Component({
  selector: 'chatapp-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegisterController]
})
export class RegisterComponent implements OnInit {
  avatar = 'assets/noav.png';
  avatarFile: File | Blob = null;

  registerForm: FormGroup;

  avatarError = false;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly afStorage: AngularFireStorage,
    private readonly dialog: MatDialog,
    registerController: RegisterController
  ) {}

  ngOnInit() {
    this.registerForm = new FormGroup(
      {
        firstName: new FormControl(null, [Validators.required]),
        lastName: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(6)
        ]),
        rePassword: new FormControl(null, [
          Validators.required,
          Validators.minLength(6)
        ]),
        av: new FormControl(null, [Validators.required])
      },
      [passwordsMatchingValidator]
    );

    this.authService.userExists.subscribe(res => {
      if (res === true) {
        this.dialog.closeAll();
        this.registerForm.controls['email'].setErrors({ emailInUse: true });
      }
    });
  }

  onAvatarSelected(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = ev => {
        this.avatar = reader.result.toString();
        this.avatarFile = event.target.files[0];
      };
      reader.readAsDataURL(event.target.files[0]);
      this.avatarError = false;
    }
  }

  async register() {
    if (this.registerForm.errors) {
      console.log(this.registerForm.errors);
    }
    if (this.avatarFile === null) {
      this.avatarError = true;
    }
    const firstName = this.registerForm.value.firstName;
    const lastName = this.registerForm.value.lastName;
    const email = this.registerForm.value.email;
    const pass = this.registerForm.value.password;
    const rePass = this.registerForm.value.rePassword;
    const av = this.avatarFile;

    let password;
    if (pass === rePass) {
      password = pass;
    }

    if (this.registerForm.valid && password) {
      const user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        avatar: av
      };

      this.openDialog();

      await this.authService.register(user);
      await this.authService.login(user.email, user.password);
      this.closeDialog();
      this.router.navigate(['welcome']);
    }
  }

  gotoLogin() {
    this.router.navigate(['login']);
  }

  openDialog() {
    this.dialog.open(ProgressModalComponent, { panelClass: 'transparent' });
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  getErrorMessage(control) {
    if (control === this.registerForm.controls['firstName']) {
      return control.hasError('required') ? 'You must enter a value' : '';
    }
    if (control === this.registerForm.controls['lastName']) {
      return control.hasError('required') ? 'You must enter a value' : '';
    }
    if (control === this.registerForm.controls['email']) {
      return control.hasError('required')
        ? 'You must enter a value'
        : control.hasError('emailInUse')
        ? 'Email in use'
        : control.hasError('email')
        ? 'Not a valid email'
        : '';
    }
    if (control === this.registerForm.controls['password']) {
      return control.hasError('required')
        ? 'You must enter a value'
        : control.hasError('minlength')
        ? 'Password is too short'
        : '';
    }
    if (control === this.registerForm.controls['rePassword']) {
      return control.hasError('required')
        ? 'You must enter a value'
        : control.hasError('passwordsMatching')
        ? 'passwords do not match'
        : control.hasError('minlength')
        ? 'Password is too short'
        : '';
    }
  }
}
