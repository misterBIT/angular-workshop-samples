import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'awake',
    // pure: false
})

export class AwakePipe implements PipeTransform {
    transform(pets, args) : any {
       return pets.filter((pet)=>!pet.awake);
    }
}