
import {Injectable} from '@angular/core';

export class Monster {
  constructor(public id: number, public name: string) { }
}

@Injectable()
export class MonsterService {
  getMonsters() { return monstersPromise; }

  getMonster(id: number | string) {
    return monstersPromise
      .then(monsters => monsters.filter(c => c.id === +id)[0]);
  }


  static nextMonsterId = 100;

  addMonster(name:string) {
    name = name.trim();
    if (name){
      let monster = new Monster(MonsterService.nextMonsterId++, name);
      monstersPromise.then(monsters => monsters.push(monster));
    }
  }
}

var monsters = [
  new Monster(1, 'Big One'),
  new Monster(2, 'Canso'),
  new Monster(3, 'Sad but True'),
  new Monster(4, 'Harry Pink'),
  new Monster(5, 'Ugi Pletset')
];


var monstersPromise = Promise.resolve(monsters);
