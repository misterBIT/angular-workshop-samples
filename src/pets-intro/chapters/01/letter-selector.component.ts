import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'letter-selector',
    styles: [`ul {list-style:none}`, `li {display:inline-block; padding:0 5px;}`, `.selected{color:red}`],
    template: `
    <ul>
        <li *ngFor="let letter of letters">
            <button [class.selected]="letter === letterSelected" (click)="selectLetter(letter)">{{letter}}</button>
        </li>
    </ul>
    `
})
export class LetterSelector  implements OnInit{
    @Output() select = new EventEmitter();
    letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    letterSelected = this.letters[2]; 

    constructor() { }
    selectLetter(letter) {
        this.letterSelected = letter;
        this.select.emit(letter) 
    }
    ngOnInit(){
        this.select.emit(this.letterSelected);
    }

}