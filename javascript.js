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

 // Function to update results in the results div
 function updateResults(message) {
    const paragraph = document.createElement("p");
    paragraph.textContent = message;
    resultsDiv.appendChild(paragraph);
 }

 // Function to reset the game
function resetGame() {
// Disable buttons during the reset period
rockButton.disabled = true;
paperButton.disabled = true;
scissorsButton.disabled = true;

// Clear the results displayed on the screen after a short delay
setTimeout(() => {
    resultsDiv.innerHTML = "";
    
    // Re-enable buttons after clearing the results
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}, 3000); // Adjust the delay (in milliseconds) as needed

// Reset scores to 0 after a short delay
setTimeout(() => {
    humanScore = 0;
    computerScore = 0;

    // Update the score divs to display the reset scores
    updatePlayerScore(humanScore);
    updateComputerScore(computerScore);
}, 3000); // Adjust the delay (in milliseconds) as needed
}

// STEP 5 - Write the logic to play a single round - CLEAR

function playRound(humanChoice, computerChoice) {

    let message = `Player chose: ${humanChoice}\n`; // Reminds me what i chose
    message +=`Computer chose: ${computerChoice}\n`; // Lets me see what computer chose
  
if (humanChoice === computerChoice) {
    message += "It's a draw!\n"; // Draw
}
else if (humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "rock" && computerChoice === "scissors") {
message += "Player wins!\n";
updatePlayerScore(++humanScore);; // Player 1 scores a point
}
else {message += "CPU wins!\n";
updateComputerScore(++computerScore); // CPU scores a point
}
message += `Computer score is ${computerScore} and player score is ${humanScore}\n`; // Shows score

updateResults(message);

    // Check if either player has reached 5 points
    if (humanScore === 5) {
        updateResults("Player wins the game!");
        resetGame(); // Reset the game
    } else if (computerScore === 5) {
        updateResults("Computer wins the game!");
        resetGame(); // Reset the game
    }
}

function playGame(rounds) { // rounds parameter let the player choose the amount of rounds instead of a for loop that only goes until 5.

    for (let i = 0; i < rounds; i++) { // Start until we finish the amount of rounds 
console.log(`Round ${i + 1} out of ${rounds}\n`);
let humanSelection = getHumanChoice(); // Stores the player option
let computerSelection = getComputerChoice();  // Stores the PC option
playRound(humanSelection, computerSelection); // Plays a round
    } 
}


// STEP 6 - Create a playGame() function where you can choose how many rounds you play

//Eliminated this step because T.O.P told me to, now im going to continue with the UI

const scissorsButton = document.querySelector("#scissors");
const paperButton = document.querySelector("#paper");
const rockButton = document.querySelector("#rock");
const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");
const playerScoreDiv = document.querySelector("#player-score");
const computerScoreDiv = document.querySelector("#computer-score");

// Function to update player's score
function updatePlayerScore(score) {
    playerScoreDiv.textContent = `Player score: ${score}`;
}

// Function to update computer's score
function updateComputerScore(score) {
    computerScoreDiv.textContent = `Computer score: ${score}`;
}

rockButton.addEventListener("click", e => {
   let humanSelection = "rock";
   let computerSelection = getComputerChoice();
 playRound(humanSelection, computerSelection);
});

scissorsButton.addEventListener("click", e => {
    let humanSelection = "scissors";
    let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
 });

 paperButton.addEventListener("click", e => {
    let humanSelection = "paper";
    let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
 });

 // Add a div for displaying results and change all of your console.log into DOM methods.
 // Display the running score, and announce a winer of the game once one player reaches 5 points.

