import {bootstrap} from '@angular/platform-browser-dynamic'
import {Component} from '@angular/core'



import {PetInput} from './pet-input.component';
import {PetList} from './pet-list.component';

import {PetService} from './pet.service';

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
class App {
  

}

bootstrap(App);
