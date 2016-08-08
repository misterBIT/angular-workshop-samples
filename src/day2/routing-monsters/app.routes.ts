import {PLATFORM_DIRECTIVES} from "@angular/core";
import {AppComponent} from "./app.component";
import {CarListComponent} from "./car/car-list.component";
import {CarDetailComponent} from "./car/car-detail.component";
import {RouterConfig, ROUTER_DIRECTIVES, provideRouter} from "@angular/router";

const routes:RouterConfig = [
		{path: '', component: AppComponent},
		{path: 'car', component: CarListComponent},
		{path: 'car/:id', component: CarDetailComponent},
	]
	;

export const ROUTER_PROVIDERS = [
	provideRouter(routes),
	// CarResolver
	{provide: PLATFORM_DIRECTIVES, useValue: ROUTER_DIRECTIVES, multi: true}
];
