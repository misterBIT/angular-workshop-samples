
import {Component} from '@angular/core'

import {ItemsCountComponent} from './items-count.component';
import {ItemsListComponent} from './items-list.component';
import {MyService} from './my-service';


@Component({
    selector: 'app',
    template: `
            <div>
                <items-count></items-count>
                <items-list></items-list>
            </div>
    `
})
class AppComponent {
    today = new Date();
}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [ BrowserModule ],      
  declarations: [ AppComponent, ItemsCountComponent, ItemsListComponent],   
  bootstrap: [ AppComponent ],  
  providers: [ MyService ]                   
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
