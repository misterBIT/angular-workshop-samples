import {Component} from '@angular/core'

import {HighlightDirective} from './highlight.directive';
import {ColoringInputDirective} from './coloring-input.directive-fixed';

@Component({
    selector: 'app',
    styles: [`.other {text-transform: uppercase}`],
    template: `
    <section>
        <div class="well" myHighlight>Me? Just a silly Custom Directive</div>
        <hr/>
        <h3>Happy Textbox</h3>
        <input class="form-control" [coloring-input]="data" />
    </section>    
    `
})
class AppComponent {
    private data = 'Just Saying';
}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [ BrowserModule ],      
  declarations: [ AppComponent, HighlightDirective, ColoringInputDirective],   
  bootstrap: [ AppComponent ],     
  providers: [ ]                   
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

