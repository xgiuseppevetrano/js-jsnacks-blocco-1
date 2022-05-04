// Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

// 1. Chiedo per 10 volte un numero
let userNumber;
for (let i = 0; i < 10; i++) {
    userNumber = Number(prompt("Inserisci un numero"));   
}


// 2. Sommo e stampo in console tutti i numeri inseriti
console.log(userNumber + userNumber + userNumber + userNumber + userNumber + userNumber + userNumber + userNumber + userNumber + userNumber);


// Correzione
// 1. Chiedo per 10 volte un numero
// let number;
// let total = 0;
// for (let i = 0; i < 10; i++) {
//     number = Number(prompt("Inserisci un numero"));
//     2. Sommo tutti i numeri inseriti
//     total += number;
// }
// 3. Stampo in console il totale
// console.log(total);