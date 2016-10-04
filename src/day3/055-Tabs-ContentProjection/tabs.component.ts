import {Component} from '@angular/core';
import {TabComponent} from './tab.component';
import {Test} from "./test.service";
@Component({
	selector: 'tabs',
	styles: [`li.active a {text-shadow: 4px 4px 2px rgba(150, 150, 150, 1);}`],
	viewProviders: [Test],
	template: `
    <ul class="nav nav-tabs">
        <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
            <a href="#">{{tab.tabTitle}}</a>
        </li>
		 <!-- This is a tab just to demo viewProviders -->
        <tab></tab>
    </ul>
    <ng-content></ng-content>
    `
})

export class TabsComponent {
	tabs: TabComponent[] = [];

	addTab(tab: TabComponent) {
		if (this.tabs.length === 0) tab.active = true;
		this.tabs.push(tab);
	}

	selectTab(tab: TabComponent) {
		this.tabs.forEach((tab) => {
			tab.active = false;
		});
		tab.active = true
	}
}