import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { User } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(
    private readonly afDatabase: AngularFireDatabase,
    private readonly afAuth: AngularFireAuth,
    private readonly afStorage: AngularFireStorage
  ) {}

  async logout() {
    await this.afAuth.auth.signOut();
  }

  async login(email: string, password: string) {
    await this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  async createUser(email: string, password: string) {
    const createUser = await this.afAuth.auth.createUserWithEmailAndPassword(
      email,
      password
    );
    return createUser.user.uid;
  }

  getUid() {
    return this.afAuth.auth.currentUser.uid;
  }

  getUser(uid: string) {
    return this.getObject(`users/${uid}`) as Observable<User>;
  }

  async getIdToken() {
    return await this.afAuth.auth.currentUser.getIdToken();
  }

  getObject(path: string) {
    return this.afDatabase.object(path).valueChanges() as Observable<unknown>;
  }

  setObject(path: string, item: {}) {
    return this.afDatabase.object(path).set(item);
  }

  async updateObject(path: string, item: {}) {
    return await this.afDatabase.object(path).update(item);
  }

  getList(path: string, ref?) {
    return this.afDatabase.list(path, ref);
  }

  async uploadFile(path: string, file) {
    await this.afStorage.upload(path, file);
  }

  async getFileURL(path: string) {
    return await this.afStorage
      .ref(path)
      .getDownloadURL()
      .toPromise();
  }

  async createPushId() {
    return await this.afDatabase.createPushId();
  }
}
