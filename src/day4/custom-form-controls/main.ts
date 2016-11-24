import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {CounterInputComponent} from './counter-input.component';


@NgModule({
	imports: [BrowserModule, FormsModule, ReactiveFormsModule],
	declarations: [AppComponent, CounterInputComponent],
	bootstrap: [AppComponent],

})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);

require('./styles.css');
