import { Component } from '@angular/core';
import { FormBuilder, FormGroup, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { CounterInputComponent, createCounterRangeValidator } from './counter-input.component';

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
  directives: [CounterInputComponent, REACTIVE_FORM_DIRECTIVES]
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