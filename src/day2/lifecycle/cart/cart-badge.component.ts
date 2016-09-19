import {Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
	selector       : 'cart-badge',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template       : `
        <div class="badge">
            {{counter}}
            <button (click)="attachCD(true)">Attach</button>
            <button (click)="attachCD(false)">Detach</button>
        </div>
    `
})
export class CartBadgeCmp implements OnInit {
	@Input() itemStream:Observable<any>;
	counter = 0;

	constructor(private cd:ChangeDetectorRef) {
	}

	ngOnInit() {
		this.itemStream.subscribe(() => {
			this.counter++;  // state changed
			this.cd.markForCheck(); // marks path
		})
	}

	attachCD(attach:boolean) {
		if (attach) this.cd.reattach();
		else this.cd.detach();
	}
}