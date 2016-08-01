import {bootstrap} from '@angular/platform-browser-dynamic'
import {Component} from '@angular/core'

import {CollapseComponent} from './collapse.component';

@Component({
    selector: 'app',
    template: `
        <h1>Playground</h1>
       <collapse (open)="say($event)" (close)="say($event)" title="More Details">
            <h1>This is a collapsible content.</h1>
            <p class="txt">{{name}}Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis et voluptas alias maxime iste velit, eligendi ipsa delectus sed impedit deserunt ratione provident in, repellat dolore distinctio odio dolorem sequi.</p>
        </collapse>
    `,
    directives: [CollapseComponent]
})
class App {
    name: 'puki'
    say(what) {
        console.log('Saying: ', what);
    }
}

bootstrap(App);
