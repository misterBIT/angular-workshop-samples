import {bootstrap} from '@angular/platform-browser-dynamic'
import {Component} from '@angular/core'
import {DynamicFormsExampleAppComponent} from "./dynamic-forms-example.component";
//example taken from http://playcode.org/dynamic-forms-in-angular-2/

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
