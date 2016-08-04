import {bootstrap} from '@angular/platform-browser-dynamic'
import {Component} from '@angular/core'

import {TabsComponent} from './tabs.component';
import {TabComponent} from './tab.component';

@Component({
    selector: 'app',
    template: `
        <h1>Tabs</h1>
        <tabs>
            <tab [tabTitle]="tab1Name">
                <h4>Tab 1 is the Best!</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id eum qui adipisci quae dolorem autem in sed neque suscipit, blanditiis, atque nisi tenetur, voluptas, necessitatibus incidunt recusandae nam vitae error.</p>
            </tab>
            <tab tabTitle="Tab2">
                <h4>Tab 2 is Better.</h4>
                <p>Adipisci quae dolorem autem in sed neque suscipit, blanditiis, atque nisi tenetur, voluptas, necessitatibus incidunt recusandae nam vitae error.</p>

            </tab>
        </tabs>
    `,
    directives: [TabsComponent, TabComponent]
})
class App {
    tab1Name = 'Tab1 Here'
}

bootstrap(App);
