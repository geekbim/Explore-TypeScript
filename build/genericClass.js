"use strict";
class List {
    constructor(...elements) {
        this.data = elements;
    }
    add(element) {
        this.data.push(element);
    }
    addMultiple(...elements) {
        this.data.push(...elements);
    }
    getAll() {
        return this.data;
    }
}
let numbers = new List(1, 2, 3);
numbers.add(4);
numbers.addMultiple(5, 6, 7);
console.log(numbers.getAll());
let random = new List("a", 1, true);
random.add("oke");
random.addMultiple(2, false, "test");
console.log(random.getAll());
