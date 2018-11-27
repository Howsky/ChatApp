import { RoomController } from './room.controller';
import { MaterialModule } from '../../shared/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomComponent } from './room.component';
import { RoomRoutingModule } from './room-routing.module';
import { ContainersModule } from '../../shared/containers';
import { ComponentsModule } from '../../shared/components';
import { RoomApiClient } from './room.api-client';

@NgModule({
  imports: [
    CommonModule,
    RoomRoutingModule,
    ContainersModule,
    ComponentsModule,
    MaterialModule,
  ],
  declarations: [RoomComponent],
  providers: [RoomApiClient, RoomController]
})
export class RoomModule {}
