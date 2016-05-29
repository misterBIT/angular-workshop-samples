import {bootstrap} from '@angular/platform-browser-dynamic'
import {Component} from '@angular/core'

@Component({
    selector: 'app',
    template: `

    Echo That: <input #txto (keyup)="0" />  {{txto.value}}
    <hr>

    <h3>
        Monster of the Month: {{monster.name}}
        <button (click)="sayHello(monster)">Say Hello</button>
    </h3>
    

    <hr>
    <h3>Event Filtering:</h3>
    <input (keyup)="onKey($event)" placeholder="On Key up">
    <input #txt (keyup.enter)="values = values + txt.value + '|'" placeholder="Only on Enter">
    {{values}}

    <hr>
    <h3>Looping:</h3>
    <ul>
        <li *ngFor="let nick of monster.nicks">
            {{ nick }}
        </li>
    </ul>
    <p>
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
    
    constructor(){}
    
    sayHello(monster) {alert('Hello ' + monster.name);}
        onKey(event:any) {
        this.values += event.target.value + ' | ';
    }
}

bootstrap(App);
