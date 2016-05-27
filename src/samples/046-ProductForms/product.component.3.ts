import {Component} from '@angular/core';
import {FORM_DIRECTIVES, ControlGroup, FormBuilder, Validators, AbstractControl, Control}    from '@angular/common';

// ************** Sample3: Custom Validations +  a Better Approach for accessing controls from template  **********************

 @Component({
    selector: 'product3',
    template: `
    <div>  
        <h3>Custom Validations +  a Better Approach for accessing controls from template</h3>  
        <form [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)" >
        
            <div *ngIf="myForm.dirty && !myForm.valid" class="alert alert-danger">Form is invalid</div>
            
            <!-- Note: a template-local-variable is available only for sibling and children, this does not work:  -->
            <div *ngIf="false && !barcode.valid" class="alert alert-danger">Barcode is invalid</div>
            
            <div class="form-group">  
                    <label>
                        Barcode  
                        <input type="text"  
                            class="form-control" 
                            #barcode="ngForm"  
                            [ngFormControl]="myForm.controls['barcode']">
                    </label>                    
                    <!-- You can avoid exposing each control by using either form.find: --> 
                    <div *ngIf="myForm.find('barcode').touched && myForm.find('barcode').hasError('required')"  class="alert alert-danger">Barcode is Required</div>
                    <!-- or by exposing the directive via a template-local-variable, and access the control it is referencing: --> 
                    <div *ngIf="barcode.control.touched && barcode.control.hasError('invalidBarcode')"  class="alert alert-warning">Barcode is in wrong format</div>
            </div>
        
            <button type="submit" class="btn btn-success">Submit</button>  
        </form>  
    </div>  
    `,
    directives: [FORM_DIRECTIVES]
})
export class Product3Component {
    myForm: ControlGroup;

        constructor(formBuilder: FormBuilder) {
            this.myForm = formBuilder.group({
                'barcode': ['Puki123', Validators.compose([Validators.required, barcodeValidator])]
            });
        }
    onSubmit(value) {
        console.log('Submitted: ', value);
    }
    
}
 

function barcodeValidator(control: Control): { [s: string]: any } {  
  if (!control.value.match(/^Puk/)) {  
    return {invalidBarcode: true};  
  }
}

