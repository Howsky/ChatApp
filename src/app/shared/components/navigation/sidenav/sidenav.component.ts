import { AuthService } from './../../../auth/auth.service';
import { User } from './../../../models/user.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { NavLink } from './../../../models/nav-link.model';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'chatapp-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {

  @Input() user: Observable<User>;

  @Input() navLinks: Array<NavLink>;

  @Output() close = new EventEmitter();

  constructor(
    private readonly router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.user = this.getUser();
  }

  private onClose() {
    this.close.emit(null);
  }

  goto(page: string) {
    this.router.navigate([page]);
    this.onClose();
  }

  private getUser() {
    return this.authService.getCurrentUser();
  }

  logout() {
    this.authService.logout();
  }
}
