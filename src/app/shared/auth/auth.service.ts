import { AuthApiClient } from './auth.api-client';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: string;

  loginWrongPassword: BehaviorSubject<boolean> = new BehaviorSubject(false);
  userNotFound: BehaviorSubject<boolean> = new BehaviorSubject(false);
  userExists: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private readonly router: Router,
    private authApiClient: AuthApiClient,
  ) {}

  async register(userForm) {

    try {
      const uid = await this.authApiClient.createUser(userForm.email, userForm.password);
      const avatarUrl = await this.authApiClient.updateAvatar(uid, userForm.avatar);
      const user = {
        firstName: userForm.firstName,
        lastName: userForm.lastName,
        displayName: `${userForm.firstName} ${userForm.lastName}`,
        photoURL: avatarUrl,
        uid: uid,
      };
      await this.authApiClient.createProfile(user);
    } catch (error) {
      console.log(error.code);
      if (error.code === 'auth/email-already-in-use') {
        this.userExists.next(true);
      }
    }

  }

  async login(email: string, password: string) {
    try {
      const token = await this.authApiClient.login(email, password);
      this.token = token;
      this.router.navigate(['welcome']);
    } catch (error) {
      console.log(error.code);
      if (error.code === 'auth/user-not-found') {
        this.userNotFound.next(true);
        this.loginWrongPassword.next(false);
      }
      if (error.code === 'auth/wrong-password') {
        this.loginWrongPassword.next(true);
        this.userNotFound.next(false);
      }
    }
  }

  async logout() {
    this.token = null;
    this.router.navigate(['login']);
    await this.authApiClient.logout();
  }

  isAuthenticated() {
    return this.token != null;
  }

  getUid() {
    return this.authApiClient.getUid();
  }

  getCurrentUser() {
    return this.authApiClient.getCurrentUser();
  }

}
