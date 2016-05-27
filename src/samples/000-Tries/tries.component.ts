import {Component} from '@angular/core';
import {NgStyle} from '@angular/common';
@Component({
    selector: 'tries',
    template: `
        <h2>Tries!</h2>
        The monster's name is {{monster?.firstName}}
{{  title | lowercase  | uppercase}}
    `,
    
})
export class TriesComponent {
    title = 'Hello!';
}