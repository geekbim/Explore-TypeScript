export class User {
    // 1
    // public name: string

    // constructor(name: string) { 
    //     this.name = name 
    // }

    // 2
    constructor(public name: string) {}
}

let user = new User("Abim")
console.log(user)
console.log(user.name)