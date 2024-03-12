/*
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

//INPUT DATI
let userSum = 0;
for (let i = 0; i < 5; i++){
    const userNumber = parseInt(prompt("Inserisci un numero"));
    console.log(userNumber);
    userSum += userNumber;
}


//ELABORAZIONE DATI


//OUTPUT DATI