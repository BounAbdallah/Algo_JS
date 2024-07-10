
function verifierMotDePasse(motDePasse) {
    const longueurMinimale = 8;
    const regexChiffre = /\d/;
    const regexCaractereSpecial = /[!@#$%^&*(),.?":{}|<>]/;
    
    let erreurs = [];

    if (motDePasse.length < longueurMinimale) {
        erreurs.push("Le mot de passe doit contenir au moins 8 caractères.");
    }

    if (!regexChiffre.test(motDePasse)) {
        erreurs.push("Le mot de passe doit contenir au moins un chiffre.");
    }

    if (!regexCaractereSpecial.test(motDePasse)) {
        erreurs.push("Le mot de passe doit contenir au moins un caractère spécial.");
    }

    if (erreurs.length === 0) {
        return "Le mot de passe est suffisamment fort.";
    } else {
        return erreurs.join("\n");
    }
}

// Exemple d'utilisation :
let motDePasse = prompt("Veuillez saisir votre mot de passe :");
let verification = verifierMotDePasse(motDePasse);
alert(verification);

// fais en sorte que si un utilsateur entre un nombre que ça lui renvoie la table de multiplication de chacque nombre et afficher tout les table exemple, si l'utilisateur entre 10, on doit fair la table multiplication de 1, 2, 3,4 jusq