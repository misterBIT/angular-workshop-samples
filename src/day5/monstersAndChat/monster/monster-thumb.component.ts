import {Component, OnInit} from '@angular/core';
import {MonsterModel} from './monster.model';

@Component({
	selector : 'monster-thumb',
	styleUrls:['monster.scss'],
	inputs   : ['monster'],
	template : `
          <section class="monster-thumb">
            <p>{{monster.name}}</p>
            <a routerLink="/monster/{{monster.id}}/{{monster.name}}">
              <img class="imgMonster" *ngIf="url" [src]="url" />
            </a>
            <p>Power: {{monster.power}}</p>

          </section>
          `

})
export class MonsterThumbComponent implements OnInit {
	private monster:MonsterModel;
	private url:string;

	constructor() {
	}

	ngOnInit() {
		this.url = this.monster.getImgUrl();
	}

}
