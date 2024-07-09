

// Taux de change actuel (CFA vers USD)
const tauxChange = 0.00158; // 1 CFA = 0.00158 USD

// Fonction pour convertir une somme en CFA en USD
function convertirCFAversUSD(montantCFA) {
  const montantUSD = montantCFA * tauxChange;
  return montantUSD.toFixed(2); // Arrondir à deux chiffres après la virgule
}

// Demander le montant à convertir à l'utilisateur
const montantCFA = parseFloat(prompt("Entrez un montant en francs CFA: "));

// Vérifier si le montant est un nombre valide
if (isNaN(montantCFA)) {
  console.error("La valeur saisie n'est pas un nombre valide.");
} else {
  // Convertir le montant et afficher le résultat
  const montantUSD = convertirCFAversUSD(montantCFA);
  alert(`${montantCFA} CFA est égal à ${montantUSD} USD.`);
}