import {Component, NgModule} from '@angular/core';
import {DemoBuiltinDirectives} from './demo-builtin-directives.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';

@Component({
    selector: 'app',
    template: `
    <demo-builtin-directives></demo-builtin-directives>
    `
})
class AppComponent {}


@NgModule({
  imports: [ BrowserModule],      
  declarations: [ AppComponent, DemoBuiltinDirectives],   
  bootstrap: [ AppComponent ],     
  providers: [ ]                   
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
