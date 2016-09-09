import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'letter-selector',
    styles: [`ul {list-style:none}`, `li {display:inline-block; padding:0 5px;}`, `.selected{background-color:lightblue}`],
    template: `
    <ul>
        <li *ngFor="let letter of letters">
            <button [class.selected]="letter === letterSelected" (click)="selectLetter(letter)">{{letter}}</button>
        </li>
    </ul>
    `
})
export class LetterSelectorComponent {
    @Output('select') selectEmitter = new EventEmitter(); // inputs/outputs can be renamed
    letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    letterSelected = ''; 

    selectLetter(letter) {
        if (this.letterSelected === letter) this.letterSelected = '';
        else  this.letterSelected = letter;
        this.selectEmitter.emit(this.letterSelected) 
    }
}