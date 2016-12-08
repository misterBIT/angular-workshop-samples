// Demo: ref to child
import {Component, ElementRef} from '@angular/core';


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
        // el.nativeElement.querySelector('input').focus();
    }

    ngAfterViewInit() {
        this.el.nativeElement.querySelector('input').focus();

    }
}
