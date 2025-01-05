function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);

    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;

    // Unified logic for handling game winner
    if (playerScore === 3 || computerScore === 3) {
        winnerMsgElement.innerText = playerScore === 3 
            ? "Player has won the game!" 
            : "Computer has won the game!";
        
        resetGameBtn.style.display = "block";  
        optionsContainer.style.display = "none";
    }
}