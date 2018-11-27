import { Room } from './../../shared/models';
import { Component, OnInit } from '@angular/core';
import { TalksApiClient } from './talks.api-client';
import { Observable } from 'rxjs';

@Component({
  selector: 'chatapp-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.scss']
})
export class TalksComponent implements OnInit {

  rooms$: Observable<Room[]>;

  constructor(
    private talksApiClient: TalksApiClient,
  ) { }

  ngOnInit() {
    this.rooms$ = this.talksApiClient.getRooms();
  }

}
