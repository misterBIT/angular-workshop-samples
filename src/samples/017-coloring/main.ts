import {bootstrap} from '@angular/platform-browser-dynamic'
import {Component} from '@angular/core'

import {ColoringInputDirective} from './coloring-input.directive';

@Component({
	selector  : 'app',
	template  : `
       <input [coloring-input]="data" /> 
       <input coloring-input="ddd" /> 
    `,
	directives: [ColoringInputDirective]
})
class App {
	data = 'ttt';

}

bootstrap(App);
