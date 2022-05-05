// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

// 1. Creo due array con un numero di elementi diveri
const firstList = [1, 10, 24, 28, 32];
const secondList = [20, 33, 48, 53, 21, 36, 14, 20, 11, 18, 40];

// 2. FINTANTO CHE la lunghezza degli array è diversa
//    ALLORA aggiungo elementi casuali all'array che ha meno elementi
while (firstList.length !== secondList.length) {
    if (firstList.length < secondList.length) {
        firstList.push(Math.floor(Math.random() * 100) + 1);
    } else {
        secondList.push(Math.floor(Math.random() * 100) + 1);
    }
}

console.log(firstList, secondList);