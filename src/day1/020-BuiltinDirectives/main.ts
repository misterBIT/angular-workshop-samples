import {Component} from '@angular/core'

import {DemoBuiltinDirectives} from './demo-builtin-directives.component';

@Component({
    selector: 'app',
    template: `
    <demo-builtin-directives></demo-builtin-directives>
    `
})
class AppComponent {}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [ BrowserModule],      
  declarations: [ AppComponent, DemoBuiltinDirectives],   
  bootstrap: [ AppComponent ],     
  providers: [ ]                   
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
