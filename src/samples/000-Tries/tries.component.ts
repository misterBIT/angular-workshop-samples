import {Component} from '@angular/core';
import {NgStyle} from '@angular/common';
@Component({
    selector: 'tries',
    template: `<h2>{{title}} World</h2>`,
    
})
export class TriesComponent {
    title = 'Hello!';
}