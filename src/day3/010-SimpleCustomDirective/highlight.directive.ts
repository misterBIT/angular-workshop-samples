import {Directive, ElementRef, Input, Renderer} from '@angular/core';

@Directive({
	selector: '[myHighlight]'
})
export class HighlightDirective {
	constructor(el:ElementRef) {                                        //render:Renderer) {

		el.nativeElement.style.backgroundColor = 'yellow';
		//render.setElementStyle(el.nativeElement,'backgroundColor','yellow');
	}
}