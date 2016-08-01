import {Directive, ElementRef, Input,PLATFORM_DIRECTIVES} from '@angular/core';
@Directive({
	selector: '[coloring-input]'
})
export class ColoringInputDirective {
	@Input("coloring-input") letters;

	constructor(private $elementRef:ElementRef) {
		$elementRef.nativeElement.addEventListener('keyup', ()=> {
			$elementRef.nativeElement.style.backgroundColor = this.getRandomColor();
		});

	}
	
	ngOnInit(){
			this.$elementRef.nativeElement.value = this.letters;
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