// data type of the function return

function getName(): string {
    return "Hello, my name is Abim"
}
console.log(getName())

function getBio(): [string, number] {
    return ["Hello, my name is Abim and my phone number is ", 6281228665475]
}
console.log(getBio())

function printName(): void {
    console.log("this is void function, can't return anything")
}
printName()


// argument type
function multiply(val1: number, val2: number): number {
    return val1 * val2
}
const result = multiply(1, 2)
console.log(result)


// function as type
type Sum = (val1: number, val2: number) => number
const Add: Sum = (val1: number, val2: number): number => {
    return val1 + val2
}
console.log(Add(1, 1))