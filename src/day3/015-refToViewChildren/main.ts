import {Component, NgModule} from '@angular/core';
import {MyComp} from './my.component';
import {MyComp1} from './my.component1';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';

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


@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent, MyComp, MyComp1],
	bootstrap: [AppComponent],
	providers: []
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);

