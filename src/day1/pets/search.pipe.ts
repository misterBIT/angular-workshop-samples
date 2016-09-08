import { Pipe, PipeTransform } from '@angular/core';
import {PetModel} from './pet.service';

@Pipe({
    name: 'search',
    pure: false
})

export class SearchPipe implements PipeTransform {
    transform(pets: PetModel[], [letter]) : any {
        if (!letter) return pets;
        return pets.filter((pet)=>pet.name.toUpperCase().startsWith(letter));
    }
}