import {Component, Injectable} from '@angular/core';
import {
	FormGroup,
	FormBuilder,
	Validators,
	FormControl
}    from '@angular/forms';

@Injectable()
class BarcodeAsyncValidator {
	//may inject http, services ets...
	validate(control: FormControl): Promise<{ [s: string]: boolean }> {
		return new Promise((resolve, reject) => { //may also return an observable
			setTimeout(()=> {
				resolve({invalidBarcode: !control.value.match(/^Puk/)});
			}, 5000)
		});
	}
}

// ************** Sample 4: Watching for changes **********************
@Component({
	selector: 'product4',
	template: `
    <div>  
        <h4>Watching for changes + Async validation</h4>  
        <form [formGroup]="myForm" (ngSubmit)="onSubmit(myForm.value)" >
            <div class="alert alert-warning">The Barcode: {{productBarcode}}</div>   
            <div class="form-group">  
                <label>
                    Barcode  
                    <input type="text"  
                        class="form-control"
                        formControlName="barcode"
                        [(ngModel)]="productBarcode"
                        > 
                </label>                        
            </div>
          <div *ngIf="myForm.dirty && myForm.hasError('invalidBarcode','barcode')"  class="alert alert-warning">Barcode is in wrong format</div>
            <button type="submit" class="btn btn-success">Submit</button>  
        </form>  
    </div>  
    `,
	providers: [BarcodeAsyncValidator]
})
export class Product4Component {
	myForm: FormGroup;
	private productBarcode = '';

	constructor(formBuilder: FormBuilder, barcodeValidateService: BarcodeAsyncValidator) {
		this.myForm = formBuilder.group({
			'barcode': ['Puki123', [Validators.required], [barcodeValidateService.validate]]
		});

		let barcode = this.myForm.controls['barcode'];


		barcode.valueChanges.subscribe(
			(value: string) => {
				console.log('barcode changed to: ', value);
			}
		);

		this.myForm.valueChanges.subscribe(
			(value: string) => {
				console.log('form changed to: ', this.myForm);
			}
		);
	}

	onSubmit(value) {
		console.log('Submitted: ', value);
	}

}


