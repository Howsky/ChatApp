import { MaterialModule } from '../../shared/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalksComponent } from './talks.component';
import { TalksRoutingModule } from './talks-routing.module';
import { ContainersModule } from '../../shared/containers';
import { ComponentsModule } from '../../shared/components';
import { TalksApiClient } from './talks.api-client';

@NgModule({
  imports: [CommonModule, TalksRoutingModule, ContainersModule, ComponentsModule, MaterialModule,],
  declarations: [TalksComponent],
  providers: [TalksApiClient]
})
export class TalksModule {}
