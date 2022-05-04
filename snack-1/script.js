// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

// 1. Chiedo all'utente di inserire il primo numero
const firstNumber = Number(prompt("Inserisci un numero"));

// 2. Chiedo all'utente di inserire il secondo numero
const secondNumber = Number(prompt("Inserisci un altro numero"));

// 3. Stampo in console il maggiore fra i due numeri
if (firstNumber > secondNumber) {
    console.log(firstNumber);
} else if (firstNumber < secondNumber){
    console.log(secondNumber);
} else {
    console.log("i numeri sono uguali");
}