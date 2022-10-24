/* Scrivi una funzione che accetti una stringa come argomento e la ritorni
girata (es. Ciao -> oaiC) */

//Creo un prompt per l'input della parola
const userWord = prompt('Scrivi una parola');
//Recupero la parola rovesciata con return
const wordReversed = wordReverse(userWord);
console.log(wordReversed);
//Creo una funzione per rovesciare la parola
function wordReverse(word) {
    const wordReverse = userWord.split('').reverse().join('');

    return wordReverse;
}
