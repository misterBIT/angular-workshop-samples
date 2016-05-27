import {bootstrap} from '@angular/platform-browser-dynamic'
import {Component} from '@angular/core'

import {MyComp} from './my.component';

@Component({
    selector: 'app',
    template: `
        <h1>Understanding ngForTrackBy</h1>
        <my-comp></my-comp>
    `,
    directives: [MyComp]
})
class App {
}

bootstrap(App);
