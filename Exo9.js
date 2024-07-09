function jouerDevinette() {
    // Génère un nombre aléatoire entre 1 et 100
    const nombreADeviner = Math.floor(Math.random() * 100) + 1;
    let tentative;
    let essais = 0;

    do {
        // Demande au joueur de saisir un nombre
        tentative = parseInt(prompt("Devinez le nombre entre 1 et 100 :"), 10);
        essais++;

        // Vérifie si la saisie est un nombre valide
        if (isNaN(tentative)) {
            alert("Veuillez saisir un nombre valide.");
            continue;
        }

        // Fournit des indications au joueur
        if (tentative < nombreADeviner) {
            alert("Encore plus haut !");
        } else if (tentative > nombreADeviner) {
            alert("Encore plus bas !");
        } else {
            alert(`Félicitations ! Vous avez deviné le nombre en ${essais} essais.`);
        }
    } while (tentative !== nombreADeviner);
}

// Démarre le jeu de devinette
jouerDevinette();
