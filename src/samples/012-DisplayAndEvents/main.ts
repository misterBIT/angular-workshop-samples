import {bootstrap} from '@angular/platform-browser-dynamic'
import {Component} from '@angular/core'

@Component({
	selector: 'app',
	template: `

    Echo That: <input #txto (keyup)="0" />  {{txto.value}}
    <hr>

    <h3>
        Monster of the Month: {{monster.name}}
        <!--alternate syntax for event binding-->
        <button on-click="sayHello(monster)">Say Hello</button>
    </h3>
    

    <hr>
    <h3>Event Filtering:</h3>
    <button (click)="toggelVisibleFlag()">Toggle</button>
    <input [style.hidden]='visibleFlag' (keyup)="onKey($event)" value="On Key up">
    <!--difference between value attr and value prop-->
    <input #txt (keyup.enter)="values = values + txt.value + '|';sayHello('dd')" placeholder="Only on Enter">
    {{values}}

    <hr>
    <h3>Looping:</h3>
    <ul>
        <li *ngFor="let nick of monster.nicks; let i = index; let last = last">
           <span *ngIf="last">And </span><span{{i+1}} - {{ nick }}</span>
        </li>
    </ul>
    <p>
    	<input #newnick type="text"/>
        <button (click)="monster.nicks.push(newnick.value)">Add  Nick Name</button>
        <br/>
        Nick Names:
        <span *ngIf="monster.nicks.length > 3">Many Names!</span>
    </p>    
    <hr>
    <h3>NgModel</h3>
    <input type="text" [(ngModel)]="monster.name" />
        
    `,
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
