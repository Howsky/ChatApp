import { select } from '@ngrx/store';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { getSelectedContactsToTalk } from '../../store';

@Component({
  selector: 'chatapp-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent implements OnInit {

  @Input() contact;

  @Output() selectedContact = new EventEmitter();
  @Output() deselectedContact = new EventEmitter();

  selected = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.selected = !this.selected;
    if(this.selected) {
      this.selectedContact.emit();
    } else {
      this.deselectedContact.emit();
    }
  }

}
