import {AfterViewInit, Component, Directive, ElementRef, QueryList, Renderer, ViewChildren, ViewChild} from '@angular/core';

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
    @ViewChild(InputDir) input: InputDir;
    @ViewChildren(InputDir) inputs: QueryList<InputDir>;

    constructor(private renderer: Renderer) {}

    ngAfterViewInit() {
        this.renderer.invokeElementMethod(this.input.el.nativeElement,'focus', null );
        this.inputs.forEach((inputDir:InputDir,i)=>{
            inputDir.el.nativeElement.value = i;
        })
        console.log('Focus on the Input');

    }
}