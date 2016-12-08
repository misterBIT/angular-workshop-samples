// === Angular 2 Lib ===
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
// === App ===
import {LetterSelectorComponent} from './shared/letter-selector.component';
import {AppComponent} from './app.component';
import {PetInputComponent} from './pet/pet-input.component';
import {PetListComponent} from './pet/pet-list.component';
import {PetComponent} from './pet/pet.component';
import {PetSearchPipe} from './pet/pet-search.pipe';
import {PetFilterComponent} from './pet/pet-filter.component';
import {PetService} from './pet/pet.service';
import {TimeComponent} from './shared/time/time.component';
import {CountdownComponent} from './shared/time/countdown.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, PetInputComponent, PetListComponent, PetFilterComponent, PetComponent, PetSearchPipe, LetterSelectorComponent,
                  TimeComponent, CountdownComponent],
  providers:    [ PetService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
