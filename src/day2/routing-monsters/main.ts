import {routes} from "./app.routes";
import {AppComponent} from "./app.component";
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule}      from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {SharedModule} from './shared/shared.module';
import {MonstersModule} from './monster/monster.module';
import {CarsModule} from "./car/car.module";


@NgModule({
	imports: [SharedModule, MonstersModule, CarsModule, RouterModule.forRoot(routes)],
	declarations: [AppComponent, HomeComponent, LoginComponent], //CarDetailComponent,CarListComponent
	bootstrap: [AppComponent],
	providers: []
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
