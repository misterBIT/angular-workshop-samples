// Demo: input and output

import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'counter',
  styles: [`
    button {color:darkgreen}
  `],
  template: `
    
    Counter: {{counterValue.val}}
    <button (click)="increment()">+</button>
    <button (click)="decrement()">-</button> 
  `,
  // outputs: ['counterChange:change']
})
export class CounterComponent {
    @Input('init') counterValue = {val: 0};
    @Output('change') counterChange = new EventEmitter();
  
  increment() {
    this.counterValue.val++;
    this.counterChange.emit({
      value: this.counterValue
    })
  }
  decrement() {
    this.counterValue.val--;
    this.counterChange.emit({
      value: this.counterValue
    })
  }
}