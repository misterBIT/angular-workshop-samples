import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {carRoutes} from './car.routes';
import {SharedModule} from '../shared/shared.module';
import {CarService} from './car.service';
import {CarListComponent} from './car-list.component';
import {CarDetailComponent} from './car-detail.component';
import {CarDetailResolver} from './car.resolver';
@NgModule({
	imports: [RouterModule.forChild(carRoutes), SharedModule],
	declarations: [CarListComponent, CarDetailComponent],
	providers: [CarService,CarDetailResolver],
	exports: []
})
export class CarsModule {
}