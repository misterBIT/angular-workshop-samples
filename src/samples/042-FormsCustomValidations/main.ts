import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core'
import {AddressEditCmp} from './address-edit.component'

@Component({
    selector: 'app',
    template: `
    <h2>Forms Custom Validations</h2>
    <address-edit></address-edit>
    `,
    directives: [AddressEditCmp]
})
class App {}

bootstrap(App);
