let randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

let firstPlayer = document.querySelector(".img1");
console.log(firstPlayer);


if (randomNumber1 == 1) {
    firstPlayer.setAttribute("src", "./images/dice1.png");
} else if (randomNumber1 == 2) {
    firstPlayer.setAttribute("src", "./images/dice2.png");
} else if (randomNumber1 == 3) {
    firstPlayer.setAttribute("src", "./images/dice3.png");
} else if (randomNumber1 == 4) {
    firstPlayer.setAttribute("src", "./images/dice4.png");
} else if (randomNumber1 == 5) {
    firstPlayer.setAttribute("src", "./images/dice5.png");
} else {
    firstPlayer.setAttribute("src", "./images/dice6.png");
}

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);

let secondPlayer = document.querySelector(".img2");
console.log(secondPlayer);

if (randomNumber2 == 1) {
    secondPlayer.setAttribute("src", "./images/dice1.png");
} else if (randomNumber2 == 2) {
    secondPlayer.setAttribute("src", "./images/dice2.png");
} else if (randomNumber2 == 3) {
    secondPlayer.setAttribute("src", "./images/dice3.png");
} else if (randomNumber2 == 4) {
    secondPlayer.setAttribute("src", "./images/dice4.png");
} else if (randomNumber2 == 5) {
    secondPlayer.setAttribute("src", "./images/dice5.png");
} else {
    secondPlayer.setAttribute("src", "./images/dice6.png");
}

let title = document.querySelector("h1");
console.log(title);

if (randomNumber1 > randomNumber2) {
    title.textContent = "🚩Első Játékos nyert!";
} else if (randomNumber2 > randomNumber1) {
    title.textContent = "Második Játékos nyert!🚩";
} else {
    title.textContent = "🚩Döntetlen!🚩";
}