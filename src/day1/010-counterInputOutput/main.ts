import {bootstrap} from '@angular/platform-browser-dynamic'
import {Component} from '@angular/core'

import {CounterComponent} from './counter.component';

@Component({
    selector: 'app',
    template: `
        <h1>Input and Output</h1>
        <counter [init]="7" (change)="counterChanged($event)"></counter>
    `,
    directives: [CounterComponent]
})
class App {
    counterChanged($event){
        console.log('counter value: ' , $event);
    }

}

bootstrap(App);
