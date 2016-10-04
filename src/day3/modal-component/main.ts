import {Component, ViewEncapsulation} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {NgModule} from "@angular/core/src/metadata/ng_module";
import {ModalModule} from "./modal/modal.module";
import {IModalDefinition} from "./modal/modal.component";
import {Subject} from "rxjs";

@Component({
	selector: 'app',
	templateUrl: 'app.component.html',
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
				text: 'ok',
				cssClass: 'btn-primary',
				data: true
			}, {
				text: 'Not OK',
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
@NgModule({
	imports: [BrowserModule, ModalModule],
	declarations: [AppComponent],
	bootstrap: [AppComponent],
	providers: []
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
