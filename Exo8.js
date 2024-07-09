
function compterOccurrences(phrase, element) {
    let count = 0;
    let position = phrase.indexOf(element);

    while (position !== -1) {
        count++;
        position = phrase.indexOf(element, position + element.length);
    }

    return count;
}

// Exemple d'utilisation :
let phrase = prompt("Veuillez saisir une phrase :");
let element = prompt("Veuillez saisir le caractère ou l'ensemble de caractères à compter :");
let nombreOccurrences = compterOccurrences(phrase, element);
console.log(`L'élément "${element}" apparaît ${nombreOccurrences} fois dans la phrase.`);
alert(`L'élément "${element}" apparaît ${nombreOccurrences} fois dans la phrase.`);

// // EXO 2 partie question 2
// function remplacerCaractere(phrase, ancienCaractere, nouveauCaractere) {
//     return phrase.split(ancienCaractere).join(nouveauCaractere);
// }

// // Exemple d'utilisation :
// let phrase = prompt("Veuillez saisir une phrase :");
// let ancienCaractere = prompt("Veuillez saisir le caractère ou l'ensemble de caractères à remplacer :");
// let nouveauCaractere = prompt("Veuillez saisir le nouveau caractère ou l'ensemble de caractères de remplacement :");
// let phraseModifiee = remplacerCaractere(phrase, ancienCaractere, nouveauCaractere);
// console.log(`La nouvelle phrase est : ${phraseModifiee}`);
// alert(`La nouvelle phrase est : ${phraseModifiee}`);






// Math.random() et Math.floor() en JavaScript.

// Math.random()
// Math.random() est une méthode JavaScript qui renvoie un nombre flottant pseudo-aléatoire compris entre 0 (inclus) et 1 (exclus). Par exemple, il pourrait renvoyer des valeurs comme 0.2345, 0.6789, etc.

// Math.floor()
// Math.floor() est une méthode JavaScript qui arrondit un nombre à l'entier inférieur le plus proche. Par exemple, Math.floor(4.7) renverra 4.