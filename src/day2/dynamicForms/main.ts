import {bootstrap} from '@angular/platform-browser-dynamic'
import {Component} from '@angular/core'
import {DynamicFormsExampleAppComponent} from "./dynamic-forms-example.component";
import {disableDeprecatedForms, provideForms, FORM_DIRECTIVES, FORM_PROVIDERS} from "@angular/forms";
//example taken from http://playcode.org/dynamic-forms-in-angular-2/

@Component({
	selector  : 'app',
	template  : `
    <dynamic-forms-example-app></dynamic-forms-example-app>
    `,
	directives: [DynamicFormsExampleAppComponent, FORM_DIRECTIVES],
	providers : [FORM_PROVIDERS]
})
class App {

}

bootstrap(App, [disableDeprecatedForms(), provideForms()]);
