import {Component} from '@angular/core'

import {TabsComponent} from './tabs.component';
import {TabComponent} from './tab.component';

@Component({
    selector: 'app',
    template: `
        <h1>Tabs</h1>
        <tabs>
            <tab [tabTitle]="tab1Name">
                <h4>Tab 1 is the Best!</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id eum qui adipisci quae dolorem autem in sed neque suscipit, blanditiis, atque nisi tenetur, voluptas, necessitatibus incidunt recusandae nam vitae error.</p>
            </tab>
            <tab tabTitle="Tab2">
                <h4>Tab 2 is Better.</h4>
                <p>Adipisci quae dolorem autem in sed neque suscipit, blanditiis, atque nisi tenetur, voluptas, necessitatibus incidunt recusandae nam vitae error.</p>

            </tab>
        </tabs>
    `
})
class AppComponent {
    tab1Name = 'Tab1 Here'
}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [ BrowserModule ],      
  declarations: [ AppComponent, TabsComponent, TabComponent],   
  bootstrap: [ AppComponent ],     
  providers: [ ]                   
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
