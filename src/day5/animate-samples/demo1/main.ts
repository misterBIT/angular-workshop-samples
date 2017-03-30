import {Component, ViewEncapsulation, NgModule} from '@angular/core';
import {Demo1Component} from './demo1.component';
import {DialogComponent} from './dialog/dialog.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
    selector: 'app',
    styleUrls: ['style.css'],
    encapsulation: ViewEncapsulation.None,
    template: `
      <demo-scene></demo-scene>
    `
})
class AppComponent {
}

@NgModule({
  imports: [ BrowserModule,BrowserAnimationsModule],
  declarations: [ AppComponent, Demo1Component, DialogComponent],   
  bootstrap: [ AppComponent ],     
  providers: [ ]                   
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
