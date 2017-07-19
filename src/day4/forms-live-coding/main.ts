import {Component, NgModule} from '@angular/core';
import {MdButtonModule, MdCardModule, MdCheckboxModule, MdInputModule, MdRadioModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
	selector: 'app',
	templateUrl: 'form.html',
	styleUrls: ['./forms.css','./deeppurple-amber.css']
})
class AppComponent {
}


@NgModule({
	imports: [BrowserAnimationsModule,BrowserModule, MdCardModule, MdButtonModule, MdInputModule,MdRadioModule,MdCheckboxModule],
	declarations: [AppComponent],
	bootstrap: [AppComponent],
	providers: []
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
