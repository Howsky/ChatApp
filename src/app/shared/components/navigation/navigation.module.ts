import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../../material';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    SidenavComponent,
  ],
  declarations: [NavbarComponent, SidenavComponent]
})
export class NavigationModule { }
