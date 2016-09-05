import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute}       from '@angular/router';
import {Observable}                   from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

import {Monster, MonsterService} from './monster.service';
import {DialogService} from '../shared/dialog.service';

@Component({
    template: `
  <div *ngIf="_monster">

    <h3>"{{_editName}}"</h3>
    <div>
      <label>Id: </label>{{_monster.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="_editName" placeholder="Monster name"/>
    </div>
    <button (click)="save()">Save</button>
    <button (click)="cancel()">Cancel</button>
    <img src="img/monster/{{_monster.id}}.png" />
  </div>
  `,
    styles: ['input {width: 20em}', 'img {margin:auto}']
})

export class MonsterDetailComponent implements OnInit, OnDestroy {

    private _monster: Monster;
    private _editName: string;
    private _sub: any;


    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _dialog: DialogService,
                private _service: MonsterService) {
    }

    ngOnInit() {
        this._sub = this._route
            .params
            .subscribe(params => {
                let id = +params['id'];
                this._service.getMonster(id)
                    .then(monster => {
                        if (monster) {
                            this._editName = monster.name;
                            this._monster = monster;
                        } else { // id not found
                            this.gotoMonsters();
                        }
                    });
            });
    }

    ngOnDestroy() {
        if (this._sub) {
            this._sub.unsubscribe();
        }
    }

    cancel() {
        this.gotoMonsters();
    }

    save() {
        this._monster.name = this._editName;
        this.gotoMonsters();
    }

    gotoMonsters() {
        let monsterId = this._monster ? this._monster.id : null;
        // Pass along the hero id if available
        // so that the MonsterListComponent can select that hero.
        // Add a totally useless `foo` parameter for kicks.
        this._router.navigate(['/monster', {id: monsterId, foo: 'bar'}]);
    }

    // depretcated
    // canDeactivate(): Observable<boolean> | boolean {
    //     // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    //     if (!this._monster || this._monster.name === this._editName) {
    //         return true;
    //     }
    //     // Otherwise ask the user with the dialog service and return its
    //     // promise which resolves to true or false when the user decides
    //     let p = this._dialog.confirm('Discard changes?');
    //     let o = Observable.fromPromise(p);
    //     return o;
    // }

}
