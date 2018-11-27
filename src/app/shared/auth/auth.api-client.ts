import { FirebaseService } from './../services/firebase.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthApiClient {

  constructor(private readonly firebaseService: FirebaseService) {}

  createUser(email: string, password: string) {
    return this.firebaseService.createUser(email, password);
  }

  async login(email: string, password: string) {
    await this.firebaseService.login(email, password);
    return await this.firebaseService.getIdToken();
  }

  logout() {
    return this.firebaseService.logout();
  }

  async createProfile(user: User) {
    const userDBPath = `users/${user.uid}`;
    return await this.firebaseService.setObject(userDBPath, user);
  }

  async updateAvatar(uid: string, avatar) {
    const userStPath = `users/${uid}/avatar`;

    await this.firebaseService.uploadFile(userStPath, avatar);
    return await this.firebaseService.getFileURL(userStPath) as string;
  }

  getUid() {
    return this.firebaseService.getUid();
  }

  getCurrentUser() {
    const uid = this.getUid();
    return this.firebaseService.getUser(uid);
  }



}
