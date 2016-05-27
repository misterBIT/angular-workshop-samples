import {bootstrap} from '@angular/platform-browser-dynamic'
import {Component} from '@angular/core'

import {PipesDemo} from './pipes-demo.component';

@Component({
    selector: 'app',
    template: `
        <h1>Pipes</h1>
        <pipes-demo></pipes-demo>
    `,
    directives: [PipesDemo]
})
class App {}

bootstrap(App);
