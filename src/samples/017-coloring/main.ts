import {bootstrap} from '@angular/platform-browser-dynamic'
import {Component} from '@angular/core'

import {ColoringInputDirective} from './coloring-input.directive';

@Component({
    selector: 'app',
    template: `
       <input coloring-input /> 
    `,
    directives: [ColoringInputDirective]
})
class App {}

bootstrap(App);
