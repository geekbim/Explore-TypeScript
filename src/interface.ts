interface Laptop {
    name: string
    on(): void
    off(): void
}

class Asus implements Laptop {
    name: string
    isGaming: boolean

    constructor(name: string, isGaming: boolean) {
        this.name = name
        this.isGaming = isGaming
    }

    on(): void {
        console.log("on")
    }
    off(): void {
        console.log("off")
    }
}

class Macbook implements Laptop {
    constructor(public name: string, public keyboardLight: boolean){}

    on(): void {
        console.log("on")
    }
    off(): void {
        console.log("off")
    }   
}

let asus = new Asus("Asus ROG", true)
asus.on()
asus.off()


let macbook = new Macbook("Macbook Pro", true)
asus.on()
asus.off()