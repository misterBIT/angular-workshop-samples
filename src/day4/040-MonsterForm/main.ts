import {Component, NgModule} from '@angular/core';
import {MonsterEditComponent} from './monster-edit.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

@Component({
	selector  : 'app',
	template  : `
    <monster-edit></monster-edit>
    `,
})
class AppComponent {
}


@NgModule({
  imports: [ BrowserModule, FormsModule ],      
  declarations: [ AppComponent, MonsterEditComponent],   
  bootstrap: [ AppComponent ],     
  providers: [ ]                   
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
