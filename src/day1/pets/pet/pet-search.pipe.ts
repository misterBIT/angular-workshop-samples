import { Pipe, PipeTransform } from '@angular/core';

import {PetModel} from './pet.model';

@Pipe({
  name: 'petSearch'
})

export class PetSearchPipe implements PipeTransform {
  transform(list: PetModel[], [letter]): any {
    if (!letter) return list;
    return list.filter(pet => pet.name.startsWith(letter))
  }
}
