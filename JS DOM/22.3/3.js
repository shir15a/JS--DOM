const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const letterGuessed = document.querySelector("#guessed");
const correctGuess = document.querySelector("#winOrFail");
const whenWin = document.querySelector("h2");
let guessedLetters;

const resetGame = () => {
    guessedLetters = [];
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log("Letter to guess: " + letterToGuess);
}

const display = () => {
    letterGuessed.innerHTML = guessedLetters.join(',');
}

document.onkeyup = (event) => {
    let guess = event.key;
    if (guess === letterToGuess) {
        win();
    }
    else {
        fail(guess);
    }
    display();
}

const win = () => {
    correctGuess.textContent = 'right letter!';
    correctGuess.style.color = "green";
    letterGuessed.outerHTML = `<button onclick="rerender()">Yes</button>`;
}


const fail = (letter) => {
    if (!guessedLetters.includes(letter)) {
        correctGuess.textContent = 'Nope, wrong letter';
        correctGuess.style.color = "red";
        guessedLetters.push(letter);
    }
    else {
        correctGuess.textContent = 'has already been guessed!';
        correctGuess.style.color = "red";
    }
}

const rerender = () => {
    window.location.reload();
}

resetGame();
display();
