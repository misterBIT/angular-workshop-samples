import {AppComponent} from "./app.component";
import {forwardRef, NgModule} from "@angular/core";
import {NG_VALUE_ACCESSOR, NG_VALIDATORS, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import {CounterInputComponent} from "./counter-input.component";


@NgModule({
	imports: [BrowserModule, FormsModule, ReactiveFormsModule],
	declarations: [AppComponent, CounterInputComponent],
	bootstrap: [AppComponent],
	providers: [
		{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CounterInputComponent), multi: true },
		{ provide: NG_VALIDATORS, useExisting: forwardRef(() => CounterInputComponent), multi: true }
	]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);

require('./styles.css');
