import { MaterialModule } from '../../shared/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { ContainersModule } from '../../shared/containers';
import { ComponentsModule } from '../../shared/components';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ContainersModule,
    ComponentsModule,
    MaterialModule,
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule {}
