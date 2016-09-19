import {Resolve, ActivatedRouteSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {MonsterService} from "./monster.service";
import {Observable} from "rxjs/Rx";
import {MonsterModel} from "./monster.model";
@Injectable()
export class MonsterResolver implements Resolve<Observable<MonsterModel>> {
	constructor(private monsterService:MonsterService) {
	}

	resolve(route:ActivatedRouteSnapshot):any {
		const id = route.params['id'];
		// console.log('Resolving a monster with id: ', id);
		return Observable.from(this.monsterService.get(id));
	}
}

