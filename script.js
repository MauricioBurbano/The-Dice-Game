var message = document.querySelector("h1");
var diceOneImage = document.querySelector("#one");
var diceTwoImage = document.querySelector("#two");

if (!sessionStorage.getItem("refresh")) {
    sessionStorage.setItem("refresh", "true");
    sessionStorage.setItem("draw", "true");
    message.innerText = "Refresh Me";
    setImage(diceOneImage, 6);
    setImage(diceTwoImage, 6);
} else {
    if (sessionStorage.getItem("draw") === "false") {
        sessionStorage.setItem("draw", "true");
        message.innerText = "Draw!"
        setImage(diceOneImage, 1);
        setImage(diceTwoImage, 1);
    } else {
        sessionStorage.setItem("draw", "false");
        draw();
    }
}

function draw() {
    var diceOne = Math.ceil(Math.random() * 6);
    var diceTwo = Math.ceil(Math.random() * 6);

    if (diceOne === diceTwo) {
        draw();
    } else {
        setImage(diceOneImage, diceOne);
        setImage(diceTwoImage, diceTwo);
        if (diceOne > diceTwo) {
            message.innerText = "Player 1 Wins!";
        } else {
            message.innerText = "Player 2 Wins!";
        }
    }
}

function setImage(dice, face) {
    dice.src = "images/dice" + face + ".png";
}