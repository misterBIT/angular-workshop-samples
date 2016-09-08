import {Component} from '@angular/core'

import {MonsterEditComponent} from './monster-edit.component';

@Component({
	selector  : 'app',
	template  : `
    <monster-edit></monster-edit>
    `,
})
class AppComponent {
}


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [ BrowserModule, FormsModule ],      
  declarations: [ AppComponent, MonsterEditComponent],   
  bootstrap: [ AppComponent ],     
  providers: [ ]                   
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
