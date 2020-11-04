// JSnack2: Creare un array di nomi e chiedere all'utente due numeri.
// Creare un nuovo array con i valori che si trovano in una posizione compresa tra i due numeri inseriti dall'utente.
// Usiamo i nuovi metodi degli array foreach o filter.

$(document).ready(function(){

    const nomi = ['francesca', 'giorgia', 'manuel', 'luca', 'davide', 'tommaso', 'laura', 'roberto'];

    const primo_numero = parseInt(prompt('Inserisci un numero compreso tra 0 e 7'));
    const secondo_numero = parseInt(prompt('Inserisci un numero compreso tra 0 e 7'));


    const nomi_utente = nomi.filter((element, i) => {
        return primo_numero <= i && secondo_numero >= i;
    });

    console.log(nomi_utente);

})
