// let fullName = "Cleo de Jesus";

// console.log( fullName.split(" "));


// let arrayString = fullName.split(" ")
 
// console.table(arrayString)

// let arrayCount = arrayString.length
// console.log(arrayCount);

// let name = arrayString[0]
// let lastname = arrayString[arrayCount - 1]

// function Welcome() {
//     console.log("Hello world! dentro da função");
// }
// Welcome()


// function WelcomeComParams(name) {

//     console.log(`Olá, ${name}`);
// }

// WelcomeComParams("Chocolate")

function WelcomeComUtimoNome(fullName) {

    let arrayString = fullName.split(" ")
    let name = arrayString[0]
    let arrayCount = arrayString.length

    let lastname = arrayString[arrayCount - 1]

    console.log(`Olá, ${name} ${lastname}`);
    
}

WelcomeComUtimoNome("Silas prata pereira")
