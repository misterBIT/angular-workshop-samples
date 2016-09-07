import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {EmailBlacklistService} from "./email-blacklist.service";

@Component({
	selector  : 'address-edit',
	template  : `
        <h1>Model Driven Form</h1>
        <form novalidate [formGroup]="myForm" (submit)="sendForm()" #addressForm="ngForm">
            Name:  <input type="text" formControlName="name"  />
            Email: <input type="email" formControlName="email" required validateEmail /> 
            `// validators can be used by template or by model
	+ `
            <div class="alert alert-warning" *ngIf="myForm.controls['email'].hasError('validateEmail')" >Mail is Invalid</div>
            <div class="alert alert-danger" *ngIf="myForm.controls['email'].hasError('blacklist')" >Wait Here</div>
            
            <input type="submit" />
        </form>
        <hr />
        <p>Form Valid: {{addressForm.form.valid}}</p>
    `,

})
export class AddressEditCmp {
	myForm:FormGroup;

	constructor(private ebl:EmailBlacklistService) {
	}

	ngOnInit() {


		this.myForm = new FormGroup({
			name : new FormControl('', Validators.required),
			//street: new Control('', Validators.minLength(3)),
			//city: new Control('', Validators.maxLength(10)),
			// zip: new Control('', Validators.pattern('[A-Za-z]{5}')),
			email: new FormControl('', [Validators.required //validateEmailFactory(this.ebl) //validateEmail
			])
		});

	}

	sendForm() {
		console.log('Sending Form');

	}

}