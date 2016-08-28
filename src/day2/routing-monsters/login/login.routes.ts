import { Routes }       from '@angular/router';
import { AuthGuard }          from '../shared/auth/auth-guard.service';
import { AuthService }        from '../shared/auth/auth.service';
import { LoginComponent }     from './login.component';

export const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

export const authProviders = [AuthGuard, AuthService];
