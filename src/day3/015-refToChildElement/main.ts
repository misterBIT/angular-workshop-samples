import {Component} from '@angular/core'

import {MyComp, MyComp1} from './my.component';

@Component({
	selector: 'app',
	template: `
        <h1>Ref to Child Element</h1>
        <my-comp></my-comp>
        <!--<my-comp1></my-comp1>-->
    `
})
class AppComponent {

}

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent, MyComp, MyComp1],
	bootstrap: [AppComponent],
	providers: []
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);

