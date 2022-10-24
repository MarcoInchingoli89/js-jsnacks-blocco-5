/* Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine. */

//Creo un array di zucchine con varietà, peso e lunghezza
const zucchine = [
    {
        variety: 'Zucchina nera',
        weight: 100,
        length: 10,
    },

    {
        variety: 'Zucchina romanesca',
        weight: 50,
        length: 15,
    },

    {
        variety: 'Zucchina di Faenza',
        weight: 150,
        length: 30,
    },

    {
        variety: 'Zucchina lunga fiorentina',
        weight: 200,
        length: 25,
    },

    {
        variety: 'Zucchina siciliana',
        weight: 100,
        length: 8,
    },

    {
        variety: 'Zucchina striata di Napoli',
        weight: 80,
        length: 13,
    },

    {
        variety: 'Zucchina bianca triestina',
        weight: 75,
        length: 16,
    },

    {
        variety: 'Zucchina rigata pugliese',
        weight: 120,
        length: 20,
    },

    {
        variety: 'Zucchina tonda di Piacenza',
        weight: 60,
        length: 10,
    },

    {
        variety: 'Zucchina tonda di Nizza',
        weight: 80,
        length: 11,
    }
];

//Dividi in due array le zucchine che sono lunghe più e meno di 15cm
