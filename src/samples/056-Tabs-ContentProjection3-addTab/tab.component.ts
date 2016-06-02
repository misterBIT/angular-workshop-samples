import {Component, ChangeDetectorRef, Input} from '@angular/core';

@Component({
	selector: 'tab',
	styles  : [`
    .pane{
      padding: 1em;
    }
  `],
	template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `
})
export class TabComponent {
	@Input('tabTitle') public title:string;
	public active;

	constructor(private cd:ChangeDetectorRef) {

	}

	toggleActive() {
		this.active = !this.active;
		this.cd.detectChanges();
	}
}