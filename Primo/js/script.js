/*
Chiedere all'utente 5 numeri.
Inserire i numeri nell'array ma senza creare duplicati (inserire il numero nell'array solo se non è già presente).
*/

//INPUT DATI
//Creare un array vuoto
const arrayNumber = [];
//Inserire 5 numeri
for (let i = 0; i < 5; i++){
    const number = parseInt(prompt("Inserisci un numero"));
    console.log(number);

//ELABORAZIONE DATI
//Se il numero non è gia presente, inserirlo
if(!arrayNumber.includes(number)){
    arrayNumber.push(number);
}

//OUTPUT DATI
console.log(arrayNumber);
}