import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MonsterService} from './monster.service';
import {MonsterModel} from './monster.model';


@Component({
	styleUrls: [`monster.css`],
	selector: 'monster-list',
	template: `
    <section *ngIf="monster">
      <h2>Monster {{monster.name}}</h2>
      <img [src]="monster.getImgUrl()" >

    </section>
  `
})
export class MonsterComponent implements OnInit {

	private monster: MonsterModel;

	constructor(private route: ActivatedRoute,
	            private monsterService: MonsterService) {
	}

	ngOnInit() {
		this.route.params.subscribe(params => {
			//  console.log('Params are: ', params);
			const id = params['id'];
			const prmMonster = this.monsterService.get(id);
			prmMonster.then((monster: MonsterModel) => {
				this.monster = monster;
			});
		});
	}


}
