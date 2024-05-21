


// creo 5 caselle che posizionero' al centro del main 
const containerElement = document.querySelector('.container');

const playButton = document.querySelector('button#play');

playButton.addEventListener('click', function () {
    generateNewGame(5);
});

function generateNewGame(number) {
    containerElement.innerHTML = '';
    for (let i = 0; i < number; i++) {
        const newDiv = document.createElement('article');
        newDiv.classList.add('box');
        containerElement.appendChild(newDiv);
    }
    
    
}




// let userNumbers = [];

// while (userNumbers.length < 5) {
//     let num = parseInt(prompt(`What is your guess? (${userNumbers.length + 1}/5):`), 10);
//     if (isNaN(num)) {
//         alert("Please, insert a valid number:");
//         continue;
//     }
//     if (userNumbers.includes(num)) {
//         alert("This number has already been inserted, please try again:");
//     } else {
//         userNumbers.push(num);
//     }
// }

// console.log("Your numbers are:", userNumbers);