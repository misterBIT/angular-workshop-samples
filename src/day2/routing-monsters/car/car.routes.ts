import { Routes }         from '@angular/router';
import { CarListComponent }    from './car-list.component';
import { CarDetailComponent }  from './car-detail.component';

export const carRoutes: Routes = [
  { path: 'car',  component: CarListComponent },
  { path: 'car/:id', component: CarDetailComponent }
];

