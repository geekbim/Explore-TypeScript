"use strict";
class Asus {
    constructor(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on() {
        console.log("on");
    }
    off() {
        console.log("off");
    }
}
class Macbook {
    constructor(name, keyboardLight) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    on() {
        console.log("on");
    }
    off() {
        console.log("off");
    }
}
let asus = new Asus("Asus ROG", true);
asus.on();
asus.off();
let macbook = new Macbook("Macbook Pro", true);
asus.on();
asus.off();
