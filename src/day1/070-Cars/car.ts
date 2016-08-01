export class Car {
    static nextId = 1;
    public id;
    constructor(public plate, public speed) {
        this.id = Car.nextId++;
    }
    drive() {
        return `Car ${this.plate} speed ${this.speed}`
    }
}

