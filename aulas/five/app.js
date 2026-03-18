

console.log("=================================")
console.log("Repetição com  FOR")

let num
for (num = 0; num<=10; num++){
    console.log(num)

}

console.log("=================================")
console.log("Repetição com  WHILE")

let num2 = 2
while ( num2 < 20){

 if (num2 % 2 === 0){
  console.log(num2)
 }
 num2++
}


console.log("=================================")
console.log("Repetição com DO WHILE")
let senha

const prompt =require('prompt-sync')();
do{
 senha = prompt("Digite a senha")

} while (senha != 1234)
