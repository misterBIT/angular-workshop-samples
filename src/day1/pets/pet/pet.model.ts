export class PetModel {

  // == Data Members ==
  id: number;
  name: string;
  awake: boolean = true;
  lastFed: number;

  static maxId: number = 0;
  private static feedingLastForMillis = 60000;

  // == Methods ==

  constructor(name = '') {
    this.name = name;
    this.id = ++PetModel.maxId;
    this.lastFed = Date.now();
  }

  toString() {
    return this.name;
  }

  get imgUrl() {
    return `img/pet/${this.id}.png`;
  }

  toggle() {
    this.awake = !this.awake;
  }


  feed() {
    this.lastFed = Date.now();
    this.awake = true;
  }

  get nextFeedAt() {
    return this.lastFed + PetModel.feedingLastForMillis;
  }

  get isAwake() {
    return this.awake;
  }


}


