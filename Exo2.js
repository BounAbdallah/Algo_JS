function convertirCelsiusVersFahrenheit(celsius) {
    // Formule de conversion
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  // Demander la température en Celsius à l'utilisateur
  const temperatureCelsius = parseFloat(prompt("Entrez la température en Celsius: "));
  
  // Vérifier si la température est un nombre valide
  if (isNaN(temperatureCelsius)) {
    console.error("La valeur saisie n'est pas un nombre valide.");
  } else {
    // Convertir la température et afficher le résultat
    const temperatureFahrenheit = convertirCelsiusVersFahrenheit(temperatureCelsius);
  alert(`${temperatureCelsius}°C est égal à ${temperatureFahrenheit.toFixed(2)}°F.`);
  }