// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

// 1. Creo un array di numeri interi casuali tra 1 e 100
const number = [];
for (let i = 0; i < 20; i++) {
    number.push(Math.floor(Math.random() * 100) + 1);
}

// 2. SE gli elementi dentro l'array sono in posizione dispari
//    ALLORA li sommo fra di loro
let total = 0;
for (let i = 0; i < number.length; i++) {
    if (i % 2 === 1) {
        total += number[i];
    }
}

console.log(total);