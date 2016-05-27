import {Component} from '@angular/core';
import {FORM_DIRECTIVES, ControlGroup, FormBuilder, Validators, AbstractControl, Control}    from '@angular/common';

function barcodeValidator(control: Control): { [s: string]: boolean } {  
  if (!control.value.match(/^Puk/)) {  
    return {invalidBarcode: true};  
  }
}

 // ************** Sample 4: Watching for changes **********************
 @Component({
    selector: 'product4',
    template: `
    <div>  
        <h4>Watching for changes</h4>  
        <form [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)" >
            <div class="alert alert-warning">The Barcode: {{productBarcode}}</div>   
            <div class="form-group">  
                <label>
                    Barcode  
                    <input type="text"  
                        class="form-control"
                        [ngFormControl]="myForm.controls['barcode']"
                        [(ngModel)]="productBarcode"
                        > 
                </label>                        
            </div>
        
            <button type="submit" class="btn btn-success">Submit</button>  
        </form>  
    </div>  
    `,
    
    directives: [FORM_DIRECTIVES]
})
export class Product4Component {
    myForm: ControlGroup;
    private productBarcode = '';
    
    constructor(formBuilder: FormBuilder) {
        this.myForm = formBuilder.group({
            'barcode': ['Puki123', Validators.compose([Validators.required, barcodeValidator])]
        });
        
        let barcode = this.myForm.controls['barcode'];
        
        
        barcode.valueChanges.subscribe(
            (value: string) => {
                console.log('barcode changed to: ', value);
            }
        );

        this.myForm.valueChanges.subscribe(
            (value: string) => {    
                console.log('form changed to: ', value);
            }
        );
    }
        
    onSubmit(value) {
        console.log('Submitted: ', value);
    }
    
}


