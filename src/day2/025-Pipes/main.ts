import {Component, NgModule} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {HttpModule} from '@angular/http';
import {DateDescPipe} from './date-desc.pipe';
import {AddCommasPipe} from './add-commas.pipe';
import {EllipsisPipe} from './ellipsis.pipe';
import {CapitalizePipe} from './capitalize.pipe';
import {PipesDemo} from './pipes-demo.component';
@Component({
	selector: 'app',
	template: `
        <h1>Pipes</h1>
        <pipes-demo></pipes-demo>
    `
})
class AppComponent {
}


@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent, PipesDemo, DateDescPipe, CapitalizePipe, EllipsisPipe, AddCommasPipe],
	bootstrap: [AppComponent],
	providers: []
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
