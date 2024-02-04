function studentHogwarts() {
  let privateScore = 0;
  let name = null;
  function changeScoreBy(points) {
    privateScore += points;
  }

  return {
    setName: function (newName) {
      name = newName;
    },
    rewardStudent: function () {
      changeScoreBy(1);
    },
    penalizeStudent: function () {
      changeScoreBy(-1);
    },
    getScore: function () {
      return name + ": " + privateScore;
    },
  };
}

// Création  d'une instance nommée harry //

let harry = studentHogwarts();
// Définissez le nom à "Harry"
harry.setName("Harry");
// Récompensez l'étudiant quatre fois
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
// Affichez le nom et le score dans la console
console.log(harry.getScore()); // Affiche : Harry: 4

// Créez une autre instance nommée draco //

let draco = studentHogwarts();
// Définir le nom à "Draco"
draco.setName("Draco");
// recompenser l'étudiant deux fois
draco.rewardStudent();
draco.rewardStudent();
// pénaliser l'étudiant trois fois
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
// Affichez le nom et le score dans la console
console.log(draco.getScore()); // Affiche : Draco: -2
