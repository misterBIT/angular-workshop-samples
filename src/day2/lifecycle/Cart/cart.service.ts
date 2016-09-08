import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/share';


export interface Item {
	name:string
}

@Injectable()
export class ItemsService {
	items$:Observable<Item[]>;
	private itemsObserver:Observer<Item[]>;
	private dataStore;

	constructor() {
		// Create Observable Stream to output our data
		// .share() allow multiple Subscribers to one Observable
		this.items$ = new Observable<Item[]>(observer => this.itemsObserver = observer);

		this.dataStore = {items: []};
	}

	add(item:Item) {
		this.dataStore.items.push(item);
		this.itemsObserver.next(this.dataStore.items);
	}
}
