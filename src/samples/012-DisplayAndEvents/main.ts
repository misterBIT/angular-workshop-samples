import {bootstrap} from '@angular/platform-browser-dynamic'
import {Component} from '@angular/core'
@Component({
	selector   : 'app',
	templateUrl: 'main.html',
})
class App {
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

bootstrap(App);
