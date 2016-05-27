import {Component} from '@angular/core';
import {NgForm}    from '@angular/common';
import { Monster }    from './monster';



@Component({
    selector: 'monster-edit',
    templateUrl: 'samples/040-MonsterForm/monster-edit.component.html'
})
export class MonsterEditComponent {
    foods = ['Sugar', 'Cookies',
        'Soup', 'Omlet'];

    model = new Monster(102, 'Shraga', 3, this.foods[1]);

    submitted = false;

    onSubmit() {
        this.submitted = true;
        console.log('Submitted: ', this.model);
    }
    // TODO: Remove this when we're done
    get diagnostic() { 
        return JSON.stringify(this.model); 
    }
}