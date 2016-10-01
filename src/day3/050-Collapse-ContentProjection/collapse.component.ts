import {
	Component,
	EventEmitter, Output, Input
} from '@angular/core';

@Component({
	selector: 'collapse',
	template: `
  <div>
    <h3 (click)="toggle()">
			{{title}}
      {{ visible ? 'x' : 'v' }} 
    </h3>
    <div [hidden]="!visible" class="well">
      <div style="background:yellow">
          <ng-content select="h1"></ng-content>
      </div>
      <ng-content select=".txt"></ng-content>
    </div>
</div>
  `
})
export class CollapseComponent {
	
	visible = false;
	@Input() title;
	@Output() open = new EventEmitter();
	@Output() close = new EventEmitter();

	toggle() {

		this.visible = !this.visible;
		(this.visible) ? this.open.emit('open') : this.close.emit('closed');
	}
}