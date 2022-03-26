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
        this.getName = () => {
            return this.name;
        };
    }
    setName(value) {
        this.name = value;
    }
}
exports.User = User;
let user = new User("Abim");
console.log(user);
console.log(user.name);
class Admin extends User {
    // add constructor in child class
    constructor(phone, name) {
        super(name);
        this.phone = phone;
        this.read = true;
        this.write = true;
        this.getRole = () => {
            return { read: true, write: true };
        };
    }
    static getTimeNow() {
        let currentdate = new Date();
        return currentdate.getDate() + "-" + (currentdate.getMonth() + 1) + "-" + currentdate.getFullYear() + " " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    }
    set email(value) {
        if (value.length == 0) {
            this._email = "email is required";
            return;
        }
        this._email = value;
    }
    get email() {
        return this._email;
    }
}
Admin.getRoleName = "Admin";
// call static property and method
let adminRole = Admin.getRoleName;
console.log(adminRole);
let adminCreatedAt = Admin.getTimeNow();
console.log(adminCreatedAt);
let admin = new Admin("088290085962", "Abim");
console.log(admin);
console.log(admin.name);
console.log(admin.phone);
admin.setName("jarwo");
console.log(admin.getName());
admin.email = "";
console.log(admin.email);
admin.email = "manyuabim9@gmail.com";
console.log(admin.email);
