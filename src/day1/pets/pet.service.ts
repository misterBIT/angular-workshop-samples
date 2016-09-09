import {PetModel} from './pet.model'

export class PetService {
    pets = [new PetModel('Avsha'),new PetModel('Abulele'),new PetModel('AvAv'),
            new PetModel('Banian'),new PetModel('Baba'),new PetModel('Basta'), 
            new PetModel('Craco'),new PetModel('Charli'),new PetModel('Chompi') 
           ];
           
    addPet(pet:PetModel) {
        this.pets = [...this.pets, pet];
    }       
    togglePet(pet:PetModel){
        pet.toggle();
        this.pets = [...this.pets];
    }
           
}




// Snippet:
// pets = [new PetModel('Avsha'),new PetModel('Abulele'),new PetModel('AvAv'),
//         new PetModel('Banian'),new PetModel('Baba'),new PetModel('Basta'), 
//         new PetModel('Craco'),new PetModel('Charli'),new PetModel('Chompi') 
//        ];
