import { ContactsService } from './contacts.service';
import { ContactsApiClient } from './contacts.api-client';
import { MaterialModule } from '../../shared/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContainersModule } from '../../shared/containers';
import { ComponentsModule } from '../../shared/components';
import { ContactsController } from './contacts.controller';

@NgModule({
  imports: [CommonModule, ContactsRoutingModule, ContainersModule, ComponentsModule, MaterialModule],
  declarations: [ContactsComponent],
  providers: [ContactsApiClient, ContactsService, ContactsController]
})
export class ContactsModule {}
