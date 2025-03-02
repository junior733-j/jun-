let firstNumber = prompt("Entre votre premier  numero");
let secondNumber = prompt("Entre votre second numero");



let convertedFirstNumber = Number(firstNumber);
let convertedSecondNumber = Number(secondNumber);


let addition = convertedFirstNumber + convertedSecondNumber;
let soustraction = convertedFirstNumber - convertedSecondNumber;
let division = convertedFirstNumber /  convertedSecondNumber;
let multiplication = convertedFirstNumber *  convertedSecondNumber;

console.log(` ${firstNumber} + ${secondNumber} = ${addition}`);
console.log(` ${firstNumber} - ${secondNumber} = ${soustraction}`);
console.log(` ${firstNumber} / ${secondNumber} = ${division}`);
console.log( `${firstNumber} * ${secondNumber} = ${multiplication}`);


/*
Relevons un defi ! Creez un programme qui execute les etapes suivantes:
 1- Demandez un nimero avec une invite et enregistrez ce qui a ete tape dans une variable <<firsNumber>>    
 2-Demandez un deuxieme numero via l'invite et enregistrez ce qui a ete saisi dans une varible << secondNumber
 3-Affichez le resulta de chacune des quatre operations principales sur la console, au format<< operation :resultat>>, 
 ou operation est l' operation utilisee et resultat est de l'operation.Les operations a effectuer sont <<l'addition>>
 la soustraction>>,<<la multiplication>> et la << division>> .
 OBSERVATION:
 Vous devez convertir les nombres saisis a l'invite au type de nombre, sinon les operations
 mathematiques ne fonctionneront pas correctement.Exemple: let firsNumber= promp"Entrez le premier numero:) )                                              
laissez firsConvertedNumber = Number(firsNumber).


*/