export class User {
    // 1
    // public name: string

    // constructor(name: string) { 
    //     this.name = name 
    // }

    // 2
    constructor(public name: string) {}

    setName(value: string): void {
        this.name = value
    }

    getName = (): string => {
        return this.name
    }
}

let user = new User("Abim")
console.log(user)
console.log(user.name)

class Admin extends User {
    read: boolean = true
    write: boolean = true

    getRole = (): {read: boolean, write: boolean} => {
        return {read: true, write: true}
    }
}

let admin = new Admin("Abim")
console.log(admin)
console.log(admin.name)
admin.setName("jarwo")
console.log(admin.getName())