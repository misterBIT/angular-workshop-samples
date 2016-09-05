import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {carRoutes} from './car.routes';
import {SharedModule} from '../shared/shared.module';
import {CarService} from './car.service';
import {CarListComponent} from './car-list.component';
import {CarDetailComponent} from './car-detail.component';
@NgModule({
    imports: [RouterModule.forChild(carRoutes), SharedModule],
    declarations: [CarListComponent, CarDetailComponent],
    providers: [CarService],
    exports: []
})
export class CarsModule {
}