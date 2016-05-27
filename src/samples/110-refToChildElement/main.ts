import {bootstrap} from '@angular/platform-browser-dynamic'
import {Component} from '@angular/core'

import {MyComp, MyComp1} from './my.component';

@Component({
    selector: 'app',
    template: `
        <h1>Ref to Child Element</h1>
        <my-comp></my-comp>
        <my-comp1></my-comp1>
    `,
    directives: [MyComp,MyComp1]
})
class App {
    
}

bootstrap(App);
