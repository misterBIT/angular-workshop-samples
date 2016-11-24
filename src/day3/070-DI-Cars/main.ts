import {Component, NgModule} from '@angular/core';
import {CarsComponent} from './cars.component';
import {CarComponent} from './car.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {TestSvc} from './common/test.service';

@Component({
	selector: 'app',
	template: `
        <h1>Playground</h1>
        <cars></cars>
    `,
})
class AppComponent {
}


@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent, CarsComponent, CarComponent],
	bootstrap: [AppComponent],
	providers: [TestSvc]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);

