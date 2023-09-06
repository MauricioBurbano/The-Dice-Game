var message = document.querySelector("h1");

if (!sessionStorage.getItem("refresh")) {
    sessionStorage.setItem("refresh", "true");
    sessionStorage.setItem("draw", "true");
    message.innerText = "Refresh Me";
} else {
    if (sessionStorage.getItem("draw") === "false") {
        sessionStorage.setItem("draw", "true");
        message.innerText = "Draw!"
    } else {
        sessionStorage.setItem("draw", "false");
        draw();
    }
}

function draw() {
    var diceOne = Math.ceil(Math.random() * 6);
    var diceTwo = Math.ceil(Math.random() * 6);

    if (diceOne > diceTwo) {
        message.innerText = "Player One Wins!";
    } else if (diceOne < diceTwo) {
        message.innerText = "Player Two Wins!";
    } else {
        draw();
    }
}