import {Component} from '@angular/core';
import {UserService} from './user.service';

@Component({
	selector  : 'dynamic-forms-example-app',
	template  : `<h1>  {{title}}	</h1>
				<dynamic-form [fields]="fields" (send)="save($event);"></dynamic-form>`,
})
export class DynamicFormsExampleAppComponent {
	title = 'dynamic-forms-example works!';

	fields:any[];

	constructor(private service:UserService) {
		this.fields = service.getFields({});
	}

	save(object) {

		// Here you can save the object
		alert(JSON.stringify(object));
	}

}
