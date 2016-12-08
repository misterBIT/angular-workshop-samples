import {Component, OnInit} from '@angular/core';

@Component({
    // moduleId: module.id,
    styles: [`section{text-align:center;}`, `h1>span{color:#AAA}`],
    template: `
        <section>
            <h1>All about <span>Cars</span> and <span>Monsters</span></h1>
            <img src="http://thecatapi.com/api/images/get?format=src&type=gif">
        </section>
    `
})
export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}