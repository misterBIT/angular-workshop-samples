import {Component, OnInit, Input} from '@angular/core';
import {PetService} from './pet.service';
import {LetterSelector} from './letter-selector.component'

import {PetComponent} from './pet.component';
import {SearchPipe} from './search.pipe';
import {AwakePipe} from './awake.pipe';

@Component({
	selector  : 'pet-list',
	directives: [PetComponent, LetterSelector],
	pipes     : [SearchPipe, AwakePipe],
	template  : `
        <h2>Pets</h2>
        <!--demo alternate syntax for ngFor-->
        <template ngFor let-char [ngForOf]="arr">
        		<span>{{char}}</span>
        </template>
         <letter-selector (select)="letter = $event"></letter-selector>
        <ul>
            <li *ngFor="let currPet of petService.pets | awake | search:letter "  >
               <pet-render [pet]="currPet" (toggle)="petService.togglePet($event)"></pet-render>
            </li>
        </ul>
    `

})
export class PetList {
	letter = '';
	arr = ['a', 'b', 'c'];

	constructor(private petService:PetService) {
		
	}
}

