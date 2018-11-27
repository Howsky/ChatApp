import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chatapp-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  pageName = 'welcome';

  constructor() { }

  ngOnInit() {
  }

}
