import { MaterialModule } from './../../shared/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { ContainersModule } from '../../shared/containers';
import { ComponentsModule } from '../../shared/components';

@NgModule({
  imports: [CommonModule, WelcomeRoutingModule, ContainersModule, ComponentsModule, MaterialModule,],
  declarations: [WelcomeComponent]
})
export class WelcomeModule {}
