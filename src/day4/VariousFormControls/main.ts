import 'rxjs/Rx';
import {AppComponent} from './app.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent],
  bootstrap: [ AppComponent ],
  providers: [ ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);


