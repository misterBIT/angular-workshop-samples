import {Directive, ElementRef, Input,PLATFORM_DIRECTIVES} from '@angular/core';
@Directive({
	selector: '[coloring-input]'
})
export class ColoringInputDirective {
	@Input("coloring-input") letters;

	constructor(el:ElementRef) {
		el.nativeElement.addEventListener('keyup', ()=> {
			el.nativeElement.style.backgroundColor = this.getRandomColor();
		});

	}
	
	ngOnInit(){
		console.log(this.letters); // just to demo we can get input of a string withouut binding and that the [] does not alter the selector matching
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