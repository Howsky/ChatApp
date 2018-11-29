import { State } from './../../shared/store/reducers/contacts.reducer';
import { TalkService } from './../../shared/services/talk.service';
import { ContactsController } from './contacts.controller';
import { AuthService } from './../../shared/auth/auth.service';
import { ContactsService } from './contacts.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { User } from '../../shared/models';
import { Router } from '@angular/router';

@Component({
  selector: 'chatapp-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit, OnDestroy {
  contacts: User[] = [];
  selectedContacts: User[];

  constructor(
    private contactsService: ContactsService,
    // temporary
    public contactsController: ContactsController,
    private talkService: TalkService,
    private router: Router
  ) {}

  ngOnInit() {
    const contacts = this.contactsService.getContacts();
    contacts.subscribe((users: User[]) => {
      this.contacts = users;
    });
    this.contactsController.contacts$.subscribe((state: State) => {
      this.selectedContacts = state.selectedContactsToTalk;
    });
  }

  ngOnDestroy() {
    this.contactsController.onDeselectedAllContact();
  }

  async startTalking() {
    const rid = await this.talkService.createNewTalkRoom(this.selectedContacts);
    this.router.navigate([`room/${rid}`]);
  }
}
