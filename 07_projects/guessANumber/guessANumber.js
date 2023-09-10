let randomNum = parseInt(Math.random() * 100 + 1);
const submitBtn = document.querySelector("#submit");
const userInput = document.querySelector("#guessField");
// result
const guessSlot = document.querySelector(".guesses");
const remainingGuesses = document.querySelector(".remainingGuesses");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submitBtn.addEventListener("click", (evt) =>{
        evt.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    //  validating the user input
    if(isNaN(guess)){
        alert("Please enter a valid number");
    }else if(guess < 1){
        alert("Please enter a number more than 0");
    }else if(guess > 100){
        alert("Please enter a number less than 100");
    }else{
        prevGuess.push(guess);
        if(numGuess >= 10){
            displayGuess(guess);
            displayMessage(`Game over. Random number was ${randomNum}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNum ){
        displayMessage(`You guessed it right`);
        endGame();
    }else if (guess < randomNum){
        displayMessage(`Number is too low`);
    }else if (guess > randomNum){
        displayMessage(`Number is too high`);
    }
}

function displayGuess(guess){
    userInput.value = "";
    guessSlot.innerHTML += `${guess}, `;
    numGuess+=1;
    remainingGuesses.innerHTML = `${11-numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h3>${message}</h3>`
}

function endGame(){
    userInput.value = "";
    userInput.setAttribute('disabled', "");
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">Start new Game</h2`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameBtn = document.querySelector("#newGame");
    newGameBtn.style.cursor = `pointer`;
    newGameBtn.addEventListener("click", (evt) => {
        randomNum = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = ``;
        remainingGuesses.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute("disabled");
        startOver.removeChild(p);
        playGame = true;
    });
}; 