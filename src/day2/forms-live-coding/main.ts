import {Component, NgModule} from '@angular/core';
import {MdCardModule} from '@angular2-material/card';
import {MdInputModule} from '@angular2-material/input';
import {MdButtonModule} from '@angular2-material/button';
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
