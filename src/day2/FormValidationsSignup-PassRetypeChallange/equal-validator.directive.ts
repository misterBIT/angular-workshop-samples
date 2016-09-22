import {Directive, Attribute, forwardRef} from "@angular/core";
import {Validator, AbstractControl, NG_VALIDATORS} from "@angular/forms";

@Directive({
	selector : '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
	providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true}]
})
export class EqualValidator implements Validator {
	constructor(@Attribute('validateEqual') public validateEqual:string,
	            @Attribute('reverse') public reverse:string) {

	}

	private get isReverse() {
		if (!this.reverse) return false;
		return this.reverse === 'true' ? true : false;
	}

	validate(c:AbstractControl):{ [key:string]:any } {
		// self value
		let selfValue = c.value;

		// control value
		let controlValue = c.root.get(this.validateEqual);

		// value not equal
		if (controlValue && selfValue !== controlValue.value && !this.isReverse) return {
			validateEqual: false
		};

		// value equal and reverse
		if (controlValue && selfValue === controlValue.value && this.isReverse) {
			delete controlValue.errors['validateEqual'];
			if (!Object.keys(controlValue.errors).length) controlValue.setErrors(null);
		}

		// value not equal and reverse
		if (controlValue && selfValue !== controlValue.value && this.isReverse) {
			controlValue.setErrors({
				validateEqual: false
			});
		}

		return null;
	}
}