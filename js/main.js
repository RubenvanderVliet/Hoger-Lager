document.addEventListener("DOMContentLoaded", function () {
    const diceButton = document.querySelector('.dice-button');
    const higherButton = document.querySelector('.higher-button');
    const lowerButton = document.querySelector('.lower-button');
    const goButton = document.querySelector('.go-button');
    const computerCredits = document.querySelector('.computer-credits');
    const playerCredits = document.querySelector('.player-credits');
    const computerDices = [document.querySelector('.computer-dice-one'), document.querySelector('.computer-dice-two')];
    const playerDices = [document.querySelector('.player-dice-one'), document.querySelector('.player-dice-two')];
    const messageBox = document.querySelector('.message-box');

    let computerScore = 0;
    let playerScore = 0;
    let gameStarted = false;

    function rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    function updateCredits() {
        computerCredits.textContent = computerScore;
        playerCredits.textContent = playerScore;
    }

    function updateDices(dices, values) {
        for (let i = 0; i < dices.length; i++) {
            dices[i].textContent = String.fromCodePoint(9855 + values[i]);
        }
    }

    function showMessage(message) {
        messageBox.innerHTML = `<p>${message}</p>`;
    }

    function disableButtons() {
        higherButton.disabled = true;
        lowerButton.disabled = true;
        diceButton.disabled = true;
        goButton.disabled = true;
    }

    function enableButtons() {
        higherButton.disabled = false;
        lowerButton.disabled = false;
        diceButton.disabled = false;
        goButton.disabled = gameStarted;
    }

    function startGame() {
        computerScore = rollDice() + rollDice();
        updateCredits();
        updateDices(computerDices, [rollDice(), rollDice()]);
        showMessage("Kies Hoger of Lager.");
        disableButtons();
        gameStarted = true;
        enableButtons();
    }

    goButton.addEventListener('click', startGame);

    higherButton.addEventListener('click', function () {
        if (!gameStarted) return;
        playerScore = rollDice() + rollDice();
        updateCredits();
        updateDices(playerDices, [rollDice(), rollDice()]);
        if (playerScore > computerScore) {
            showMessage("Je hebt gewonnen!");
        } else if (playerScore === computerScore) {
            showMessage("Gelijkspel!");
        } else {
            showMessage("Je hebt verloren!");
        }
        gameStarted = false;
        enableButtons();
    });

    lowerButton.addEventListener('click', function () {
        if (!gameStarted) return;
        playerScore = rollDice() + rollDice();
        updateCredits();
        updateDices(playerDices, [rollDice(), rollDice()]);
        if (playerScore < computerScore) {
            showMessage("Je hebt gewonnen!");
        } else if (playerScore === computerScore) {
            showMessage("Gelijkspel!");
        } else {
            showMessage("Je hebt verloren!");
        }
        gameStarted = false;
        enableButtons();
    });

    diceButton.addEventListener('click', function () {
        if (!gameStarted) return;
        playerScore = rollDice() + rollDice();
        updateCredits();
        updateDices(playerDices, [rollDice(), rollDice()]);
        enableButtons();
    });

    enableButtons();
});
