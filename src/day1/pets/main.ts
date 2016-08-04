import {Component} from '@angular/core'
import {PetInput} from './pet-input.component';
import {PetList} from './pet-list.component';
import {PetService} from './pet.service';
import {bootstrap} from '@angular/platform-browser-dynamic'
import {disableDeprecatedForms, provideForms} from "@angular/forms";
@Component({
    selector: 'app',
    template: `
        <h1>Pets</h1>
        <pet-input></pet-input>
        <pet-list [letter]="letter"></pet-list>
    `,
    directives: [PetInput, PetList],
    providers: [PetService]
})
export class App {
  

}

bootstrap(App,[disableDeprecatedForms(),provideForms()]);


