import { TalkService } from './../../shared/services/talk.service';
import { ActivatedRoute } from '@angular/router';
import { Message } from './../../shared/models/message.model';
import { Component, OnInit } from '@angular/core';
import { RoomApiClient } from './room.api-client';
import { Observable } from 'rxjs';

@Component({
  selector: 'chatapp-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  messages$: Observable<Message[]>;

  rid;

  constructor(
    private readonly route: ActivatedRoute,
    private roomApiClient: RoomApiClient,
    private talkService: TalkService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.rid = params.rid;
    });
    this.messages$ = this.roomApiClient.getMesssages(this.rid);
  }

  send(message: string) {
    this.talkService.sendMessage(this.rid, message);
  }

}
