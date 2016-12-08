import {Component, OnInit} from '@angular/core';

@Component({
    styles: [`section {background: lightgray; padding: 10px;width:70%;float:left; box-sizing:border-box;}`],
    template: `<section>
                    <h1>Home sweet Home</h1>
                    <p>This is an Angular2 seed project:</p>
                    <ul>
                        <li>Driven by Webpack 2, Typescript 2 and Angular 2!</li>
                        <li>Showcasing routing and aux routes</li>
                        <li>Demoing a full crud working with a rest api</li>
                        <li>Using a websocket with some reactive superpowers for a simple chat component</li>
                    </ul>
                </section>`
})
export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}
