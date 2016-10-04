import {Directive, ElementRef, Input, Renderer, HostListener, HostBinding} from '@angular/core';

@Directive({
	selector: '[myHighlight]',
	host: {    '(mouseenter)': 'onMouseEnter()',    '(mouseleave)': 'onMouseLeave()'  }
})
export class HighlightDirective {
	constructor(private el:ElementRef, private render:Renderer) {
		this.el.nativeElement.style.backgroundColor = 'lightblue';
		// this.betterUseTheRenderer();
	}

	// @HostListener('mouseenter')
	onMouseEnter() { 
		console.log('Enter');
		this._refont('Cursive');
        this.other = !this.other;		    
		this.isEditable = true; 
	}

	// @HostListener('mouseleave')  
	onMouseLeave() { 
		console.log('Leave');   
		this._refont('Arial'); 
		this.other = !this.other;
		this.isEditable = false;
	}

	private _refont(font: string) {
		this.el.nativeElement.style.fontFamily = font;  
	}

	// @HostBinding('class.other')
	private other = false;


	// @HostBinding('contentEditable')
	private isEditable = false;

	betterUseTheRenderer() {
		// This is cross-platform code
		this.render.setElementStyle(this.el.nativeElement,'backgroundColor','gold');
	}


	
}	