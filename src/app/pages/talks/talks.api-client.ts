import { Room } from './../../shared/models/room.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { AuthService } from '../../shared/auth/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class TalksApiClient {

  constructor(
    private readonly afDatabase: AngularFireDatabase,
    private authService: AuthService,
    ) {

    }

  getRooms(): Observable<Room[]> {
    const uid = this.authService.getUid();
    // tempo
    return this.afDatabase.list(`talkRooms/${uid}`).valueChanges() as Observable<Room[]>;
  }
}
