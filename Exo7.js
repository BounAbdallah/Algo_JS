function sommeDesNombres() {
    let somme = 0;
    let nombre;

    do {
        nombre = parseInt(prompt("Veuillez saisir un nombre (saisissez 0 pour terminer) :"), 10);
        if (!isNaN(nombre) && nombre !== 0) {
            somme += nombre;
        }
    } while (nombre !== 0);

    console.log(`La somme de tous les nombres saisis est : ${somme}`);
    alert(`La somme de tous les nombres saisis est : ${somme}`);
}

// Appel de la fonction pour démarrer le programme
sommeDesNombres();


