import {Component} from '@angular/core'

import {MyComp, MyComp1, ListItem} from './my.component';

@Component({
    selector: 'app',
    template: `
        <h1>Ref to ContentChildren Element</h1>
        <my-comp>
            <li *ngFor="let item of items" #listItem> {{item}} </li>
        </my-comp>
        <my-comp1>
            <li *ngFor="let item of items" > {{item}} </li>
        </my-comp1>
    `
})
class AppComponent {
    items = ['sugar', 'salt', 'honey']
}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule, HttpModule],      
  declarations: [ AppComponent, MyComp, MyComp1, ListItem],   
  bootstrap: [ AppComponent ],     
  providers: [ ]                   
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
