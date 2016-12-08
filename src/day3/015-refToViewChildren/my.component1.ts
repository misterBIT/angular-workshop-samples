import {Component, ElementRef, AfterViewInit, Renderer, ViewChild} from '@angular/core';
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
        console.log('Focus on the Input');

    }
}