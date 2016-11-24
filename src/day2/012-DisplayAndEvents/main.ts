import {Component, NgModule} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

@Component({
	selector: 'app',
	template: `<h3 [title]="monster.name" [style.color]="monster.color">
				Monster of the month: {{monster.name}}
			<!--alternate syntax for event binding-->
				</h3>
					<button on-click="sayHello(monster)">Say Hello</button>
				<hr/>`
})
class AppComponent {
	private monster = {name: 'Ugi', color: 'red', nicks: ['Ogush', 'Ugion', 'Cookie Monster']};
	private values = '';
	visibleFlag = true;

	sayHello(monster) {
		alert('Hello ' + monster.name);
	}

	toggelVisibleFlag() {
		this.visibleFlag = !this.visibleFlag;
	}

	onKey(event: any) {
		this.values += event.target.value + ' | ';
	}
}


@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent],
	bootstrap: [AppComponent],
	providers: []
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);