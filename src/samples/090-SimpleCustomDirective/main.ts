import {bootstrap} from '@angular/platform-browser-dynamic'
import {Component} from '@angular/core'

import {HighlightDirective} from './highlight.directive';

@Component({
    selector: 'app',
    template: `
        <p myHighlight>Me? Just a silly Custom Directive</p>
    `,
    directives: [HighlightDirective],
})
class App {}

bootstrap(App);
