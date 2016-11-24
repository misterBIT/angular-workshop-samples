import {Routes} from '@angular/router';
import {MonsterDetailComponent} from './monster-detail.component';
import {MonsterListComponent} from './monster-list.component';
import {MonsterCenterComponent} from './monster-center.component';
import {MonsterAdminComponent} from './monster-admin.component';
import {CanDeactivateGuard} from '../shared/can-deactivate-guard.service';
import {AuthGuard} from '../shared/auth/auth-guard.service';

export const monsterCenterRoutes: Routes = [
  {
    path: 'monster', // async loading made ''
    component: MonsterCenterComponent,
    children: [
      {
        path: 'admin',
        component: MonsterAdminComponent,
        canActivate: [AuthGuard]
      },
      {
        path: ':id',
        component: MonsterDetailComponent,
        canDeactivate: [CanDeactivateGuard]
      },
      {
        path: '',
        component: MonsterListComponent
      }
    ]
  }
];

