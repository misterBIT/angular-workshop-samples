import {Component, OnInit} from '@angular/core';

@Component({
    template: `
        <style>section{text-align:center}</style>
        <section>
            <h1>Admin Page</h1>
            <img src="img/admin.png">
        </section>
    `
})
export class MonsterAdminComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}