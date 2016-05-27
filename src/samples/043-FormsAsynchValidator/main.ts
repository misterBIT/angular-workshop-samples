import { Component } from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic'
import {
	FormBuilder,
	Validators,
	Control,
	ControlGroup,
	FORM_DIRECTIVES
} from '@angular/common';


import { UsernameValidator } from './usernameValidator.ts'

@Component({
	selector: 'app',
	template: `
		<form [ngFormModel]="form">
			<input type="text" ngControl="username" />
			<button (click)="submitData()" 
				[disabled]="!form.valid" 
				class="btn btn-primary">
					Sumbit data
				</button>
			
			<p *ngIf="username.pending">Fetching data from the server...</p>
			
			<div *ngIf="username.dirty && !username.valid && !username.pending" class="alert alert-danger">
			  <p *ngIf="username.errors.required">Username is required.</p>
			  <p *ngIf="username.errors.startsWithNumber">Your username can't start with a number</p>
			  <p *ngIf="username.errors.usernameTaken">This username is taken</p>
			</div>
			
		</form>
	`,
	directives: [FORM_DIRECTIVES]
})

class App {
	
	form: ControlGroup;
	
	username: Control;
	email: Control;
	asyncEmail: Control;
	
	constructor(private builder: FormBuilder) {
		console.log('Why like this');
		
		this.username = new Control(
			"", 
			Validators.compose([Validators.required, UsernameValidator.startsWithNumber]),
			UsernameValidator.usernameTaken
		);
		
		this.form = builder.group({
			username:  this.username
		});
	}	
	
	submitData(){
     	console.log(JSON.stringify(this.form.value))
    }
};


bootstrap(App);
