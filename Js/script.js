let userNumbers = [];

while (numbers.length < 5) {
    let num = parseInt(prompt(`Inserisci un numero (${numbers.length + 1}/5):`), 10);
    if (isNaN(num)) {
        alert("Per favore, inserisci un numero valido.");
        continue;
    }
    if (numbers.includes(num)) {
        alert("Il numero è già stato inserito. Inserisci un numero diverso.");
    } else {
        numbers.push(num);
    }
}

console.log("I numeri inseriti sono:", userNumbers);