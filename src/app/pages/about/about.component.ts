import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chatapp-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  pageName = 'about';

  constructor() { }

  ngOnInit() {
  }

}
