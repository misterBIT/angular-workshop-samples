import {Directive, ElementRef, Input} from '@angular/core';
@Directive({
    selector: '[coloring-input]'
})
export class ColoringInputDirective {
    constructor(el: ElementRef) {
        el.nativeElement.addEventListener('keyup', ()=> {
            el.nativeElement.style.backgroundColor = this.getRandomColor();    
        });
        
    }
    private getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}