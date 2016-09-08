import {Component} from '@angular/core';
import {PetService, PetModel} from './pet.service';

@Component({
    selector: 'pet-input',
    template: `
        <form (submit)="addPet()">
            Pet Name: <input type="text" name="name" [(ngModel)]="pet.name" />
            <button> Add Pet </button>
        </form>
    `
})
export class PetInput{
    pet = new PetModel();
    constructor(private petService : PetService){}
    addPet() {
        this.petService.addPet(this.pet);
        console.log(this.petService.pets);  
        this.pet = new PetModel();
    }
}