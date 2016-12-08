import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'pet-filter',
    template: `
        <section class="well">
            <h2>List Filtering</h2>
             <letter-selector (select)="updateFilterLetter($event)"></letter-selector>
             <input type="checkbox" #elShowAwake (change)="updateFilterAwake(elShowAwake.checked)" /> Show Awake
        </section>
    `
})
export class PetFilterComponent {
    filterBy = {letter: '', showAwake: false}
    @Output('update') changeEmitter = new EventEmitter(); // inputs/outputs can be renamed
    constructor() { }

    updateFilterLetter(letter) {
        this.filterBy.letter = letter;
        this.emit();
    }
    updateFilterAwake(showAwake) {
        this.filterBy.showAwake = showAwake;
        this.emit();
    }
    emit() {
        this.changeEmitter.emit(Object.assign({}, this.filterBy));
    }
}