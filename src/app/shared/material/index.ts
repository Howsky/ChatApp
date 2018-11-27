import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatDividerModule,
  MatListModule,
  MatSidenavModule,
  MatIconModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatDialogModule,
} from '@angular/material';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatDividerModule,
  MatListModule,
  MatSidenavModule,
  MatIconModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatDialogModule
];

const CDK_MODULES = [

];

@NgModule({
  imports: [CommonModule, ...MATERIAL_MODULES, ...CDK_MODULES],
  exports: [...MATERIAL_MODULES, ...CDK_MODULES],
  declarations: []
})
export class MaterialModule {}
