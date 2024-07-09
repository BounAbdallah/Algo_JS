function afficherTableMultiplication(nombre) {
    console.log(`Table de multiplication de ${nombre} :`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${nombre} x ${i} = ${nombre * i}`);
    }
}

// Exemple d'utilisation :
let nombre = prompt("Veuillez saisir un nombre pour afficher sa table de multiplication :");
nombre = parseInt(nombre);

if (!isNaN(nombre)) {
    afficherTableMultiplication(nombre);
} else {
    console.log("Veuillez saisir un nombre valide.");
}
