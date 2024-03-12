/*
Calcola la somma e la media dei primi 10 numeri.
*/

//INPUT DATI
const variableNumber = parseInt(prompt("Inserire un numero"));
let sum = 0;
for (let i = 1; i <= variableNumber; i++){
    console.log(i);
    
    //ELABORAZIONE DATI
    sum += i;
}
console.log("somma", sum);
//Calcolo della media
const average = sum / variableNumber;

//OUTPUT DATI
console.log("media", average);