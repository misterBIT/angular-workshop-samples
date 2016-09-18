import {Component, ViewEncapsulation} from '@angular/core'

import {FaderComponent} from './fader.component';
import {DemoSceneComponent} from './demo-scene.component';

@Component({
    selector: 'app',
    styleUrls: ['style.css'],
    encapsulation: ViewEncapsulation.None,
    template: `
    <button (click)="showFader = !showFader"> Toggle Fading </button>
    <fader [isVisible]="showFader">
      Am I visible ?
      <demo-scene></demo-scene>
    </fader>
    `
})
class AppComponent {
  showFader = false;
}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [ BrowserModule],      
  declarations: [ AppComponent, FaderComponent, DemoSceneComponent],   
  bootstrap: [ AppComponent ],     
  providers: [ ]                   
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
