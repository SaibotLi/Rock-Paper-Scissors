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

// STEP 1 - Create a console.log and check if everything is okay - CLEAR

console.log("Hello, World!");

// STEP 2 - Create a getComputerChoice - CLEAR

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
const storeComputerChoice = Math.floor(Math.random() * options.length); // Pick a random number between 0 and 2 which is options.length.
return options[storeComputerChoice]; // Return that number into the function.
}

console.log(getComputerChoice());

// STEP 3 - Create a getHumanChoice - CLEAR

function getHumanChoice() {
let choice = prompt("Rock, Papers, Scissors:" ); // The human can write his option, i'll create an error later if he writes anything else.
choice = choice.toLowerCase(); // Case-insensitive
if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice; // Return the validated choice.
}
else {
    // If the input is not valid, display an error message and call the prompt again.
    alert("Please enter Rock, Paper or Scissors.");
    return getHumanChoice(); // I believe this is called a recursive call, the function will keep calling itself until a valid prompt is met.
}
}

// STEP 4 - Create humanScore and computerScore - CLEAR

let humanScore = 0, // Human score set to 0
computerScore = 0; // Computer score set to 0

// STEP 5 - Write the logic to play a single round - CLEAR


function playRound(humanChoice, computerChoice) {

    console.log(`Player chose: ${humanChoice}`); // Reminds me what i chose
    console.log(`Computer chose: ${computerChoice}`); // Lets me see what computer chose
  
if (humanChoice === computerChoice) {
    console.log("It's a draw!"); // Draw
}
else if (humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "rock" && computerChoice === "scissors") {
console.log("Player wins!");
humanScore += 1; // Player 1 scores a point
}
else {console.log("CPU wins!");
computerScore += 1; // CPU scores a point
}
console.log(`Computer score is ${computerScore} and player score is ${humanScore}`); // Shows score
}

function playGame(rounds) { // rounds parameter let the player choose the amount of rounds instead of a for loop that only goes until 5.

    for (let i = 0; i < rounds; i++) { // Start until we finish the amount of rounds 
console.log(`Round ${i + 1} out of ${rounds}`);
let humanSelection = getHumanChoice(); // Stores the player option
let computerSelection = getComputerChoice();  // Stores the PC option
playRound(humanSelection, computerSelection); // Plays a round
    } 
}


// STEP 6 - Create a playGame() function where you can choose how many rounds you play

playGame(5);