import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core'
import {provideForms, disableDeprecatedForms} from '@angular/forms'
import {FORM_DIRECTIVES, FORM_PROVIDERS} from "@angular/forms";
import {AddressEditCmp} from './address-edit.component'

@Component({
	selector  : 'app',
	template  : `
    <h2>Forms Custom Validations</h2>
    <address-edit></address-edit>
    `,
	directives: [FORM_DIRECTIVES, AddressEditCmp],
	providers : [FORM_PROVIDERS],
})
class App {
}

bootstrap(App, [disableDeprecatedForms(), provideForms()]);