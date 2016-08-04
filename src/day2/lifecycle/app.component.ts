import {Component} from '@angular/core';

import {AfterContentParentComponent} from './after-content.component';
import {AfterViewParentComponent} from './after-view.component';
import {CounterParentComponent} from './counter.component';
import {OnChangesParentComponent} from './on-changes.component';
import {PeekABooParentComponent} from './peek-a-boo-parent.component';
import {SpyParentComponent} from './spy.component';
import {CartBadgeCmp} from './cart/cart-badge.component'
import {ItemsService} from './cart/cart.service'


/***************************************/
/*
 template: `
 <peek-a-boo-parent></peek-a-boo-parent>
 <on-changes-parent></on-changes-parent>
 <after-view-parent></after-view-parent>
 <after-content-parent></after-content-parent>
 <spy-parent></spy-parent>
 <counter-parent></counter-parent>
 `,
 */

@Component({
	selector  : 'app',
	template  : `
 <peek-a-boo-parent></peek-a-boo-parent>
    <cart-badge [itemStream]="itemsService.items$"></cart-badge>
    <button (click)="addItem()" >Add Item</button>
  `,
	directives: [
		AfterContentParentComponent,
		AfterViewParentComponent,
		OnChangesParentComponent,
		PeekABooParentComponent,
		SpyParentComponent,
		CounterParentComponent,
		CartBadgeCmp
	],
	providers : [ItemsService]
})
export class AppComponent {
	constructor(private itemsService:ItemsService) {

	}

	addItem() {
		console.log('OK adding');
		this.itemsService.add({name: 'Lala'});
	}


}

