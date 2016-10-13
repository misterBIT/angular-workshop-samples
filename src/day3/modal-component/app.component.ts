import {Component, ViewEncapsulation} from "@angular/core";
import {Subject} from "rxjs";
import {IModalDefinition} from "./modal/modal.component";

@Component({
	selector: 'app',
	template: `
    <div class="container">
        <button (click)="createModal()">Create Modal</button>
        <modal-component (modalClosed)="onModalClosed($event)" [modalObs]="modal$"></modal-component>
    </div>
    
    `,
	encapsulation: ViewEncapsulation.None,

})
export class AppComponent {
	private modal$;
	private modalSubject;

	constructor() {
	}

	ngOnInit() {
		this.modalSubject = new Subject<IModalDefinition>();
		this.modal$ = this.modalSubject.asObservable();

	}

	createModal() {
		const now = Date.now();
		this.modalSubject.next({
			title: `This is a modal dialog`,
			body: `<p> and all text is displayed as HTML Now: ${now}</p>`,
			buttons: [{
				text: 'You got it!',
				cssClass: 'btn-primary',
				data: true
			}, {
				text: 'Nahh..',
				cssClass: 'btn-danger',
				data: false
			}]
		})
		;
	}

	onModalClosed($event) {
		console.log($event);
	}
}