import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'chatapp-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  @Input() isGoBackActive = true;

  @Input() location: string;

  ngOnInit() {

  }

  goBack() {
    if (this.router.url.includes('room')) {
      this.router.navigate(['talks']);
    } else {
      this.router.navigate(['../'], { relativeTo: this.route });
    }

  }
}
