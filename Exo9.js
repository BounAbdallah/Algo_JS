function jouerDevinette() {
    // Génère un nombre aléatoire entre 1 et 100
    const nombreADeviner = Math.floor(Math.random() * 100) + 1;
    let nombreADevinerParUser = 0
    let tentative;
    let essais = 0;
    let choixDejeux = prompt(' voulez vous jouer en solo ou à deux ?') 
    
    let session = choixDejeux

    if(session == "solo"){
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
    }else{
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
            } else if (tentative > nombreADevinerParUser) {
                alert("Encore plus bas !");
            } else {
                alert(`Félicitations ! Vous avez deviné le nombre en ${essais} essais.`);
            }
        } while (tentative !== nombreADeviner);
    }

   
}

// Démarre le jeu de devinette
jouerDevinette();


// donner la possibilité a l'utilisateur de faire le choix si il choisi le choix 1 on lui genere automatiqument le nombre a deviner sinon oon lui demande dentre le nombre a deviner, et si il fait plus de 5 tentations on arette le programme et on lui affiche le
