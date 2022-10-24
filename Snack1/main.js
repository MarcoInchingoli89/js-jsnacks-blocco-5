/* Crea un array di 10 oggetti che rappresentano una zucchina, indicando
per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

//Creo un array di zucchine con varietà, peso e lunghezza
const zucchine = [
    {
        variety: 'Zucchina nera',
        weight: 100,
        length: '10cm',
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

console.log(zucchine);
console.log(zucchine.variety)


const {
    variety,
    height,
    length
} = zucchine;

console.log(zucchine.variety, zucchine.height, zucchine.length)

//Calcolo quanto pesano le zucchine nell'array usando il ciclo foreach e il rest parameter e l'operatore spread

/* function sum(...params) {
    console.log(params, 'Log nella funzione');
    [1, 4, 5, 6]
    // sommo i valori dell'array params
    let sum = 0;
    params.forEach(numb => {
      sum += numb
    })
    return sum
  
  }
  
  const my_sum = sum(3, 5, 7, 10, 11)
  
  console.log(my_sum); */