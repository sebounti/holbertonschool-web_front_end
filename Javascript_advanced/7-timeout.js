// Décrit ce qui sera mis dans la console et dans quel ordre

console.log("Début de la file d'exécution");

// Utilisation de setTimeout pour simuler une requête asynchrone
setTimeout(function () {
  console.log("Dernier bloc de code à exécuter");
}, 0);

// Utilisation d'une boucle pour journaliser les numéros d'itération
for (let i = 1; i <= 100; i++) {
  setTimeout(function () {
    console.log("Numéro d'itération : " + i);
  }, 0);
}
// 4. Dernier bloc de code à exécuter
console.log("Fin de l'impression de la boucle");
