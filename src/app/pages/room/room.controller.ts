import { User } from './../../shared/models/user.model';
import { ContactsAction } from './../../shared/store/actions/contacts.actions';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Controller } from '../../shared/controller/base.controller';
import * as store from '../../shared/store';

import * as fromRoot from '../../shared/store';
import * as contactsAction from '../../shared/store/actions/contacts.actions';

@Injectable()
export class RoomController extends Controller {
  private subscriptions: Array<Subscription> = [];

  constructor(
    protected appState$: Store<store.ApplicationState>,
    private router: Router
  ) {
    super(appState$);
    this.registerEvents();
  }

  public unregisterEvents() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private registerEvents(): void {
    this.subscriptions.push();
  }
}
