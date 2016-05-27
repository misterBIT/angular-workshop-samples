import {Component} from '@angular/core';
import {FORM_DIRECTIVES, ControlGroup, FormBuilder, Validators, AbstractControl, Control}    from '@angular/common';


// ************** Sample1: Basic Usage of ngForm & ngControl **********************
@Component({
    selector: 'product1',
    template: `
    <div>  
        <h3>Basic Usage of ngForm & ngControl</h3>  
         <!--NgControl creates a new Control that is automatically added
         to the parent ControlGroup (in this case, on the form)-->
        <form #f="ngForm"  (ngSubmit)="onSubmit(f.value)">
            <div class="field">  
                <label>
                    <!-- sets up an association between the input tag
                         and the Control inside the implicitly created ControlGroup-->
                    Barcode:  
                    <input type="text" ngControl="barcode" class="form-control">
                </label>  
            </div>
                   
            <button type="submit" class="btn btn-success">Submit</button>  
        </form>  
    </div>  
    `
    // ,
    // directives: [FORM_DIRECTIVES]
})
export class Product1Component {
     
    constructor() {
        
    }
    onSubmit(value) {
        console.log('Submitted: ', value);
    }
}


