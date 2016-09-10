import {Component} from '@angular/core';
import {DateDescPipe} from './date-desc.pipe';

@Component({
	selector: 'pipes-demo',
	template: `
    <h1>
        About Pipes
    </h1>
		<h6>Date pipe:</h6>
        <p>{{ birthday | date | uppercase}}</p>

        <p>Puki's birthday is {{ birthday | date:format }}</p>
        <button (click)="toggleFormat()">Toggle Format</button>
		
		<hr>
		<h6>Decimal pipe:</h6>
        <p>pi (no formatting): {{pi}}</p>
	    <p>pi (2.2-5): {{pi | number:'2.2-5'}}</p>
	    <p>pi (.3-3): {{pi * 10000 | number:'.3-3'}}</p>

        <hr />
		<h6>Custom Pipe: dateDesc</h6>
        <p>{{ date1 | date:'short' }} :     {{ date1 | dateDesc}}</p>
        <p>{{ date2 | date:'short' }} :     {{ date2 | dateDesc}}</p>
        <p>{{ date3 | date:'short' }} :     {{ date3 | dateDesc}}</p>
        <p>{{ date4 | dateDesc}}</p>

        <hr />
		<h6>Custom Pipe: Ellipsis</h6>
        <p>{{ 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ipsam voluptas, illo nesciunt adipisci? Distinctio nihil nam inventore, quo consequatur voluptate. Obcaecati voluptates officiis ex inventore sequi, facere totam in.' | ellipsis  }} </p>

        <hr />
		<h6>Custom Pipe: Capitalize</h6>
        <p>{{ 'capitalize this line' | capitalize  }} </p>

        <hr />
		<h6>Custom Pipe: AddCommas</h6>
        <p>{{ ['me', 'you'] | addCommas  }} </p>

		<hr />
		<h6>Async Pipe</h6>
        <p>Something is cooking...  <b>{{prmMsg | async}}</b>  </p>

    `
})
export class PipesDemo {
	pi:number= 3.1415927;
	birthday:Date = new Date(1976, 8, 25); // April 15, 1988
	toggle:boolean = true; // start with true == shortDate

	get format() {
		return this.toggle ? 'shortDate' : 'fullDate'
	}

	toggleFormat() {
		this.toggle = !this.toggle;
	}

	date1 = new Date();
	date2 = new Date();
	date3 = new Date();
	date4 = new Date();

	constructor() {
		this.date2.setDate(this.date1.getDate() - 1);
		this.date3.setDate(this.date1.getDate() - 5);
		this.date4.setDate(this.date1.getDate() - 20);
	}

	prmMsg:Promise<string> = new Promise((resolve, reject) => {
		setTimeout(() => resolve('Right at You!'), 5000);
	});

}