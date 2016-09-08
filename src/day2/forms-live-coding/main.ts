import {Component} from '@angular/core';
import {MdCardModule} from '@angular2-material/card';
import {MdInputModule} from '@angular2-material/input';
import {MdButtonModule} from '@angular2-material/button';

@Component({
	selector: 'app',
	templateUrl: 'form.html',
})
class AppComponent {
}


import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {FormComponent} from "./form";


@NgModule({
	imports: [BrowserModule, FormsModule, MdCardModule.forRoot(), MdButtonModule.forRoot(), MdInputModule.forRoot()],
	declarations: [AppComponent, FormComponent],
	bootstrap: [AppComponent],
	providers: []
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
