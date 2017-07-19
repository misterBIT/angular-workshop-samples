import { Directive, ElementRef, HostListener, HostBinding, Renderer2 } from '@angular/core';

@Directive({
	selector: '[myHighlight]'
})
export class HighlightDirective {
	constructor(private el:ElementRef, private render:Renderer2) {
		this.el.nativeElement.style.backgroundColor = 'lightblue';
		// this.betterUseTheRenderer();
	}

	@HostListener('mouseenter')
	onMouseEnter() { 
		console.log('Enter');
		this._refont('Cursive');
        this.other = !this.other;		    
		this.isEditable = true; 
	}

	@HostListener('mouseleave')
	onMouseLeave() { 
		console.log('Leave');   
		this._refont('Arial'); 
		this.other = !this.other;
		this.isEditable = false;
	}

	private _refont(font: string) {
		this.font= font;
	}

	@HostBinding('class.other')
	private other = false;

	@HostBinding('style.fontFamily')
	private font = 'Arial';


	@HostBinding('contentEditable')
	private isEditable = false;

	betterUseTheRenderer() {
		// This is cross-platform code
		this.render.setStyle(this.el.nativeElement,'backgroundColor','gold');
	}


	
}	