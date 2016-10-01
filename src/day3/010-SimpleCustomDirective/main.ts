import {Component} from '@angular/core'

import {HighlightDirective} from './highlight.directive';

@Component({
    selector: 'app',
    styles: [`.other {text-transform: uppercase}`],
    template: `
    <section>
        <div class="well" myHighlight>Me? Just a silly Custom Directive</div>
    </section>    
    `
})
class AppComponent {}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [ BrowserModule ],      
  declarations: [ AppComponent, HighlightDirective],   
  bootstrap: [ AppComponent ],     
  providers: [ ]                   
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
