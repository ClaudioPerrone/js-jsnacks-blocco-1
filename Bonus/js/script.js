/*
Dato un array contenente 10 numeri, stampare in console il numero più grande.
*/

//INPUT DATI
const numbers = [1, 20, 3, 40, 5, 60, 7, 80, 9, 100];
let biggestNumber = numbers[0];

//ELABORAZIONE DATI
for (let i = 0; i < numbers.length; i++){
    const thisNumber = numbers[i];
    if (thisNumber > biggestNumber){
        biggestNumber = thisNumber;
    }
}

//OUTPUT DATI
console.log(biggestNumber);