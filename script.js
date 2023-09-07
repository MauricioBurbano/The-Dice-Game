var message = document.querySelector("h1");
var diceOneImage = document.querySelectorAll("img")[0];
var diceTwoImage = document.querySelectorAll("img")[1];

if (!sessionStorage.getItem("refresh")) {
    sessionStorage.setItem("refresh", "true");
    message.innerText = "🔃Refresh Me";
    diceOneImage.src = "images/dice6.png";
    diceTwoImage.src = "images/dice6.png";
} else {
    rollDice();
}

function rollDice() {
    var diceOne = Math.ceil(Math.random() * 6);
    var diceTwo = Math.ceil(Math.random() * 6);

    diceOneImage.src = "images/dice" + diceOne + ".png";
    diceTwoImage.src = "images/dice" + diceTwo + ".png";

    if (diceOne === diceTwo) {
        message.innerText = "🚩Draw!🚩";
    } else if (diceOne > diceTwo) {
        message.innerText = "🚩Player 1 Wins!"
    } else {
        message.innerText = "Player 2 Wins!🚩"
    }
}