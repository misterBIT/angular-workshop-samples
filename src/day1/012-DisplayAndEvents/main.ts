import {Component} from '@angular/core'

@Component({
	selector   : 'app',
	templateUrl: 'main.html',
})
class AppComponent {
	private monster = {name: 'Ugi', nicks: ['Ogush', 'Ugion', 'Cookie Monster']};
	private values = '';
	visibleFlag = true;

	constructor() {
	}

	sayHello(monster) {
		alert('Hello ' + monster.name);
	}

	toggelVisibleFlag() {
		this.visibleFlag = !this.visibleFlag;
	}

	onKey(event:any) {
		this.values += event.target.value + ' | ';
	}
}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [ BrowserModule, FormsModule],      
  declarations: [ AppComponent],   
  bootstrap: [ AppComponent ],     
  providers: [ ]                   
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);