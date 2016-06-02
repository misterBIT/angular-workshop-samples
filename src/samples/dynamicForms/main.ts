import {bootstrap} from '@angular/platform-browser-dynamic'
import {Component} from '@angular/core'
import {DynamicFormsExampleAppComponent} from "./dynamic-forms-example.component";


@Component({
    selector: 'app',
    template: `
    <dynamic-forms-example-app></dynamic-forms-example-app>
    `,
    directives: [DynamicFormsExampleAppComponent]
})
class App {
    
}

bootstrap(App);
