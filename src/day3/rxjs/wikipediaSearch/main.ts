import {FormsModule, ReactiveFormsModule} from "@angular/forms";
//this
import {WikipediaService} from './wikipedia-service'
import {App} from './app';

//or this

//import {App} from './app1';
//import {WikipediaService} from './wikipedia-servico'


import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {JsonpModule} from "@angular/http";


@NgModule({
	imports: [BrowserModule, FormsModule, ReactiveFormsModule, JsonpModule],
	declarations: [App],
	bootstrap: [App],
	providers: [WikipediaService]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
