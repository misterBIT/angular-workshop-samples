import {Injectable} from '@angular/core';

import {PetModel} from './pet.model';


@Injectable()
export class PetService {
  public pets = [
    new PetModel('Avsha'), new PetModel('Abulele'),new PetModel('AvAv'),
    new PetModel('Banian'),new PetModel('Baba'),new PetModel('Basta'),
    new PetModel('Craco'),new PetModel('Charli'),new PetModel('Chompi') ];

  addPet(petModel : PetModel) {
    this.pets = [...this.pets, petModel];
  }

  toggle(petModel : PetModel) {
    petModel.toggle();
  }


}
