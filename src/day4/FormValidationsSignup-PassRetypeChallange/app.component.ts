import {Component, OnInit} from '@angular/core';
import {User} from './user.interface';
require('./app.component.css');
@Component({
	selector   : 'app',
	templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
	public user:User;

	ngOnInit() {
		this.user = {
			username       : '',
			email          : '',
			password       : '',
			confirmPassword: ''
		}
	}

	save(f:User, isValid:boolean) {

	}
}
