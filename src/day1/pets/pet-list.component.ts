import {Component, OnInit, Input} from '@angular/core';
import {PetService} from './pet.service';

@Component({
	selector  : 'pet-list',
	template  : `
        <h2>Pets</h2>
         <pet-filter (update)="filterBy = $event"></pet-filter>   
        
        <ul>
            <li *ngFor="let currPet of petService.pets | petSearch:filterBy "  >
               <pet-render [petModel]="currPet" (toggle)="petService.togglePet($event)"></pet-render>
            </li>
        </ul>
    `

})
export class PetListComponent {
	filterBy = null;


	constructor(private petService:PetService) {
		
	}
}

