import {bootstrap} from '@angular/platform-browser-dynamic'
import {Component} from '@angular/core'

import {DemoBuiltinDirectives} from './demo-builtin-directives.component';

@Component({
    selector: 'app',
    template: `
    <demo-builtin-directives></demo-builtin-directives>
    `,
    directives: [DemoBuiltinDirectives]
})
class App {}

bootstrap(App);
