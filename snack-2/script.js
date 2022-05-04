// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// 1. Chiedo all'utente una parola
const firstWord = prompt("Inserisci una parola");

// 2. Chiedo all'utente una seconda parola
const secondWord = prompt("Inserisci un'altra parola");

// 3. Stampo in console la parola più corta e poi quella più lunga
if (firstWord.length > secondWord.length) {
    console.log(secondWord);
    console.log(firstWord);
} else if (firstWord.length < secondWord.length) {
    console.log(firstWord);
    console.log(secondWord);
} else {
    console.log("Hanno la stessa lunghezza");
}