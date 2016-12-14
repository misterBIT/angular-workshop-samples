import {Component, Input} from '@angular/core';
import {TabsComponent} from './tabs.component';

@Component({
	selector: 'tab',

	template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `
})
export class TabComponent {
	@Input() tabTitle;
	active;

	constructor(tabs:TabsComponent) {
		// console.log('Tab requested TestService and got:', test);
		tabs.addTab(this);
	}

}