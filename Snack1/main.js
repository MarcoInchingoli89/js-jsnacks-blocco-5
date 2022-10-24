/* Crea un array di 10 oggetti che rappresentano una zucchina, indicando
per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

//Creo un array di zucchine con varietà, peso e lunghezza
const zucchine = [
    {
        "variety": 'Zucchina nera',
        "weight": 100,
        "length": '10cm',
    },

    {
        variety: 'Zucchina romanesca',
        weight: 50,
        length: '10cm',
    },

    {
        variety: 'Zucchina di Faenza',
        weight: 150,
        length: '10cm',
    },

    {
        variety: 'Zucchina lunga fiorentina',
        weight: 200,
        length: '10cm',
    },

    {
        variety: 'Zucchina siciliana',
        weight: 100,
        length: '10cm',
    },

    {
        variety: 'Zucchina striata di Napoli',
        weight: 80,
        length: '10cm',
    },

    {
        variety: 'Zucchina bianca triestina',
        weight: 75,
        length: '10cm',
    },

    {
        variety: 'Zucchina rigata pugliese',
        weight: 120,
        length: '10cm',
    },

    {
        variety: 'Zucchina tonda di Piacenza',
        weight: 60,
        length: '10cm',
    },

    {
        variety: 'Zucchina tonda di Nizza',
        weight: 80,
        length: '10cm',
    }
];

//Vado a prendere il peso delle zucchine e lo vado a sommare
let sum = 0;
for (let i = 0; i < zucchine.length; i++) {
    const zucchina = zucchine[i];
    /* console.log(zucchina); */
    const pesoZucchina = zucchina.weight;
    /* console.log(pesoZucchina); */
    sum += pesoZucchina;
}

console.log(sum);