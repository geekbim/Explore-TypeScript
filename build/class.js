"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    // 1
    // public name: string
    // constructor(name: string) { 
    //     this.name = name 
    // }
    // 2
    constructor(name) {
        this.name = name;
    }
}
exports.User = User;
let user = new User("Abim");
console.log(user);
console.log(user.name);
