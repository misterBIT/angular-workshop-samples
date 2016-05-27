// Demo: ref to child

import {Component, Input, ElementRef, AfterViewInit, Renderer, ViewChild} from '@angular/core';


/* OPTION 1 */
@Component({
  selector: 'my-comp',
  template: `
    <input type="text" />
    <div> Some other content </div>
  `
})
export class MyComp {
  constructor(private el: ElementRef) {
    // not ready yet, will not work!
    //el.nativeElement.querySelector('input').focus();
  }
  ngAfterViewInit(){
    this.el.nativeElement.querySelector('input').focus();
    
  }
}

/* BETTER OPTION: */


@Component({
  selector: 'my-comp1',
  template: `
    <input #myInput type="text" />
    <div> Some other content </div>
  `
})
export class MyComp1 implements AfterViewInit {
  @ViewChild('myInput') input: ElementRef;

  constructor(private renderer: Renderer) {}

  ngAfterViewInit() {
    this.renderer.invokeElementMethod(this.input.nativeElement,'focus', null );
  }
}