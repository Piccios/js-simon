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