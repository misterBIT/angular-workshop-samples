import {Pipe, PipeTransform} from '@angular/core';
import {PetModel} from './pet.model';

@Pipe({
  name: 'petSearch'
})

export class PetSearchPipe implements PipeTransform {
     transform(pets: PetModel[], filterBy) : any {
        if (!filterBy) return pets;
        console.log(filterBy);
        if (filterBy.letter) pets = pets.filter((pet) => pet.name.toUpperCase().startsWith(filterBy.letter));
        if (filterBy.showAwake) pets = pets.filter((pet) => pet.awake);
        console.log('filtered: ', pets);
        return pets;
    }

}
