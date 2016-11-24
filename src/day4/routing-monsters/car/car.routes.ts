import {Routes} from '@angular/router';
import {CarListComponent} from './car-list.component';
import {CarDetailComponent} from './car-detail.component';
import {CarDetailResolver} from './car.resolver';

export const carRoutes: Routes = [
	{path: 'car', component: CarListComponent},
	{path: 'car/:id', component: CarDetailComponent, resolve: {car: CarDetailResolver}}
];

