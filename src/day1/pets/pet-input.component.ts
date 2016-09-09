import {Component} from '@angular/core';

import {PetService} from './pet.service'
import {PetModel} from './pet.model'

@Component({
    selector: 'pet-input',
    template: `
        Pet Type: <input type="text" [(ngModel)]="petModel.name" (keyup.enter)="addPet()" />
        <button (click)="addPet()"> Add Pet </button>
    `
})
export class PetInputComponent{
    petModel = new PetModel();

    constructor(private petService : PetService) {    }

    addPet() {
        this.petService.addPet(this.petModel);
        // console.log('Pet Added: ', this.petService.pets);
        this.petModel = new PetModel();

    }
}
