import {Component} from '@angular/core';
import {
	FormGroup,
	FormBuilder,
	Validators,
	AbstractControl,
	FormControl
}    from '@angular/forms';


// ************** Sample2: Using the FormBuilder, formGroup &  formControlName **********************
@Component({
	selector  : 'product2',
	template  : `
    <div>  
        <h3>Using the FormBuilder, formGroup &  formControlName</h3>  
        <form  [formGroup]="myForm" (ngSubmit)="onSubmit()">
        <div *ngIf="myForm.dirty && !myForm.valid" class="alert alert-warning">Form is invalid</div>

        <div class="form-group">  
                <label>
                    Barcode  
                    <input  type="text"  
                            class="form-control"  
                            formControlName="barcode">
                </label>
                
                <div *ngIf="myForm.get('barcode').touched && myForm.get('barcode').invalid"  class="alert alert-danger">Barcode is invalid!</div>
                <div *ngIf="myForm.get('barcode').hasError('required')" class="alert alert-danger">Barcode is Required!</div>
                <div *ngIf="myForm.hasError('required', 'barcode')" class="alert alert-danger">Barcode is Required!!</div>
                <div *ngIf="myForm.hasError('maxlength','barcode')" class="alert alert-danger">Barcode is Too Long!</div>
                <div *ngIf="myForm.hasError('minlength','barcode')" class="alert alert-danger">Barcode is Too Short</div>
                
        </div>
    
        <button type="submit" class="btn btn-success">Submit</button>  
        </form>  
    </div>  
    `,
})
export class Product2Component {
	myForm:FormGroup;
	barcode:AbstractControl; // base class for both FormControl and FormGroup

	constructor(formBuilder:FormBuilder) {
		this.myForm = new FormGroup({
			barcode: new FormControl('123', [Validators.required,Validators.minLength(3),Validators.maxLength(10)])
		});
		// In the first example,  ngForm creates it's own FormGroup,
		// in this case, we want to use our instance variable myForm, which we created with our FormBuilder.

		// This is fine - we can reference barcode anywhere in our component view.
		// For large forms this can get too verbose.


		// this.myForm = formBuilder.group({
		// 	//    'barcode': ['Puki123', Validators.required]
		// 	'barcode': ['Puki123', Validators.compose([Validators.required, Validators.maxLength(10)])]
		// });
		// this.barcode = this.myForm.get('barcode');

	}

	onSubmit() {
		console.log('Submitted1: ', this.myForm.value);
	}

}
 
 
