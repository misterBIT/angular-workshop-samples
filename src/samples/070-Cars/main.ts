import {bootstrap} from '@angular/platform-browser-dynamic'
import {Component} from '@angular/core'

import {CarsComponent} from './cars.component';

@Component({
    selector: 'app',
    template: `
        <h1>Playground</h1>
        <cars></cars>
    `,
    directives: [CarsComponent]
})
class App {}

bootstrap(App);
