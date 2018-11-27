import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'chatapp-composer',
  templateUrl: './composer.component.html',
  styleUrls: ['./composer.component.scss']
})
export class ComposerComponent implements OnInit {
  composerForm: FormGroup;

  @Output() mess = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.composerForm = new FormGroup({
      message: new FormControl(null)
    });
  }

  send() {
    const message = this.composerForm.value.message;
    if (typeof message === 'string') {
      this.mess.emit(message);
      this.composerForm.reset();
    }
  }
}
