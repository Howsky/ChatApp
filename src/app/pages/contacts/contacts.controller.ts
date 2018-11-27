import { User } from './../../shared/models/user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store,  } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Controller } from '../../shared/controller/base.controller';
import * as store from '../../shared/store';

import * as contactsAction from '../../shared/store/actions/contacts.actions';

@Injectable()
export class ContactsController extends Controller {

  public contacts$ = this.appState$.select(store.getContactsState);

  private subscriptions: Array<Subscription> = [];

  selectedContacts: User[];
  startBtnVisible = false;

  constructor(
    protected appState$: Store<store.ApplicationState>,
    private router: Router
  ) {
    super(appState$);
    this.registerEvents();
  }

  onSelectedContact(contact: User) {
    this.appState$.dispatch(new contactsAction.SelectToTalk(contact));
  }

  onDeselectedContact(contact: User) {
    this.appState$.dispatch(new contactsAction.DeselectToTalk(contact));
  }

  onDeselectedAllContact() {
    this.appState$.dispatch(new contactsAction.DeselectAllToTalk(true));
  }

  public unregisterEvents() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private registerEvents(): void {
    this.subscriptions.push(this.contacts$.subscribe(contacts => {
        this.selectedContacts = contacts.selectedContactsToTalk;
        if (this.selectedContacts.length > 0) {
          this.startBtnVisible = true;
        } else {
          this.startBtnVisible = false;
        }
    }));
  }


}
