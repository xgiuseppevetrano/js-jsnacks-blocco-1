// Generatore di "nomi cognomi" casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

// 1. Creo un array di nomi casuali
const firstName = ["Giovanni", "Giorgio", "Franco", "Luca", "Ismaele", "Andrea"];

// 2. Creo un array di cognomi casuali
const secondName = ["Rossi", "Brunelli", "Anfredi", "Tornino", "Curato", "Pinzato"];

// 3. Metto insieme i due array in ordine casuale
const fullName = [];
for (let i = 0; i < firstName.length; i++) {
    fullName.push(`${firstName[Math.floor(Math.random() * firstName.length)]} ${secondName[Math.floor(Math.random() * secondName.length)]}`);
}

// 4. Stampo la lista di nomi e cognomi
console.log(fullName);