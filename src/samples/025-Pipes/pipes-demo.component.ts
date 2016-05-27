import {Component} from '@angular/core';
import {DateDescPipe} from './date-desc.pipe';

@Component({
    selector: 'pipes-demo',
    template: `
    <h1>
        About Pipes
    </h1>
        <p>Puki's birthday is {{ birthday | date:format }}</p>
        <p>{{ birthday | date | uppercase}}</p>
        <button (click)="toggleFormat()">Toggle Format</button>
        <hr />
        <p>{{ date1 | date:'short' }} :     {{ date1 | dateDesc}}</p>
        <p>{{ date2 | date:'short' }} :     {{ date2 | dateDesc}}</p>
        <p>{{ date3 | date:'short' }} :     {{ date3 | dateDesc}}</p>
        <p>{{ date4 | dateDesc}}</p>
        <hr />
        <p>Something is cooking...  <b>{{prmMsg | async}}</b>  </p>

    `,
    pipes: [DateDescPipe]
})
export class PipesDemo {
    birthday = new Date(1976,8,25); // April 15, 1988
    toggle = true; // start with true == shortDate

    get format() { return this.toggle ? 'shortDate' : 'fullDate'}
    toggleFormat() { this.toggle = !this.toggle; }

    date1 = new Date(); 
    date2 = new Date();
    date3 = new Date();
    date4 = new Date();

    constructor() {
        this.date2.setDate(this.date1.getDate()-1);
        this.date3.setDate(this.date1.getDate()-5);
        this.date4.setDate(this.date1.getDate()-20);
    }

    prmMsg:Promise<string> = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Right at You!'), 5000);
    });

}