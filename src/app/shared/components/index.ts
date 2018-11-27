import { ComposerComponent } from './composer/composer.component';
import { PipesModule } from './../pipes/index';
import { TalkItemComponent } from './talk-item/talk-item.component';
import { MessageComponent } from './message/message.component';
import { ContactItemComponent } from './contact-item/contact-item.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material';
import { NavigationModule } from './navigation/navigation.module';
import { SwitcherModule } from './switcher/switcher.module';


export const COMPONENTS = [
  ContactItemComponent,
  MessageComponent,
  TalkItemComponent,
  ComposerComponent,
];

export const COMPONENT_MODULES = [
  NavigationModule,
  SwitcherModule,
];

@NgModule({
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule, MaterialModule, ...COMPONENT_MODULES, PipesModule],
  declarations: COMPONENTS,
  exports: [...COMPONENTS, ...COMPONENT_MODULES]
})
export class ComponentsModule {}
