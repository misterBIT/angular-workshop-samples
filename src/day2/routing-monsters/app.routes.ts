import { Routes, RouterModule } from '@angular/router';

import { CanDeactivateGuard } from './shared/can-deactivate-guard.service';

import { monsterCenterRoutes } from './monster/monster-center.routes';
import { carRoutes }       from './car/car.routes';

import { loginRoutes,
         authProviders }      from './login/login.routes';

import { HomeComponent } from './home/home.component';


export const routes: Routes = [
  {path: '',  redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  ...carRoutes,
  ...loginRoutes,
  ...monsterCenterRoutes
];

export const routing = RouterModule.forRoot(routes);

