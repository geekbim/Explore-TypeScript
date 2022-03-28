"use strict";
function getData(value) {
    return value;
}
console.log(getData("Abim").length);
console.log(getData(1234).length);
// generic
function myData(value) {
    return value;
}
console.log(myData("Abim").length);
console.log(myData(1234));
const arrowFunc = (value) => { };
