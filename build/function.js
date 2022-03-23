"use strict";
// data type of the function return
function getName() {
    return "Hello, my name is Abim";
}
console.log(getName());
function getBio() {
    return ["Hello, my name is Abim and my phone number is ", 6281228665475];
}
console.log(getBio());
function printName() {
    console.log("this is void function, can't return anything");
}
printName();
// argument type
function multiply(val1, val2) {
    return val1 * val2;
}
const result = multiply(1, 2);
console.log(result);
const Add = (val1, val2) => {
    return val1 + val2;
};
console.log(Add(1, 1));
