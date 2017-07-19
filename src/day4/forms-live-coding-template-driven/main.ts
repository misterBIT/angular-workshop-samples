import {Component, NgModule} from '@angular/core';
import {MdCardModule, MdInputModule, MdButtonModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {FormComponent} from './form';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
    selector: 'app',
    template: '<form-edit></form-edit>',
})
class AppComponent {
}

@NgModule({
    imports: [BrowserAnimationsModule,BrowserModule, FormsModule, MdCardModule, MdButtonModule, MdInputModule],
    declarations: [AppComponent, FormComponent],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
