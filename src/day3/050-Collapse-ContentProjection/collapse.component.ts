import {
	Component,
	EventEmitter, Output
} from '@angular/core';

@Component({
	selector: 'collapse',
	template: `
  <div>
    <h2 (click)="toggle()">
      {{ visible ? 'v' : '-->' }} {{title}}
    </h2>
    <div [hidden]="!visible">
      <div style="background:yellow">
          <ng-content select="h1"></ng-content>
      </div>
      <ng-content select=".txt"></ng-content>
    </div>
</div>
  `
})
export class CollapseComponent {
	title: string;
	visible = true;
	@Output() open = new EventEmitter();
	@Output() close = new EventEmitter();

	toggle() {

		this.visible = !this.visible;
		(this.visible) ? this.open.emit('open') : this.close.emit('closed');
	}
}