import {Component, NgModule} from '@angular/core';
import {FormBuilder, Validators, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {UsernameValidator} from './usernameValidator.ts';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';

@Component({
	selector  : 'app',
	template  : `
		<form [formGroup]="form">
			<input type="text" formControlName="username" />
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
	`
})

class AppComponent {

	form:FormGroup;

	username:FormControl;
	email:FormControl;
	asyncEmail:FormControl;

	constructor(private builder:FormBuilder) {
		console.log('Why like this');

		this.username = new FormControl(
			"",
			[Validators.required, UsernameValidator.startsWithNumber],
			UsernameValidator.usernameTaken
		);

		this.form = builder.group({
			username: this.username
		});
	}

	submitData() {
		console.log(JSON.stringify(this.form.value))
	}
}


@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule],      
  declarations: [ AppComponent],   
  bootstrap: [ AppComponent ],     
  providers: [ ]                   
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
