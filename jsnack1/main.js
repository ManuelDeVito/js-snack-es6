// JSnack1: Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

$(document).ready(function(){

    var bici = [

        {
            'nome': 'Colnago',
            'peso':  7,
        },
        {
            'nome': 'Wilier',
            'peso':  3,
        },
        {
            'nome': 'Cannondale',
            'peso':  9,

        },

    ];

    let bici_leggera = bici[0]

    bici.forEach((element) => {
        if (element.peso < bici_leggera.peso) {
            bici_leggera = element;
        }
    });

    console.log(bici_leggera);

    const {nome, peso} = bici_leggera;

    console.log('Il nome della bici è: ' + nome);
    console.log('Il peso della bici più leggera è: ' + peso);

    
})
