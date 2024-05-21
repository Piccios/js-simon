let userNumbers = [];
for (let index = 0; index <= 5; index++){
    let selection = parseInt(prompt("Enter a number: "));
    if (!userNumbers.includes(selection)) {
        userNumbers.push(selection);
    } else {
        alert("You have already entered that number");
    } 
}
