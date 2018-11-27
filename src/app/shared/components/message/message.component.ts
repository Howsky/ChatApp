import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../../shared/models/message.model';

@Component({
  selector: 'chatapp-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  authorPhoto = 'assets/noav.png';

  @Input() message: Message;

  date: Date;

  constructor() { }

  ngOnInit() {
    this.date = new Date(this.message.date);
  }

}
