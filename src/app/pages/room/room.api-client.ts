import { FirebaseService } from './../../shared/services/firebase.service';
import { Message } from './../../shared/models/message.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

import { throttleTime, } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../../shared/models';


@Injectable()
export class RoomApiClient {

  constructor(private firebaseService: FirebaseService) {}

  getMesssages(rid: string): Observable<Message[]> {
    const path = `messages/${rid}`;
    return this.firebaseService.getList(path, ref => ref.orderByChild('date')).valueChanges() as Observable<Message[]>;
  }
}
