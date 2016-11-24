import {Component} from '@angular/core';
import {PetService} from './pet.service';
import {PetModel} from './pet.model';

@Component({
  selector: 'pet-input',
  template: `
    <input type="text" placeholder="Pet Name" (keyup.enter)="addPet();" [(ngModel)]="petModel.name" />
    <button (click)="addPet()" >Add Pet</button>
  `
})
export class PetInputComponent  {

  petModel = new PetModel('');

  constructor(private petService : PetService) {

   }


  addPet() {

    this.petService.addPet(this.petModel);
    this.petModel = new PetModel();
    console.log('Pet Added: ',this.petService.pets);
  }


}
