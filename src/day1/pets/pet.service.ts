export class PetModel{
    private static maxId = 0;
    id: number;
    name: string;
    awake: boolean = false;

    constructor(name:string='') {
        this.name = name;
        this.id = ++PetModel.maxId;
    }   
    toggle() {
        this.awake = !this.awake;
    }
}

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
        const i = this.pets.indexOf(pet);
        this.pets = [...this.pets.slice(0,i), pet, ...this.pets.slice(i+1)];
    }
           
}

