let minuteTotal = parseInt(prompt("Informe la quantite de minute"));

let heures = Math.floor(minuteTotal / 60);
let minutes = minuteTotal % 60;
alert(`${minuteTotal} minutes equivalent a ${heures} heures et ${minutes} minutes`);


/*
EXERCICE 13
  GROUPE- CONVERSION DES MINUTES EN HEURES ET MINUTES
  Creez un programme qui recoit un numero sasi par l'utilisateur et affiche le nombre equivalent d'heures et de inutes.
  ex 131 equivaut a 2 heures et 11 minutes

*/