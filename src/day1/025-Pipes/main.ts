import {Component} from '@angular/core'

import {PipesDemo} from './pipes-demo.component';

@Component({
	selector: 'app',
	template: `
        <h1>Pipes</h1>
        <pipes-demo></pipes-demo>
    `
})
class AppComponent {
}

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {DateDescPipe} from "./date-desc.pipe";


@NgModule({
	imports: [BrowserModule, ReactiveFormsModule, HttpModule],
	declarations: [AppComponent, PipesDemo, DateDescPipe],
	bootstrap: [AppComponent],
	providers: []
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
