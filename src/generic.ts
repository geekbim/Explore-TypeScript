function getData(value: any): any {
    return value
}
console.log(getData("Abim").length)
console.log(getData(1234).length)

// generic
function myData<T>(value: T): T {
    return value
}
console.log(myData("Abim").length)
console.log(myData(1234))

const arrowFunc = <T>(value: T): T => {}