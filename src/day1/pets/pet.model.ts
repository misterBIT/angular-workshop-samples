export class PetModel{
    private static maxId = 0;
    id: number;
    name: string;
    awake: boolean = false;

    constructor(name:string='') {
        this.name = name;
        this.id = ++PetModel.maxId;
    }   
    toggle() {
        this.awake = !this.awake;
    }
    get imgUrl() {
        return `img/pet/${this.id}.png`;
    }
}
