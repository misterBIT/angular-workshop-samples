import {Component, ViewEncapsulation} from '@angular/core'

import {DemoScrubbingComponent} from './demo-scrubbing.component';

@Component({
    selector: 'app',
    styleUrls: ['style.css'],
    encapsulation: ViewEncapsulation.None,
    template: `
    <demo-scrubbing></demo-scrubbing>
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
  declarations: [ AppComponent, DemoScrubbingComponent],   
  bootstrap: [ AppComponent ],     
  providers: [ ]                   
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
