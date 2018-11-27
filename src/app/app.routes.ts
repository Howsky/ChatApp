import { AuthGuard } from './shared/auth/auth.guard';
import { RegisterComponent } from './shared/auth/register/register.component';
import { LoginComponent } from './shared/auth/login/login.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'welcome'},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: '', canActivate: [AuthGuard], children: [
      { path: 'welcome', loadChildren: './pages/welcome/welcome.module#WelcomeModule'},
      { path: 'contacts', loadChildren: './pages/contacts/contacts.module#ContactsModule'},
      { path: 'talks', loadChildren: './pages/talks/talks.module#TalksModule'},
      { path: 'room', loadChildren: './pages/room/room.module#RoomModule'},
      { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsModule'},
    ] },
  ];