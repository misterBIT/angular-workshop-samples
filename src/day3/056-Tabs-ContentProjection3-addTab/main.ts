import {bootstrap} from '@angular/platform-browser-dynamic'
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
	//pipes     : [SafePipe],
	template  : `
        <h1>Tabs</h1>
        <button (click)="addTab()">Add tab</button>
        <tabs>
            <tab  *ngFor="let tab of tabs" [tabTitle]="tab.title">
            	<div [innerHTML]='tab.content'></div>
            </tab>
        </tabs>
    `,
	directives: [TabsComponent, TabComponent]
})
class App {
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

bootstrap(App);

