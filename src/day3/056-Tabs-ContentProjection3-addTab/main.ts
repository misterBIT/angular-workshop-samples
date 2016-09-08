import {Component} from '@angular/core'

import {TabsComponent} from './tabs.component';
import {TabComponent} from './tab.component';
import {SafePipe} from "./safe.pipe";
interface TabDesc {
	title:string;
	content:string
}
@Component({
	selector  : 'app',
	template  : `
        <h1>Tabs</h1>
        <button (click)="addTab()">Add tab</button>
        <tabs>
            <tab  *ngFor="let tab of tabs" [tabTitle]="tab.title">
            	<div [innerHTML]='tab.content'></div>
            </tab>
        </tabs>
    `,
})
class AppComponent {
	tabs:TabDesc[] = [
		{
			title  : 'tab1',
			content: `<h4>Tab 1 is the Best!</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id eum qui adipisci quae dolorem autem in sed neque suscipit, blanditiis, atque nisi tenetur, voluptas, necessitatibus incidunt recusandae nam vitae error.</p>`
		},
		{
			title  : 'tab2',
			content: `<h4>Tab 2 is the Best!</h4>
                <p>Adipisci quae dolorem autem in sed neque suscipit, blanditiis, atque nisi tenetur, voluptas, necessitatibus incidunt recusandae nam vitae error.</p>`
		}
	];

	addTab() {
		this.tabs.push({title: 'tabs3', content: `<p>tab3 content-</p>`});
	}

}



import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [ BrowserModule ],      
  declarations: [ AppComponent, TabsComponent, TabComponent,SafePipe],
  bootstrap: [ AppComponent ],     
  providers: [ ]                   
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
