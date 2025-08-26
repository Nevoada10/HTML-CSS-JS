// =================================================================================
// File Type: JavaScript                                                           
// Rock, Paper & Scissors game                                                          
// Author: Uriel Neves Silva ( https://github.com/Nevoada10 )                      
// =================================================================================

/* Step 1: Computer Choice Generator

Technical Requirements:
Create function to randomly select computer's game choice
Use options array containing ["Rock", "Paper", "Scissors"]
Generate random index using Math.random() and Math.floor()
Return randomly selected array element
*/

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
const winningCombos = {
    "Rock": "Scissors",    // When Rock is played, it beats Scissors
    "Paper": "Rock",       // When Paper is played, it beats Rock
    "Scissors": "Paper"    // When Scissors are played, they beat Paper
    };

    return winningCombos[playerChoice] === computerChoice;
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

/* 
The document.getElementById() method returns the element in HTML by ID, and assigns
the variable playerScoreSpanElement as it's pointer. So playerScoreSpanElement 
is not the value of the html element.

If we would like to change
the display text of an HTML element, we need to use the innerText property.
*/

const playerScoreSpanElement = document.getElementById("player-score"); 
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");


function showResults(userOption) // (str) -> (void)
{   
    // Get the latest round result, otherwise it wouldn't update the HTML elements.
    roundResultsMsg.innerText = getRoundResults(userOption);

    // Update player and computer scores.
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;

    // Step 5: Determine Game Winner
    // - Check if either player or computer has reached 3 points in showResults function
    // - If player wins, update winnerMsgElement with "Player has won the game!"
    // - If computer wins, update winnerMsgElement with "Computer has won the game!"
    // - Display resetGameBtn and hide optionsContainer when there is a winner

    if (playerScore === 3 || computerScore === 3) { // 
        winnerMsgElement.innerText = playerScore === 3 
            ? "Player has won the game!" 
            : "Computer has won the game!";
        
        resetGameBtn.style.display = "block";  
        optionsContainer.style.display = "none";
    }
  ; 
};

// Step 6: Reset game state
// 1. Set player and computer scores to 0
// 2. Update score display elements
// 3. Hide reset button
// 4. Show game options container
// 5. Clear winner and round result messages

function updateScoreDisplay(){
    playerScoreSpanElement.innerText = playerScore;  // Updates the playerScoreSpanElement and computerScoreSpanElement to display the new scores.
    computerScoreSpanElement.innerText = computerScore; // and computerScoreSpanElement to display the new scores.
}

function resetGame() // (void) -> (void) 
{
    // Resets the player and computer scores to 0.
    playerScore = computerScore = 0;
    updateScoreDisplay();
    resetGameBtn.style.display = "none"; // Hides the resetGameBtn button.
    optionsContainer.style.display = "flex"; // Shows the optionsContainer so the player can play again.
    optionsContainer.style.justifyContent = "center"; // Centers the game options.
    winnerMsgElement.innerText = "";  // Clears the content for the winnerMsgElement 
    roundResultsMsg.innerText = ""; // and roundResultsMsg elements.
}

resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

// When the rock button is clicked, call the showResults function and pass the argument "Rock".
// This will run the game logic for the round.
rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

// When the paper button is clicked, call the showResults function and pass the argument "Paper".
// This will run the game logic for the round.
paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

// When the scissors button is clicked, call the showResults function and pass the argument "Scissors".
// This will run the game logic for the round.
scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});

// =================================================================================