/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

//INPUT DATI
const number = [];
for (let i = 0; i < 6; i++){
    const userNumber = parseInt(prompt("Inserisci un numero"));
    console.log(userNumber);

    //ELABORAZIONE DATI
    //Se il numero, una volta diviso per 2 NON da zero (quindi è dispari), metterlo nell'array
    if (userNumber % 2 !== 0){
        number.push(userNumber);
    }
}

//OUTPUT DATI
console.log(number);