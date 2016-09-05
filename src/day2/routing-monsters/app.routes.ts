import {Routes} from '@angular/router';


import {
    loginRoutes
}      from './login/login.routes';

import {HomeComponent} from './home/home.component';


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    // ...carRoutes,
    ...loginRoutes,
];

