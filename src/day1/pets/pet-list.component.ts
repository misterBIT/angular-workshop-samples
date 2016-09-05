import {Component, OnInit, Input} from '@angular/core';
import {PetService} from './pet.service';

@Component({
	selector  : 'pet-list',
	template  : `
        <h2>Pets</h2>
         <letter-selector (select)="letter = $event"></letter-selector>
        <ul>
            <li *ngFor="let currPet of petService.pets | search:letter "  >
               <pet-render [pet]="currPet" (toggle)="petService.togglePet($event)"></pet-render>
            </li>
        </ul>
    `

})
export class PetList {
	letter = '';


	constructor(private petService:PetService) {
		
	}
}

