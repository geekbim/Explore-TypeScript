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