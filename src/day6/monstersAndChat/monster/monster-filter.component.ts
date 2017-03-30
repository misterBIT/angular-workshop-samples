import {Component, OnInit, EventEmitter} from '@angular/core';

@Component({
	selector: 'monster-filter',
	outputs: ['filterChange'],
	styles: [`section {background-color: #DDD; margin: 2em 0; padding:0.4em 1em 1em; border-radius:0.4em} `],
	template: `
      <section>
        <h3>Filter</h3>
        By Name: <input type="text" [(ngModel)]="filter.byName" (input)="filterChanged()" />
        By Power: <input type="number" [(ngModel)]="filter.byPower" (input)="filterChanged()">
      </section>

  `
})
export class MonsterFilterComponent implements OnInit {

	private filterChange = new EventEmitter();

	private filter = {byName: '', byPower: ''};

	constructor() {
	}

	ngOnInit() {
	}

	filterChanged() {
		this.filterChange.emit(this.filter);
	}

}
