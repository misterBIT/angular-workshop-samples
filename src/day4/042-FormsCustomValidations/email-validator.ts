import {Directive} from '@angular/core';
import {FormControl, NG_VALIDATORS} from '@angular/forms';

let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function validateEmail(c:FormControl) {
	return EMAIL_REGEXP.test(c.value) ? null : {
		validateEmail: {
			valid: false
		}
	};
}


// Simpler version - when validator has no dependecies:
@Directive({
	selector : '[validateEmail]',
	providers: [
		{provide: NG_VALIDATORS, useValue: validateEmail, multi: true}
	]
})
export class EmailValidator {
	constructor() {
		console.log('EmailValidator Directive Loaded');
	}
}
// Untill here - Simpler version - when validator has no dependecies:

//
// // Advanced - when validator HAS dependencies:
// export function validateEmailFactory(emailBlacklistService: EmailBlacklistService) {
// 	return function validateEmail(c: FormControl) {
// 		var res: any = {};
// 		if (!c.value) return res;
// 		if (!emailBlacklistService.check(c.value)) {
// 			res.blacklist = {valid: false}
// 		}
// 		if (!EMAIL_REGEXP.test(c.value)) {
// 			res.validateEmail = {valid: false}
// 		}
// 		return res;
//
// 	}
// }
// @Directive({
// 	selector: '[validateEmail][formControl],[validateEmail][ngModel],[validateEmail][formControlName]',
// 	providers: [
// 		EmailBlacklistService,
// 		{
// 			provide: NG_VALIDATORS,
// 			useExisting: forwardRef(() => EmailValidator),
// 			multi: true
// 		}
// 	]
// })
// export class EmailValidator {
//
// 	validator: Function;
//
// 	constructor(emailBlacklistService: EmailBlacklistService) {
// 		this.validator = validateEmailFactory(emailBlacklistService);
// 	}
//
// 	validate(c: FormControl) {
// 		return this.validator(c);
// 	}
// }


// Read more: http://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html

