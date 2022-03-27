"use strict";
class Vahicle {
    start() {
        console.log("brummm");
    }
}
class Car extends Vahicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
let car = new Car();
console.log(car.wheels);
car.start();
class MotorCycle extends Vahicle {
    constructor() {
        super(...arguments);
        this.wheels = 2;
    }
}
let motorCycle = new MotorCycle();
console.log(motorCycle.wheels);
motorCycle.start();
