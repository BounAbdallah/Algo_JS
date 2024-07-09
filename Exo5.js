

function verifierMotDePasse(motDePasse) {
    const longueurMinimale = 8;
    const regexChiffre = /\d/;
    const regexCaractereSpecial = /[!@#$%^&*(),.?":{}|<>]/;

    if (motDePasse.length < longueurMinimale) {
        return "Le mot de passe doit contenir au moins 8 caractères.";
    }

    if (!regexChiffre.test(motDePasse)) {
        return "Le mot de passe doit contenir au moins un chiffre.";
    }

    if (!regexCaractereSpecial.test(motDePasse)) {
        return "Le mot de passe doit contenir au moins un caractère spécial.";
    }

    return "Le mot de passe est suffisamment fort.";
}

// Exemple d'utilisation :
let motDePasse = prompt("Veuillez saisir votre mot de passe :");
let verification = verifierMotDePasse(motDePasse);
alert(verification);
