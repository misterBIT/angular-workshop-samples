import {Component} from '@angular/core';
import {FormControl, Validators, FormBuilder} from '@angular/forms';

function IsNotJerusalem(c: FormControl) {
    return (c.value && c.value.toUpperCase() === 'JERUSALEM') ? {notJerusalem: true} : null

}
@Component({
    selector: 'form-edit',
    styleUrls: ['./forms.css'],
    templateUrl: './form.html'
})
export class FormComponent {
    addresses = this.fb.array([this.initAddress()]);
    myForm = this.fb.group({
        firstName: '',
        lastName: ['', [Validators.required]],
        username: ['', [Validators.required]],
        address: this.addresses,
        human: new FormControl('', []),
        newsletter: new FormControl(false, []),
    });

    constructor(private fb: FormBuilder) {
    }

    onSubmit() {
        console.log(this.myForm.value);
    }

    addAddress() {
        this.addresses.push(this.initAddress());
    }

    private initAddress() {
        return this.fb.group({
            street: '',
            state: '',
            city: ['Jerusalem', [IsNotJerusalem]],
            zip: ['', Validators.pattern('/d*')]
        });
    }
}
