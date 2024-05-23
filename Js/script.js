

const containerElement = document.querySelector('.container');

const playButton = document.querySelector('button#play');

let correctNumbers = [];

playButton.addEventListener('click', function () {
    generateNewGame(5);
    countDown(5);
});

// new game function

function generateNewGame(number) {
    containerElement.innerHTML = '';
    let uniqueNumbers = getUniqueNumbers(5, 1, 20);
    for (let i = 0; i < number; i++) {
        const newDiv = document.createElement('article');
        newDiv.classList.add('box');
        newDiv.textContent = uniqueNumbers[i];
        containerElement.appendChild(newDiv);
    }
    return uniqueNumbers;
}

// function to get unique numbers

function getUniqueNumbers(numberofCells, min, max) {
    let numbers = [];
    while (numbers.length < numberofCells) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    } return numbers;
}


// countdown timer that pops up the promps in which the user has to guess the numbers

function countDown(time) {
    let timer = time;
    const interval = setInterval(() => {
        if (timer > 0) {
            console.log(`${timer} seconds remaining`);
            timer--;
        } else {
            clearInterval(interval);
            hideNumbers();
            setTimeout(() => {
                alert('Time is up! Now guess the 5 numbers!');
                const userNumbers = getUserGuess()
                checkUserGuess(userNumbers, correctNumbers);
            }, 100);
        }
    }, 1000);
}

// Function that hides the numbers

function hideNumbers() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.textContent = '';
    });
}

// Function that pops up prompts for user's guess

function getUserGuess() {
    let userNumbers = [];

    while (userNumbers.length < 5) {
        let num = parseInt(prompt(`What is your guess? (${userNumbers.length + 1}/5):`), 10);
        if (isNaN(num)) {
            alert("Please, insert a valid number:");
            continue;
        }
        if (userNumbers.includes(num)) {
            alert("This number has already been inserted, please try again:");
        } else {
            userNumbers.push(num);
        }
    } return userNumbers;
}


// Function to check the user's guesses against the correct numbers

function checkUserGuess(userNumbers, numbers) {
    let correctGuesses = 0;
    userNumbers.forEach(num => {
        if (correctNumbers.includes(num)) {
            correctGuesses++;
        }
    })
    alert(`You guessed ${correctGuesses} number(s) correctly!`);
}
