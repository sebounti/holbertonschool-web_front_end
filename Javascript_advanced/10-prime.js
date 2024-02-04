// Définition de la fonction countPrimeNumbers qui compte les nombres premiers de 2 à 100
function countPrimeNumbers() {
  let numOfPrimeNums = 0; // Initialise un compteur pour les nombres premiers

  // Fonction isPrime vérifie si un nombre est premier
  function isPrime(number) {
    let isPrime = 1; // Supposons que le nombre est premier (1 signifie vrai)

    if (number < 2) {
      isPrime = 0; // Si le nombre est inférieur à 2, il n'est pas premier (0 signifie faux)
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          isPrime = 0; // Si le nombre est divisible par un autre nombre, il n'est pas premier
          break; // Sort de la boucle car il n'est pas nécessaire de continuer la vérification
        }
      }
    }

    return isPrime;
  }

  // Boucle de 2 à 100 pour vérifier chaque nombre
  for (let num = 2; num < 101; num++) {
    if (isPrime(num) == 1) {
      numOfPrimeNums += 1; // Si le nombre est premier, incrémente le compteur
    }
  }

  return numOfPrimeNums; // Renvoie le nombre total de nombres premiers trouvés
}

// Enregistrement de l'heure de fin de l'exécution
const starttime = performance.now();
for (let i = 0; i < 100; i++) {
  countPrimeNumbers();
}

countPrimeNumbers();

const endtime = performance.now();

console.log(
  `Execution time of calculating prime numbers 100 times was ${
    endtime - starttime
  } milliseconds.`,
);

console.log(
  "le nombre de nombres premiers entre 2 et 100 est de " +
    countPrimeNumbers() +
    ".",
);
