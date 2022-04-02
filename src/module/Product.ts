import Asus from "./Asus"
import MacBook from "./MacBook"

let asus = new Asus("Zanbook", true, true)
console.log(asus)
asus.b()

let macbook = new MacBook(2017, false, false)
console.log(macbook)
macbook.a()