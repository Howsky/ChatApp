import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../../../shared/models/room.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../../shared/models/user.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'chatapp-talk-item',
  templateUrl: './talk-item.component.html',
  styleUrls: ['./talk-item.component.scss']
})
export class TalkItemComponent implements OnInit {

  pic = '/assets/noav.png';

  @Input() room: Room;

  con;
  contacts: string;

  shortenTo = 40;
  undisplayedContacts = 0;

  constructor(
    private readonly afDatabase: AngularFireDatabase,
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.con = this.room.users;
    this.parseUsernames();
  }

  private parseUsernames() {
    const parsedA = this.con.map((contact: User) => {
      return contact.displayName;
    });
    const parsedS: string = parsedA.join(', ');
    this.contacts = parsedS;

    if (parsedS.length > this.shortenTo && parsedA.length > 1) {
      let s = parsedS;
      const a = parsedA;
      while (s.length > this.shortenTo && a.length > 1) {
        this.undisplayedContacts++;
        a.splice(-1, 1);
        s = a.join(', ');
      }
      this.contacts = s + ',';
    }
  }

  gotoTalkRoom() {
    const rid = this.room.rid;
    this.router.navigate([`room/${rid}`]);
  }
}
