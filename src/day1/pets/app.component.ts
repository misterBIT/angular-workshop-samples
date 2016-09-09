import {Component} from '@angular/core'

@Component({
    selector: 'app',
    template: `
<h1>PetsRUs!</h1>
<button [hidden]="showPetInput" (click)="showPetInput=!showPetInput" >Add new Pet</button>
<pet-input *ngIf="showPetInput"></pet-input>
<pet-list></pet-list>

`,

})
export class AppComponent {
}
