import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'form-edit',
    styleUrls: ['./forms.css'],
    templateUrl: './form.html'
})
export class FormComponent implements OnInit {
    user: any;

    constructor() {
    }

    ngOnInit() {
        this.user = {
            firstName: 'John',
            lastName: 'Smith',
            username: 'has_2wayBinding',
        }

    }

    onSubmit(form) {
        console.log(form.value);
    }

}
