import {Component, NgModule} from '@angular/core';
import {MdCardModule, MdInputModule, MdButtonModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {FormComponent} from './form';

@Component({
    selector: 'app',
    template: '<form-edit></form-edit>',
})
class AppComponent {
}

@NgModule({
    imports: [BrowserModule, FormsModule, MdCardModule.forRoot(), MdButtonModule.forRoot(), MdInputModule.forRoot()],
    declarations: [AppComponent, FormComponent],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
