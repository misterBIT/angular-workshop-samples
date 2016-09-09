import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import {PetService} from './pet.service';
import {PetModel} from './pet.model';

@Component({
    selector: 'pet-render',
    encapsulation: ViewEncapsulation.Emulated,
    template: `
        <style>
            .awake {
                color:orange;
            }
            img {max-width:200px}      
        </style>
        <div [ngClass]="{awake: petModel.awake}">
            {{petModel.name}}
            <img [src]="petModel.imgUrl" />
            <input type="checkbox" [checked]="petModel.awake" (click)="toggle.emit(petModel)" > Awake?
        </div>
    `
})
export class PetComponent implements OnInit {
    @Input() petModel : PetModel;
    @Output() toggle = new EventEmitter<PetModel>();
    constructor() { }

    ngOnInit() { }

}