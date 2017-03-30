export interface IMonsterOptions {
	name?:string;
	power?:number;
	_id?:string;
	imgUrl?:string;
}

export class MonsterModel {
	name:string;
	power:number;
	_id:string;
	imgUrl:string;

	constructor(options:IMonsterOptions = {}) {
		Object.assign(this, options);
	}

	set id(id) { /// allows for both _id an id (mrjson/mongo)
		this._id = id;
	}

	get id() {
		return this._id;
	}

	getImgUrl() {
		return this.imgUrl;
		// return `public/img/monster/${this.name}.png`;
	}
}
