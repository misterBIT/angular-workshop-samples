import {Component} from '@angular/core'
import {PetInput} from './pet-input.component';
import {PetList} from './pet-list.component';
import {PetService} from './pet.service';
@Component({
	selector: 'app',
	template: `
        <h1>Pets</h1>
        <pet-input></pet-input>
        <pet-list [letter]="letter"></pet-list>
    `,

})
export class App {
}


import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PetComponent} from "./pet.component";
import {LetterSelector} from "./letter-selector.component";
import {SearchPipe} from "./search.pipe";


@NgModule({
	imports: [BrowserModule, FormsModule, ReactiveFormsModule],
	declarations: [App, PetInput, PetList, PetComponent, LetterSelector, SearchPipe],
	bootstrap: [App],
	providers: [PetService]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);



