// Définition de la fonction createClassRoom
// Fonction qui prend en paramètre le nombre d'étudiants dans la classe
// Retourne un tableau de fonctions
// Chaque fonction retournée par createClassRoom doit retourner son numéro de siège
// Le numéro de siège doit commencer à 1 et s'incrémenter de 1 à chaque appel de fonction

function createClassRoom(numbersOfStudents) {
  // Fonction interne studentseat qui crée une fermeture (closure)
  function studentseat(seat) {
    // Retourne une fonction qui, lorsqu'elle est appelée, retourne le numéro de la place
    return function () {
      return seat;
    };
  }

  // Création d'un tableau vide pour stocker les étudiants
  let students = [];
  // Boucle pour créer un étudiant (siège) pour chaque nombre d'étudiants
  for (let i = 0; i < numbersOfStudents; i++) {
    // Appel de la fonction studentseat avec le numéro de siège actuel (i + 1)
    let seat = studentseat(i + 1);
    // Ajout de la fonction retournée par studentseat au tableau students
    students.push(seat);
  }
  // Retour du tableau students rempli de fonctions
  return students;
}

// Création d'une salle de classe avec 10 étudiants
classRoom = createClassRoom(10);
