import { AuthService } from './../auth/auth.service';
import { FirebaseService } from './firebase.service';
import { Injectable } from '@angular/core';
import { User, Message } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TalkService {

  sender: User;

  constructor(
    private firebaseService: FirebaseService,
    private authService: AuthService
  ) {
    this.authService.getCurrentUser().subscribe((u: User) => this.sender = u);
  }

  async createNewTalkRoom(users: User[]) {
    const uid = this.authService.getUid();
    const rid = await this.firebaseService.createPushId();
    const roomPath = `talkRooms/${uid}/${rid}`;
    const room = {
      rid: rid,
      users: users
    };
    await this.firebaseService.setObject(roomPath, room);
    return rid;
  }

  async sendMessage(rid: string, messageContent: string) {
    const date = new Date().getTime();
    const mid = await this.firebaseService.createPushId();
    const message: Message = {
      sender: this.sender,
      mid: mid,
      rid: rid,
      content: messageContent,
      date: date
    };
    const messagePath = `messages/${rid}/${mid}`;
    await this.firebaseService.setObject(messagePath, message);
  }
}
