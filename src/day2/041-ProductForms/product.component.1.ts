import {Component} from '@angular/core';


// ************** Sample1: Basic Usage of ngForm & ngModel **********************
@Component({
    selector: 'product1',
    template: `
    <div>  
        <h3>Basic Usage of ngForm & ngModel</h3>  
         <!--ngModel creates a new FormControl that is automatically added
         to the parent FormGroup (in this case, on the form)-->
        <form #f="ngForm"  (ngSubmit)="onSubmit(f.value)">
            <div class="field">  
                <label>
                   <!-- attribute up an association between the input tag
                         and the FormControl inside the implicitly created FormGroup, 
                         notice that name attirbute is required-->
                    Barcode:  
                    <input type="text" ngModel name="barcode" class="form-control">
                </label>  
            </div>
                   
            <button type="submit" class="btn btn-success">Submit</button>  
        </form>  
        <pre>{{output}}</pre>
    </div>  
    `
})
export class Product1Component {
    private output:any;
     
    constructor() {
        
    }
    onSubmit(value) {
        this.output = JSON.stringify(value)
        console.log('Submitted: ', value);
    }
}


