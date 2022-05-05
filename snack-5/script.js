// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

// 1. Chiedo di inserire un numero
const askNumber = Number(prompt("Inserisci un numero"));

// 2. SE il numero è pari
//    ALLORA stampo il numero in console
if (askNumber % 2 === 0) {
    console.log(askNumber);
    // 3. Se il numero è dispari
    //    ALLORA stampo il numero successivo in console
} else if (askNumber % 2 === 1) {
    console.log(askNumber + 1);
}