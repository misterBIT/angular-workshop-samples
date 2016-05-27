import {bootstrap} from '@angular/platform-browser-dynamic'
import {Component} from '@angular/core'

import {MyComp, MyComp1, ListItem} from './my.component';

@Component({
    selector: 'app',
    template: `
        <h1>Ref to ContentChildren Element</h1>
        <my-comp>
            <li *ngFor="#item of items" #listItem> {{item}} </li>
        </my-comp>
        <my-comp1>
            <li *ngFor="#item of items" > {{item}} </li>
        </my-comp1>
    `,
    directives: [MyComp,MyComp1, ListItem]
})
class App {
    items = ['sugar', 'salt', 'honey']
}

bootstrap(App);
