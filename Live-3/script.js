// Condition

// PSEUDO CODE : Si .... Ou si.... Sinon....
// CODE : if.... if else .... else

const age = prompt("Quel est votre age ?");

console.log("age en numéro INT : ", parseInt(age)); // parseInt() : convertir une chaine de caractère en nombre entier
console.log("age en numéro FLOAT : ", parseFloat(age)); // parseFloat() : convertir une chaine de caractère en nombre décimal

const isNotANumber = isNaN(age); // isNaN() : is Not A Number ? => est-ce que ce n'est pas un nombre ?
console.log("isNotANumber : ", isNotANumber); // true ou false

// si age n'est pas un nombre
if (isNotANumber) {
  console.log("L'age donné n'est pas un nombre");
} else if (age < 21 && age >= 18) {
  // age < 21 et age >= 18
  console.log("Tu es mineur aux etats-unis mais tu es majeur eu Europe");
} else if (age < 18) {
  // age inférieur à 18
  // alors tu fais ça
  console.log("Tu es mineur pour le monde entier");
} else {
  // sinon tu fais ça
  console.log("Tu es majeur");
}

// Ternaire : condition ? si vrai : si faux uniquement pour des conditions simples
const isDarkModeOn = true;
// let backgroundColor = null;
// if (isDarkModeOn) backgroundColor = "black";
// else backgroundColor = "white";

// const ternerary = (condition) ? "Si vrai" : "Si faux";
// const backgroundColor = "if === true" ? "Si oui, alors ça" : "sinon ça";
const backgroundColor = "isDarkModeOn" ? "black" : "white";

console.log("backgroundColor : ", backgroundColor);
