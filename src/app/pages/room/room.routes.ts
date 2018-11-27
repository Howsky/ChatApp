import { RoomComponent } from './room.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: ':rid', component: RoomComponent }
];
