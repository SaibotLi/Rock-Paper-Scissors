/*
PSEUDO-CODE
Paso A = Definir "Piedra" "Papel" y "Tijera".

Tijera > papel
Papel > piedra
Piedra > tijera

Paso B = La computadora elegirá aleatoriamente uno de los 3

Podría crear una función que aleatoriamente devuelva una de las 3 opciones.

E.J

function getComputerChoice() = 

Paso C = El jugador debe elegir uno de los 3 // prompt("¿Piedra, Papel o Tijera?" parseInt("")); 

ParseInt para que luego pueda ser evaluado.

Paso D = Generar los posibles resultados evaluando la elección de ambos jugadores.
//

If {P1 > PC console.log("You win");}
Else if {P1 < PC console.log("CPU win");}
Else {console.log("Empate");}
*/


// PASO B

const options = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
const storeComputerChoice = Math.floor(Math.random() * options.length); // Pick a random number between 0 and 2 which is options.length.
return options[storeComputerChoice]; // Return that number into the function
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());