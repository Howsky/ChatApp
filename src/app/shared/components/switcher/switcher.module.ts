import { MaterialModule } from './../../material/index';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitcherComponent } from './switcher.component';

@NgModule({
  declarations: [SwitcherComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [SwitcherComponent]
})
export class SwitcherModule { }
