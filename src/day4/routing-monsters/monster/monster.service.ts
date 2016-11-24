import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

export class Monster {
	constructor(public id: number, public name: string) {
	}
}

var monsters = [
	new Monster(1, 'Big One'),
	new Monster(2, 'Canso'),
	new Monster(3, 'Sad but True'),
	new Monster(4, 'Harry Pink'),
	new Monster(5, 'Ugi Pletset')
];


@Injectable()
export class MonsterService {
	monstersPromise: Promise<Monster[]>;  //= Promise.resolve(monsters);
	constructor(private http: Http) {
	}

	getMonsters() {
		//return this.monstersPromise;
		if (!this.monstersPromise) {
			this.monstersPromise = this.http.get('data/monsters.json')
				.map(res => res.json())
				.map(json => json.data)
				.toPromise();
		}
		return this.monstersPromise;
	}

	getMonster(id: number | string) {
		return this.monstersPromise
			.then(monsters => monsters.filter(c => c.id === +id)[0]);
	}


	static nextMonsterId = 100;

	addMonster(name: string) {
		name = name.trim();
		if (name) {
			let monster = new Monster(MonsterService.nextMonsterId++, name);
			this.monstersPromise.then(monsters => monsters.push(monster));
		}
	}
}
