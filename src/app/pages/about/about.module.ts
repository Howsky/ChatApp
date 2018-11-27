import { MaterialModule } from '../../shared/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { ContainersModule } from '../../shared/containers';
import { ComponentsModule } from '../../shared/components';

@NgModule({
  imports: [CommonModule, AboutRoutingModule, ContainersModule, ComponentsModule, MaterialModule,],
  declarations: [AboutComponent]
})
export class AboutModule {}
