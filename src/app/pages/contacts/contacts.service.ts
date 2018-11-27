import { AuthService } from './../../shared/auth/auth.service';
import { ContactsController } from './contacts.controller';
import { User } from './../../shared/models/user.model';
import { ContactsApiClient } from './contacts.api-client';
import { Injectable } from '@angular/core';

import { throttleTime, filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class ContactsService {

  constructor(
    private contactsApiClient: ContactsApiClient,
    private authService: AuthService,
  ) { }

  getContacts() {
    return this.contactsApiClient.getContacts().valueChanges().pipe(map((users: User[]) => {
      return users.filter((user: User) => {
        return user.uid !== this.authService.getUid();
      });
    }))

    .pipe(throttleTime(5000)) as Observable<User[]>;
  }

}
