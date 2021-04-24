/*Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine. */

//Creo un'array contenete dieci oggetti dello stesso tipo
var zucchine = [
    zucchina1 = {
        varieta: "varietà 1",
        peso: 0,
        lunghezza: 0,
    },
    zucchina2 = {
        varieta: "varietà 2",
        peso: 0,
        lunghezza: 0,
    },
    zucchina3 = {
        varieta: "varietà 3",
        peso: 0,
        lunghezza: 0,
    },
    zucchina4 = {
        varieta: "varietà 4",
        peso: 0,
        lunghezza: 0,
    },
    zucchina5 = {
        varieta: "varietà 5",
        peso: 0,
        lunghezza: 0,
    },
    zucchina6 = {
        varieta: "varietà 6",
        peso: 0,
        lunghezza: 0,
    },
    zucchina7 = {
        varieta: "varietà 7",
        peso: 0,
        lunghezza: 0,
    },
    zucchina8 = {
        varieta: "varietà 8",
        peso: 0,
        lunghezza: 0,
    },
    zucchina9 = {
        varieta: "varietà 9",
        peso: 0,
        lunghezza: 0,
    },
    zucchina10 = {
        varieta: "varietà 10",
        peso: 0,
        lunghezza: 0,
    },
];
//Creo due nuove array in cui si divideranno gli oggetti della prima array, divisi in base alle loro caratteristiche
var maxLength = [];
var minLength = [];
var lunghezzaLimit = 15;
//Con un ciclo for assegno dei valori numerici random alle chiavi dell'array
for (var i = 0; i < zucchine.length; i++) {
    var varieta = zucchine[i]['varieta'];
    var pesoZucchine = zucchine[i]['peso'];
    var lunghezzaZucchine = zucchine[i]['lunghezza'];
    pesoZucchine = Math.random() * (1.2 - 0.2) + 0.2;
    lunghezzaZucchine = Math.floor(Math.random() * (30 - 10) + 10);
    console.log("La zucchina di " + varieta + " pesa " + pesoZucchine.toFixed(2) + " Kg e misura " + lunghezzaZucchine + " Cm");
    //Stabilisco in base alle loro caratteristiche, in quale nuova array dovranno essere pushati i diversi oggetti
    if (lunghezzaZucchine < lunghezzaLimit) {
        minLength.push(parseFloat(pesoZucchine.toFixed(2)));
    } else {
        maxLength.push(parseFloat(pesoZucchine.toFixed(2)));
    }
}

var totPesoZucchine;
//Creo una funzione che mi consenta di estrarre un determinato valore totale da ciascuna delle due nuove array
function myFunc(total, arr) {
    return total + arr;
}
//Dichiaro la funzione applicandola ad entrambe le array
totZucchinePiccole = myFunc(totPesoZucchine, minLength);
totZucchineGrandi = myFunc(totPesoZucchine, maxLength);
//Stampo i valori richiesti dalla consegna
console.log("Il peso totale delle zucchine è di " + (minLength.reduce(myFunc) + maxLength.reduce(myFunc)) + " Kg")
console.log("Il peso totale di quelle meno lunghe di " + lunghezzaLimit + " cm è di " + minLength.reduce(myFunc) + " Kg");
console.log("Il peso totale di quelle più lunghe di " + lunghezzaLimit + " cm è di " + maxLength.reduce(myFunc) + " Kg");


