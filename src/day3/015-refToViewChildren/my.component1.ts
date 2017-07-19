import {AfterViewInit, Component, Directive, ElementRef, QueryList, Renderer, ViewChildren} from '@angular/core';

/* BETTER OPTION: */

@Directive({
    selector:'input'
})
export class InputDir{
    constructor(public el:ElementRef){}

}
@Component({
    selector: 'my-comp1',
    template: `
    <input #myInput type="text" />
    <input type="text" />
    <ng-content></ng-content>
    <div> Some other content </div>
  `
})
export class MyComp1 implements AfterViewInit {
    @ViewChildren(InputDir) input: QueryList<InputDir>;

    constructor(private renderer: Renderer) {}

    ngAfterViewInit() {
        // this.renderer.invokeElementMethod(this.input.nativeElement,'focus', null );
        this.input.forEach((inputDir:InputDir,i)=>{
            inputDir.el.nativeElement.value = i;
        })
        console.log('Focus on the Input');

    }
}