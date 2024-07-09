
function verifierPairesImpaires(liste) {
    return liste.map(nombre => nombre % 2 === 0 ? "Pair" : "Impair");
}

// Exemple d'utilisation :
let liste = [1, 2, 3, 4, 5, 6];
let resultat = verifierPairesImpaires(liste);
console.log(resultat);  


