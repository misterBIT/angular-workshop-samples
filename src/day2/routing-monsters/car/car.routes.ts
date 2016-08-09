import { RouterConfig }         from '@angular/router';
import { CarListComponent }    from './car-list.component';
import { CarDetailComponent }  from './car-detail.component';

export const carRoutes: RouterConfig = [
  { path: 'car',  component: CarListComponent },
  { path: 'car/:id', component: CarDetailComponent }
];

