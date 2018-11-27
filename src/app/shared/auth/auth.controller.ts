import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, BehaviorSubject } from 'rxjs';

import { Controller } from '../../shared/controller/base.controller';
import * as fromRoot from '../../shared/store';
import { User } from '../../shared/models';

import * as store from '../../shared/store';

@Injectable({
  providedIn: 'root',
})
export class AuthController extends Controller {

  constructor(
    protected appState$: Store<store.ApplicationState>,
    private readonly router: Router,
  ) {
    super(appState$);

  }

}
