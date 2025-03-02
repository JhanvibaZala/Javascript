let random = parseInt(Math.random() * 100 +1);

const submit = document.querySelector('#submit-btn');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultPara');

const para = document.createElement('p');

let prevGuesses = [];
let numGuess = 1;

let playGames = true;

if(playGames) {
    submit.addEventListener('click', function (e) {
        e.preventDefault(); //prevents values from going anywhere
        let guess = parseInt(userInput.value)
        validateGuesses(guess); 
    })
}

function validateGuesses(guess) {
    if(isNaN(guess)) {
        alert('Please enter a valid number!')         
    }
    else if (guess<1) {
        alert('Please enter a number greater than 1!')         
    }
    else if (guess<1) {
        alert('Please enter a number less than 100!')         
    }
    else {
        prevGuesses.push(guess);
        if (numGuess===11) {
            displayGuess(guess);
            displayMsg(`Game Over. Random number was ${random}`);
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if(guess===random) {
        displayMsg(`You guessed it right`);
        endGame();
    }
    else if(guess<random) {
        displayMsg(`guessed is tooo lowww`)
    }
    else if(guess>random) {
        displayMsg(`guessed is tooo highhh`)
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMsg(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');     // they are key value pair
    para.classList.add('button');
    para.innerHTML = `<h2 id="newGame">Start new game</h2>`
    startOver.appendChild(para);
    playGames = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e) {
        random = parseInt(Math.random() * 100 +1);
        prevGuesses =[];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(para);
        playGames = true;
    })
}