import {bootstrap} from '@angular/platform-browser-dynamic'
import {Component} from '@angular/core'
import {provideForms, disableDeprecatedForms} from '@angular/forms'
import {FORM_DIRECTIVES, FORM_PROVIDERS} from "@angular/forms";
import {Product1Component} from './product.component.1';
import {Product2Component} from './product.component.2';
import {Product3Component} from './product.component.3';
import {Product4Component} from './product.component.4';

@Component({
	selector  : 'app',
	directives: [FORM_DIRECTIVES, Product1Component, Product2Component, Product3Component, Product4Component],
	providers : [FORM_PROVIDERS],
	template  : `
    <h1>Handling Forms</h1>
    <product1></product1>
    <!--<hr>-->
    <!--<product2></product2>-->
    <!--<hr>-->
    <!--<product3></product3>-->
    <!--<hr>-->
    <!--<product4></product4>-->
    `

})
class App {
}

bootstrap(App, [disableDeprecatedForms(), provideForms()]);
