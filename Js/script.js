


// creo 5 caselle che posizionero' al centro del main 
const containerElement = document.querySelector('.container');

const playButton = document.querySelector('button#play');

playButton.addEventListener('click', function () {
    generateNewGame(5); 
    countDown(5);
});

// new game function

function generateNewGame(number) {
    containerElement.innerHTML = '';
    const uniqueNumbers = getUniqueNumbers(5);

    for (let i = 0; i < number; i++) {
        const newDiv = document.createElement('article');
        newDiv.classList.add('box');
        newDiv.textContent = uniqueNumbers[i];
        containerElement.appendChild(newDiv);
    }
}

// function to get unique numbers

function getUniqueNumbers(numberofCells) {
    let numbers = [];
    while (numbers.lenght < numberofCells) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
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
            alert('Time is up! Now guess the 5 numbers!');
            getUserGuess();
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

function getUserGuess(){
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
}
console.log("Your numbers are:", userNumbers);
}