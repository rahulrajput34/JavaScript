// For random number
let randomNumber = parseInt(Math.random()*100 + 1);


// selecting all the values 
// Submit form Buttton
const submit = document.querySelector('#subt');
// Here where user pass input
const userInput = document.querySelector('#guessField');
// For remaining guess
const remaining = document.querySelector('.lastResult');
// To print guesses
const storePrevGuesses = document.querySelector('.guesses');
// low or high message
const lowOrHigh = document.querySelector('.lowOrHi');
// last element
const startAgain = document.querySelector('.resultParas')


let prevGuesses = [];
let numOfGuesses = 1;

const p = document.createElement('p');


//For all game
let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        let guess = parseInt(userInput.value);
        validateGuess(guess)
    });
}

//validate guess
function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please Enter a valid number")
    } else if(guess < 1){
        alert("Please enter a number more than 1")
    } else if( guess > 100){
        alert("Please enter a number less than 100")
    }else{
        prevGuesses.push(guess);
        if(numOfGuesses === 10){
            cleanUpGuess(guess);
            displayMessage(`Game Over! Random number was ${randomNumber}`)
            endGame();
        } else{
            cleanUpGuess(guess);
            checkGuess(guess);
        }
    }
}

// To check
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame();
    } else if( guess < randomNumber){
        displayMessage(`Number is high`)
    } else if( guess > randomNumber){
        displayMessage('Number is low')
    }
}


function cleanUpGuess(guess){
    userInput.value = ``
    storePrevGuesses.innerHTML += `${guess}, `
    numOfGuesses++;
    let remainingValue = 11 - numOfGuesses;
    // Ensure the value is not less than 0
    if (remainingValue < 0) {
        remainingValue = 0;
    }
    remaining.innerHTML = `${remainingValue}`;
}


function displayMessage(message){
    lowOrHigh.innerHTML = `<h2> ${message} <h2>`
}

function endGame(){
    userInput.value = ``
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<button id = "newGame"> Start new Game </button>`;
    startAgain.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()*100 + 1);
        prevGuesses = [];
        numOfGuesses = 1;
        storePrevGuesses.innerHTML = '';
        remaining.innerHTML = `${11 - numOfGuesses}`;
        userInput.removeAttribute('disabled');
        startAgain.removeChild(p);
        playGame = true;
    })   
}
