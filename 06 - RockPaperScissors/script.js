// =================================================================================
// File Type: JavaScript                                                           |
// Rock, Paper & Scissors game                                                           |
// Author: Uriel Neves Silva ( https://github.com/Nevoada10 )                      |
// =================================================================================

/* Step 1: Computer Choice Generator

Technical Requirements:
Create function to randomly select computer's game choice
Use options array containing ["Rock", "Paper", "Scissors"]
Generate random index using Math.random() and Math.floor()
Return randomly selected array element
*/

console.log()

function getRandomComputerResult() // (void) -> (string)
    { 
    const options = ["Rock", "Paper", "Scissors"]; // min_i = 0 max_i = 2

    computerChoice = options[Math.floor(Math.random() * options.length)];

    return computerChoice; // string
    
    // Generate random index (computerChoice variable explanation):
    // 1. Math.random() → decimal between 0-1 (takes no arguments)
    // 2. * options.length → scale to array size
    // 3. Math.floor() → round down to integer
    // 4. + 1 (optional) → shift range if needed
    /*
    math.random() -- (0 to 0.99999, but always < 1)
    options.length -- (3), shows the nº of elements, not the indexes in the array.
    Math.random() * options.length)] --( 0 to 2.99999, but always < 3)
    Math.floor() -- (0 to 2)
    */
    }

let computerScore = 0;
let playerScore = 0;

//console.log("Computer chose: " + getRandomComputerResult());

/* Step 2: Round Winner Determination
* 
* Game Mechanics:
* - Multiple rounds to reach 3 points
* - Determine round winner based on game rules
* 
* Return Value:
* - true: Player wins round
* - false: Player loses or ties round
*/

function hasPlayerWonTheRound(playerChoice, computerChoice) // (str, str) -> (bool)
{
    if (playerChoice == "Rock" && computerChoice == "Scissors"){
        return true;
    }
    else if (playerChoice == "Paper" && computerChoice == "Rock"){
        return true;
    }
    else if (playerChoice == "Scissors" && computerChoice == "Paper"){
        return true;
    }
    else { // If the player doesn't win, it handles LOSES or TIES.
        return false;
    }
}

//console.log("Player has won? True or false? : " + hasPlayerWonTheRound("Rock",getRandomComputerResult())) // (str, str) -> (bool)

/* Step 3: Round Results
 * Implement getRoundResults() function
 * - Track round outcome
 * - Update player/computer scores
 * 
 * Example Outputs:
 * "Player wins! Rock beats Scissors"
 * "Computer wins! Paper beats Rock"
 * "It's a tie! Both chose Paper"
 */

function getRoundResults(userOption) // (string) -> (string)
{ 
    const computerResult = getRandomComputerResult(); 

    //console.log("User Option: " + userOption);
    //console.log("Computer Option: " + computerResult);

    if (hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore++;
        return "Player wins! " + userOption + " beats " + computerResult;
    }
    else if (userOption == computerResult) {
        return "It's a tie! Both chose " + userOption;
    }
    else {   
        computerScore++;
        return "Computer wins! " + computerResult + " beats " + userOption;
    };
}

//console.log(getRoundResults("Rock"));
//console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);

/*  Step 4: Update Scores and Round Results
* 
* Objective: 
* - Update the player and computer scores displayed on the page
* - Update the round results message with the outcome of the round
*
* Requirements:
* 1. Use playerScoreSpanElement to display the player's current score
* 2. Use computerScoreSpanElement to display the computer's current score
* 3. Update roundResultsMsg with the result of the round
*
* Hints:
* - Utilize the innerText property to update text content of elements
* - Call getRoundResults() to get the specific round result
* - Ensure scores and messages reflect the latest game state
*  
*/

const playerScoreSpanElement = document.getElementById("player-score"); 
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");

/* 
The document.getElementById() method returns the element in HTML by ID, and assigns
the variable playerScoreSpanElement as it's pointer. So playerScoreSpanElement 
is not the value of the html element.

If we would like to change
the display text of an HTML element, we need to use the innerText property.
*/

const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");


function showResults(userOption) // (str) -> (void)
{   
    // Get the latest round result, otherwise it wouldn't update the HTML elements.
    let roundResult = getRoundResults(userOption);

    // Update player and computer scores.
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;

    // Get the latest round result and update the message.
    roundResultsMsg.innerText = roundResult
};

showResults("Rock");

console.log()

// =================================================================================