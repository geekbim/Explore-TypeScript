abstract class Vahicle {
    abstract wheels: number

    start(): void {
        console.log("brummm")
    }
}

class Car extends Vahicle {
    wheels: number = 4
}
let car = new Car()
console.log(car.wheels)
car.start()

class MotorCycle extends Vahicle {
    wheels: number = 2
}
let motorCycle = new MotorCycle()
console.log(motorCycle.wheels)
motorCycle.start()