import {Component, NgModule} from '@angular/core';
import {MdCardModule, MdInputModule, MdButtonModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';

@Component({
    selector: 'app',
    templateUrl: 'form.html',
})
class AppComponent {
}


@NgModule({
    imports: [BrowserModule, MdCardModule.forRoot(), MdButtonModule.forRoot(), MdInputModule.forRoot()],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
