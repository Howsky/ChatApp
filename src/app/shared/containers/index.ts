import { MaterialModule } from './../material';
import { MobileLayoutContainer } from './mobile-layout/mobile-layout.container';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components';

export const CONTAINERS = [MobileLayoutContainer];
export const CONTROLLERS = []

@NgModule({
  imports: [CommonModule, ComponentsModule, MaterialModule],
  declarations: CONTAINERS,
  exports: CONTAINERS,
  providers: [...CONTROLLERS]
})
export class ContainersModule {}
