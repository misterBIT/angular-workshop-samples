import { provideRouter, RouterConfig }  from '@angular/router';
import { CanDeactivateGuard } from './shared/can-deactivate-guard.service';

import { monsterCenterRoutes } from './monster/monster-center.routes';
import { carRoutes }       from './car/car.routes';

import { loginRoutes,
         authProviders }      from './login/login.routes';



export const routes: RouterConfig = [
  ...carRoutes,
  ...loginRoutes,
  ...monsterCenterRoutes
];

export const appRouterProviders = [
  provideRouter(routes),
  authProviders,
  CanDeactivateGuard
];

