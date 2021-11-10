/* MAIL
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo.*/

// Creo un array con una lista di mail
const mailArray = ['1@boolean.com', '2@boolean.com', '3@boolean.com', '4@boolean.com', '5@boolean.com', '6@boolean.com','7@boolean.com', '8@boolean.com', '9@boolean.com', '10@boolean.com']

// Leggere la mail inserita
// seleziono il bottone
const submitMail = document.getElementById('btnMail');

// All'evento click prende il valore della mail scritta dall'utente
submitMail.addEventListener("click", function(){
    const mail = document.getElementById('exampleInputEmail1').value;

    // Dichiaro una variabile booleana per il controllo
    let mailFound = false;

    // Creare un ciclo per il confonto
    for (let i = 0; i < mailArray.length; i++){
        if (mail == mailArray[i]){
            mailFound = true;
        }
    }

    // Se la variabile non ha cambiato valore la mail non è presente altrimenti ...
    if (mailFound == false){
        alert('Mail non presente negli archivi')
    } else{
        alert('Mail presente negli archivi')
    }
} );









/*Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?*/