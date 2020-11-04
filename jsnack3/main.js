// JSnack3: A partire da un array di oggetti, creare una copia dell'array e aggiungere ai singoli elementi dell'array una nuova proprietà "position" che contiene una lettera casuale. non dobbiamo modificare l'array inziale.

// Usiamo arrow function, map e...


$(document).ready(function(){

    const oggetti = [

        {
            'nome': 'Orologio',
            'marca': 'Rolex',
            'prezzo': 5000
        },
        {
            'nome': 'Anello',
            'marca': 'Calvin klein',
            'prezzo': 2000
        },
        {
            'nome': 'Collana',
            'marca': 'Swarovski',
            'prezzo': 5000
        },

    ];



    const numero_random = (min, max) => {

        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const lettera_random = () => {

        const lettere = 'abcdefghijklmnopqrstuvwxyz';
        const lettera = lettere[numero_random(0, lettere.length -1)];

        console.log('La lettera generata è: ',  lettera);

        return lettera;
    };


    const nuovi_oggetti_copia = oggetti.map((elementi) => {

        const nuovo_elemento = {
            ...elementi,
            position: lettera_random()
        };
    
        return nuovo_elemento;

    });

    console.log('Gli oggetti originali sono: ', oggetti);
    console.log('Gli oggetti copiati sono: ' , nuovi_oggetti_copia);


});
