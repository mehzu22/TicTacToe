const Game = require("./Game")
let g1 = new Game("abc","xyz")
//O win condition
console.log(g1.play(2))//x
console.log(g1.play(1))//o
console.log(g1.play(5))//x
console.log(g1.play(4))//o
console.log(g1.play(0))//x
console.log(g1.play(7))//x

//X win condition
let g2=new Game("P1","P2")
console.log(g2.play(2))//x
console.log(g2.play(1))//o
console.log(g2.play(5))//x
console.log(g2.play(4))//o
console.log(g2.play(8))//x


//Draw condition
// console.log(g1.play(0))//x
// console.log(g1.play(1))//o
// console.log(g1.play(2))//x
// console.log(g1.play(3))//o
// console.log(g1.play(4))//x
// console.log(g1.play(6))//o
// console.log(g1.play(5))//x
// console.log(g1.play(8))//o
// console.log(g1.play(7))//x

