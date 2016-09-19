import {Component, OnInit} from "@angular/core";
import {ToastsManager} from "ng2-toastr/ng2-toastr";
import {MonsterService} from "./monster.service";
import {MonsterModel} from "./monster.model";

@Component({
	styleUrls: ['./monster.scss'],
	template: `
    <section>
      <h2>Monsters</h2>

      <monster-filter (filterChange)="filter = $event"></monster-filter>

      <a routerLink="/monster/edit" class="btn btn-primary">+ Add Monster</a>
      <ul>
        <li *ngFor="let monster of monsters | filterBy:filter">
            <monster-thumb [monster]="monster"></monster-thumb>
            <div class="text-center">
              <button class="btn btn-danger" (click)="removeMonster(monster.id)">Delete</button>
              <a routerLink="/monster/edit/{{monster.id}}" class="btn btn-success">Edit</a>
            </div>
        </li>
      </ul>
    </section>


  `
})
export class MonsterListComponent implements OnInit {
	// TODO: let the pipe setup the initial filter
	private filter;
	private monsters: MonsterModel[] = [];

	constructor(private toastr: ToastsManager, private monsterService: MonsterService) {
	}

	ngOnInit() {
		this.monsterService.query()
			.then((monsters: MonsterModel[]) => {
				this.monsters = monsters;
			}).catch(err => {
			alert('Sorry,cannot load the monsters, try again later');
			console.log('Cought an error in MonsterList');
		});
	}

	removeMonster(monsterId: string) {
		this.monsterService.remove(monsterId)
			.then((monsters: MonsterModel[])=> {
				this.monsters = monsters;
				this.toastr.success('You are awesome!', 'Success!');
			});
	}
}
