import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule}      from '@angular/core';
import {AppComponent}      from './app.component';

import {FormsModule} from '@angular/forms';

import {PetInputComponent} from './pet-input.component';
import {PetListComponent} from './pet-list.component';
import {LetterSelectorComponent} from './letter-selector.component';
import {PetComponent} from './pet.component';

import {PetSearchPipe} from './pet-search.pipe';
import {PetFilterComponent} from './pet-filter.component';

import {PetService} from './pet.service';

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent, PetInputComponent, PetListComponent, PetComponent, PetSearchPipe, LetterSelectorComponent, PetFilterComponent],
	bootstrap: [AppComponent],
	providers: [PetService]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);


