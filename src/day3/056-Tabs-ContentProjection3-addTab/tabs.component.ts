import {
	AfterContentChecked,
	ChangeDetectorRef,
	ViewChild,
	Component,
	ContentChildren,
	QueryList,
	AfterViewInit,
	AfterContentInit
} from '@angular/core';
import {TabComponent} from './tab.component';

@Component({
	selector: 'tabs',
	template: `
    <ul #ltv class="nav nav-tabs">
      <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
        <a href="#">{{tab.title}}</a>
      </li>
    </ul>
    <ng-content></ng-content>
  `
})
export class TabsComponent implements AfterContentInit {
	@ContentChildren(TabComponent) tabs:QueryList<TabComponent>;

	constructor(private cd:ChangeDetectorRef) {
	}

	// contentChildren are set
	ngAfterContentInit() {
		// get all active tabs
		let activeTabs = this.tabs.filter((tab)=>tab.active);

		//this demonstrates that the queryList is a dyamic object with an observer on the changes property.
		this.tabs.changes.subscribe((change)=> {
			console.log(change);
		});

		// if there is no active tab set, activate the first
		///TODO : this is the problem - if this is triggered here - the whole thing dies
		if (activeTabs.length === 0) {
			this.selectTab(this.tabs.first);
		}
	}

	selectTab(tab:TabComponent) {
		// deactivate all tabs
		this.tabs.toArray().forEach(tab => tab.active = false);
		// activate the tab the user has clicked on.
		tab.toggleActive();
	}

}