import {Component} from '@angular/core';
import {FORM_DIRECTIVES, ControlGroup, FormBuilder, Validators, AbstractControl, Control}    from '@angular/common';


// ************** Sample2: Using the FormBuilder, ngFormModel &  ngFormControl **********************
@Component({
    selector: 'product2',
    template: `
    <div>  
        <h3>Using the FormBuilder, ngFormModel &  ngFormControl</h3>  
        <form  [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
        <div *ngIf="myForm.dirty && !myForm.valid" class="alert alert-warning">Form is invalid</div>

        <div class="form-group">  
                <label>
                    Barcode  
                    <input  type="text"  
                            class="form-control"  
                            [ngFormControl]="myForm.controls['barcode']">
                </label>
                
                <div *ngIf="barcode.touched && !barcode.valid"  class="alert alert-danger">Barcode is invalid!</div>
                <div *ngIf="barcode.hasError('required')" class="alert alert-danger">Barcode is Required!</div>
                <div *ngIf="myForm.hasError('required', 'barcode')" class="alert alert-danger">Barcode is Required!!</div>
                <div *ngIf="barcode.hasError('maxlength')" class="alert alert-danger">Barcode is Too Long!</div>
                
        </div>
    
        <button type="submit" class="btn btn-success">Submit</button>  
        </form>  
    </div>  
    `,
    directives: [FORM_DIRECTIVES]
})
export class Product2Component {
    myForm: ControlGroup;
    barcode: AbstractControl;
    constructor(formBuilder: FormBuilder) {
        // In the first example,  ngForm creates it's own ControlGroup,
        // in this case, we want to use our instance variable myForm, which we created with our FormBuilder.
        
        // This is fine - we can reference barcode anywhere in our component view.
        // For large forms this can get too verbose.  

        
        this.myForm = formBuilder.group({  
        //    'barcode': ['Puki123', Validators.required]  
            'barcode': ['Puki123', Validators.compose([Validators.required, Validators.maxLength(10)])]  
        }); 
        this.barcode = this.myForm.controls['barcode'];  
        
    }
    onSubmit() {
        console.log('Submitted1: ', this.myForm.value);
    }
    
}
 
 
