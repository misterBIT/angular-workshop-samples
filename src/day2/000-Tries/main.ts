import {Component, NgModule} from '@angular/core';
import {TriesComponent} from './tries.component';
////module boilerplate
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';

@Component({
    selector: 'app',
    template: `
        <h1>Playground</h1>
        <tries></tries>
    `
})
class AppComponent {}


@NgModule({
  imports: [ BrowserModule ],      
  declarations: [ AppComponent, TriesComponent],   
  bootstrap: [ AppComponent ],     
  providers: [ ]                   
})
export class AppModule { }

//// bootstrap
platformBrowserDynamic().bootstrapModule(AppModule);

