import {Directive, ElementRef, Renderer,OnInit,Input, HostBinding, HostListener} from '@angular/core';
@Directive({
	selector: '[coloring-input]',
})
export class ColoringInputDirective implements OnInit{
	@Input("coloring-input") letters;

	constructor(private $elementRef:ElementRef,private renderer:Renderer) {
	}

	ngOnInit() {
		this.renderer.setElementProperty(this.$elementRef.nativeElement,'value',this.letters);
	}

	@HostBinding('style.backgroundColor')
	color:string;

	@HostListener('keyup')
	private modifyBg() {
		this.color = this.getRandomColor();
	}

	private getRandomColor() {
		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
}