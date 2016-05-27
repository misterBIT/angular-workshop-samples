import {Component} from '@angular/core';
import {ControlGroup, Control, Validators} from '@angular/common';

//import {validateEmail} from './email-validator';
import {EmailValidator} from './email-validator';

@Component({
    selector: 'address-edit',
    template: `
        <h1>Model Driven Form</h1>
        <form novalidate [ngFormModel]="myForm" (submit)="sendForm()" #addressForm="ngForm">
            Name:  <input type="text" ngControl="name"  />
            Email: <input type="email" ngControl="email" required validateEmail />
            
            <div class="alert alert-warning" *ngIf="myForm.find('email').hasError('validateEmail')" >Mail is Invalid</div>
            <div class="alert alert-danger" *ngIf="myForm.find('email').hasError('blacklist')" >Wait Here</div>
            
            <input type="submit" />
        </form>
        <hr />
        <p>Form Valid: {{addressForm.form.valid}}</p>
    `,
    directives: [EmailValidator],
        
})
export class AddressEditCmp {
  myForm: ControlGroup;
 
  
    
  ngOnInit() {
    
      
    this.myForm = new ControlGroup({
            name: new Control('', Validators.required),
            //street: new Control('', Validators.minLength(3)),
            //city: new Control('', Validators.maxLength(10)),
            // Note, pattern was added at beta.8 : https://github.com/angular/angular/commit/38cb526
            // zip: new Control('', Validators.pattern('[A-Za-z]{5}')),
            email: new Control('', Validators.compose([
                Validators.required,
                // validateEmail
                // EmailValidator
            ]))
    });

  }
  
  sendForm() {
      console.log('Sending Form');
      
  }
  
}