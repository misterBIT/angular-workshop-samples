import {Component} from '@angular/core'
import {TriesComponent} from './tries.component';

@Component({
    selector: 'app',
    template: `
        <h1>Playground</h1>
        <tries></tries>
    `
})
class AppComponent {}




////module boilerplate
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [ BrowserModule ],      
  declarations: [ AppComponent, TriesComponent],   
  bootstrap: [ AppComponent ],     
  providers: [ ]                   
})
export class AppModule { }

//// bootstrap
platformBrowserDynamic().bootstrapModule(AppModule);

