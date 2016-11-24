import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app',
  template: `
    <form [formGroup]="form">
      <p>Control value: {{form.controls.counter.value}}</p>
      <counter-input
        formControlName="counter"
        [counterRangeMax]="11"
        [counterRangeMin]="0"
        ></counter-input>
    </form>
    <p *ngIf="!form.valid">Form is invalid!</p>
    <pre>{{ form.value | json }}</pre>
  `,
})
export class AppComponent {

  form:FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      counter: 5
    });
  }

  // Remove comments to apply validation imperatively
  // Also remove [counterRangeMax|Min] from <custom-counter> to see effect
  /*
  ngOnInit() {
    this.form = this.fb.group({
      counter: [5, createCounterRangeValidator(12, 0)]
    });
  }
  */
}