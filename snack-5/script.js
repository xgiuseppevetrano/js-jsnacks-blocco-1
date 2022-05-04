// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

// 1. Creo un array vuoto
const number = [];

// 2. Chiedo per 6 volte all'utente di inserire un numero
let askNumber;
for (let i = 0; i < 6; i++) {
    askNumber = Number(prompt("Inserisci un numero"));
    if (askNumber % 2 === 1) {
    number.push(askNumber);
    }
}

console.log(number);

// 3. SE il numero inserito è dispari
//    ALLORA inserisco il numero nell'array

