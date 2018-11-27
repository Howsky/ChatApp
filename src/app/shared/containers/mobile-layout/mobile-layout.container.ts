import { Component, OnInit, Input } from '@angular/core';
import { NavLink } from '../../models';

import * as config from '../../../config/nav-links.config';

@Component({
  selector: 'chatapp-mobile-layout',
  styleUrls: ['./mobile-layout.container.scss'],
  templateUrl: 'mobile-layout.container.html'
})
// tslint:disable-next-line:component-class-suffix
export class MobileLayoutContainer implements OnInit {
  @Input() navLinks: Array<NavLink>;

  constructor() {}

  ngOnInit() {
    this.navLinks = this.getNavLinks();
  }

  private getNavLinks(): Array<NavLink> {
    return config.getNavlinks();
  }
}
