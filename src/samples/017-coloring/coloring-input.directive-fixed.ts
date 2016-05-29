import {Directive, ElementRef, Input, HostBinding, HostListener} from '@angular/core';
@Directive({
	selector: '[coloring-input]',
})
export class ColoringInputDirective {
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