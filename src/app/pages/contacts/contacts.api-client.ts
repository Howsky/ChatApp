import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactsApiClient {

  constructor(private readonly afDatabase: AngularFireDatabase) {}

  getContacts() {
    // temporary - your contacts === all registered users :)

    return this.afDatabase.list(`users`);
  }
}
