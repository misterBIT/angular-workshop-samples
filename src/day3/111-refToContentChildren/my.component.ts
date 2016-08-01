// Demo: ref to ContentChildren

import {Component, Input, ElementRef, AfterViewInit,  Renderer, ViewChild} from '@angular/core';
import {Directive, AfterContentInit, QueryList,ContentChildren} from '@angular/core';

@Component({
  selector: 'my-comp',
  template: `
    <ul>
      <ng-content></ng-content>
    </ul>
  `
})
export class MyComp implements AfterContentInit {
  @ContentChildren('listItem') items: QueryList<ElementRef>;

  ngAfterContentInit() {
     console.log('Items (via local-template-var): ', this.items.toArray());
     
  }
}


/* BETTER OPTION? */
@Directive({ selector: 'li' })
export class ListItem {
  constructor(public el: ElementRef){}
}

// component code
@Component({
  selector: 'my-comp1',
  template: `
    <ul>
      <ng-content></ng-content>
    </ul>`

})
export class MyComp1 implements AfterContentInit {
  @ContentChildren(ListItem) items: QueryList<ListItem>;

  ngAfterContentInit() {
     console.log('Items (using a directive): ', this.items.toArray());
  }
}
