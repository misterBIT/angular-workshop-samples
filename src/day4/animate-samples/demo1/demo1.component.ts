import { Component, trigger, style, animate, state, transition} from '@angular/core';
import {NgStyle} from '@angular/common';
@Component({
    selector: 'demo-scene',
    styleUrls: ['animate.css'],
    template: `
      <h2 class="rubberBand animated">Animations!</h2>
      <h3>Hover Me</h3>
      <button (click)="isOpen = !isOpen">Show/Hide</button>
      <button (click)="shouldShow=!shouldShow" >Demo Add/Remove by *ngIf</button>
      <section [@boxState]="getBoxState()">
        <h4>More Information</h4>
        <img src="http://thecatapi.com/api/images/get?format=src&type=gif" >
      </section>

      <article *ngIf="shouldShow" [@flyInOut]="'in'">
        <h4>Something Important</h4>
        <img src="http://thecatapi.com/api/images/get?format=src&type=gif" >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero debitis repellendus beatae error ducimus suscipit reiciendis omnis iusto magnam voluptatum soluta nam quos, ea nihil eaque assumenda iste dolorum eum!
      </article>

    `,

    animations: [
        trigger('boxState', [
          // state('void', style({ height: 0 })),
          state('open' , style({ opacity: 1, height: '*' })),
          state('closed', style({ opacity: 0, height: 0 })),
          // transition('* => *', animate('1s')),
          // transition('open <=> closed', animate('1s')),
          transition('closed => open', animate('1s')),
          transition('open => closed', animate('100ms')),
        ]),
         trigger('flyInOut', [
              state('in', style({transform: 'translateY(0)'})),
              transition('void => *', [
                style({transform: 'translateY(-100%)'}),
                animate(100)
              ]),
              transition('* => void', [
                animate(100, style({transform: 'translateY(100%)'}))
              ])
            ])


    ]
})
export class Demo1Component {
  isOpen;
  shouldShow = false;

  constructor() {
  }

  getBoxState() {
    return this.isOpen? 'open' : 'closed'
  }


}
   