/*Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà,
peso e lunghezza. Calcola quanto pesano tutte le zucchine.*/

//Creo un'array di oggetti con le stesse caratteristiche
var zucchine = [
    zucchina1 = {
        varieta: "varietà 1",
        peso: 20,
        lunghezza: 12,
    },
    zucchina2 = {
        varieta: "varietà 2",
        peso: 10,
        lunghezza: 14,
    },
    zucchina3 = {
        varieta: "varietà 3",
        peso: 3,
        lunghezza: 11,
    },
    zucchina4 = {
        varieta: "varietà 4",
        peso: 9,
        lunghezza: 23,
    },
    zucchina5 = {
        varieta: "varietà 5",
        peso: 14,
        lunghezza: 16,
    },
    zucchina6 = {
        varieta: "varietà 6",
        peso: 12,
        lunghezza: 28,
    },
    zucchina7 = {
        varieta: "varietà 7",
        peso: 18,
        lunghezza: 8,
    },
    zucchina8 = {
        varieta: "varietà 8",
        peso: 26,
        lunghezza: 32,
    },
    zucchina9 = {
        varieta: "varietà 9",
        peso: 1,
        lunghezza: 14,
    },
    zucchina10 = {
        varieta: "varietà 10",
        peso: 4,
        lunghezza: 21,
    },
];

pesoTot = 0;

//Effettuo un ciclo sull'array per assegnare ad ogni elemento un peso casuale e per ottenere il peso totale
for (var i = 0; i < zucchine.length; i++) {
    zucchine[i]['peso'] = Math.random() * (1.2 - 0.2) + 0.2;
    pesoTot += zucchine[i]['peso'];
    //Stampo il peso di ogni singolo oggetto
    console.log("La " + (i + 1) + "a zucchina pesa: " + (zucchine[i]['peso']).toFixed(2) + " Kg")
}

//Stampo il peso totale
console.log("Il peso totale delle zucchine è: " + pesoTot.toFixed(2) + " Kg");
