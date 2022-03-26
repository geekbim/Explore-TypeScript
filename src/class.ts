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
    private _email: string

    // add constructor in child class
    constructor(public phone: string, name:string) {
        super(name)
    }

    getRole = (): {read: boolean, write: boolean} => {
        return {read: true, write: true}
    }

    set email(value: string) {
        if (value.length == 0) {
            this._email = "email is required"
            return
        }

        this._email = value
    }

    get email(): string { 
        return this._email
    }
}

let admin = new Admin("088290085962", "Abim")
console.log(admin)
console.log(admin.name)
console.log(admin.phone)
admin.setName("jarwo")
console.log(admin.getName())

admin.email = ""
console.log(admin.email)
admin.email = "manyuabim9@gmail.com"
console.log(admin.email)