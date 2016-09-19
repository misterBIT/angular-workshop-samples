import {Component, NgModule} from '@angular/core';
import {MdCardModule} from '@angular2-material/card';
import {MdInputModule} from '@angular2-material/input';
import {MdButtonModule} from '@angular2-material/button';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, Validators, ReactiveFormsModule, FormGroup, FormBuilder, FormArray} from '@angular/forms';

@Component({
    selector: 'app',
    templateUrl: 'form.html',
})
class AppComponent {
    myForm: FormGroup;
    addressArray: FormArray;
    addressBase = {
        street: ['', [Validators.minLength(2), Validators.required]],
        city: '',
        state: '',
        zip: ['', Validators.pattern('/d{5,7}')]
    };

    constructor(private fb: FormBuilder) {

        this.addressArray = fb.array([this.fb.group(this.addressBase)]);
        this.myForm = fb.group({
                firstName: '',
                lastName: '',
                username: ['', Validators.required],
                address: this.addressArray,
                newsletter: false,
                human: false
            }
        )
    }

    addAddress() {
        this.addressArray.push(this.fb.group(this.addressBase))
    }

    submitForm(form) {
        console.log(form);

    }
}


@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, MdCardModule.forRoot(), MdButtonModule.forRoot(), MdInputModule.forRoot()],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
