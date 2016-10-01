import {Component, Input, Optional} from '@angular/core';
import {TabsComponent} from './tabs.component';
import {Test} from "./test.service";

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

	constructor(tabs:TabsComponent,@Optional() test:Test) {
		console.log('Tab requested TestService and got:', test);
		tabs.addTab(this);
	}

}