import {bootstrap} from "@angular/platform-browser-dynamic";
import {JSONP_PROVIDERS} from "@angular/http";
import {disableDeprecatedForms, provideForms} from "@angular/forms";
//this
import {WikipediaService} from './wikipedia-service'
import {App} from './app';

//or this

//import {App} from './app1';
//import {WikipediaService} from './wikipedia-servico'


bootstrap(App, [provideForms(), disableDeprecatedForms(), WikipediaService, JSONP_PROVIDERS]).catch(err => console.error(err));