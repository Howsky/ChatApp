import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, BehaviorSubject } from 'rxjs';

import { Controller } from '../../../shared/controller/base.controller';
import * as fromRoot from '../../../shared/store';

import * as store from '../../../shared/store';

@Injectable()
export class RegisterController extends Controller {

  avatar = 'assets/noav.png';
  avatarFile: File | Blob = null;

  avatarError = false;
  
  constructor(
    protected appState$: Store<store.ApplicationState>,
    ) {
    super(appState$);
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
}
