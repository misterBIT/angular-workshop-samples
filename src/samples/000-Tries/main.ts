import {bootstrap} from '@angular/platform-browser-dynamic'
import {Component} from '@angular/core'

import {TriesComponent} from './tries.component';

@Component({
    selector: 'app',
    template: `
        <h1>Playground</h1>
        <tries></tries>
    `,
    directives: [TriesComponent]
})
class App {}

bootstrap(App);
