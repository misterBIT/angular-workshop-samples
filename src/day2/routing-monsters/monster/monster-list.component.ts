
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router }       from '@angular/router';
import {Monster, MonsterService} from './monster.service';


@Component({
  styleUrls: ['monster.css'],
  template: `
    <ul class="monsters">
      <li *ngFor="let monster of _monsters"
        [class.selected]="isSelected(monster)"
        (click)="onSelect(monster)">
          <img src="img/monster/{{monster.id}}.png" />
          <p>
            <span class="badge">{{monster.id}}</span>
            {{monster.name}}
          </p>
      </li>
    </ul>
  `

})
export class MonsterListComponent implements OnInit, OnDestroy {
  private _monsters: Monster[];
  private _selectedId: number;
  private _sub: any;

  constructor(
    private _service: MonsterService,
    private _router: Router,
    private _route: ActivatedRoute) {}

  isSelected(monster: Monster) { return monster.id === this._selectedId; }

   ngOnInit() {
    this._sub = this._route
      .params
      .subscribe(params => {
        this._selectedId = +params['id'];
        this._service.getMonsters()
          .then(monsters => this._monsters = monsters);
      });
  }
  ngOnDestroy() {
    if (this._sub) {
      this._sub.unsubscribe();
    }
  }

  onSelect(monster: Monster) {
    this._router.navigate( ['/monster', monster.id]  );
  }
}
