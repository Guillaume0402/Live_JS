// Fonction "incluse" en JS => native
// alert = nom de la fonction (camelCase)
// () = Apeller une fonction "lancer / exécuter"
// "...." = String, chaine de caractère

// alert => uniquement des chaines de caractères ou des numbers
alert("Fichier lié"); // affiche une alerte pour verifier que le fichier est bien lié
alert(1234); // affiche une alerte avec un nombre

// Fonction pour se débugger en JS
// console => objet JS natif

// log => fonction liée à l'objet console

// const console = {
//   log: "Ma fonction de log",
// };
console.log("Mon fichier JS est bien lié"); // affiche un message dans la console
console.warn("Attention, il y a un problème"); // affiche un message d'avertissement dans la console
console.error("Il y a une erreur"); // affiche un message d'erreur dans la console

// Ecrire une fonction en JS
function addition() {
  // code qui appartient à la fonction addition
}
addition(); // appeler la fonction addition

// fat-arrow = la grosse flèche =>
const soustraction = () => {
  // code qui appartient à ma fonction soustraction
};
soustraction(); // appeler la fonction soustraction

// Dire bonjour

const sayHello = (name, familyName) => {
  // name existe uniquement dans la fonction
  console.log("Bonjour " + name + " " + familyName);
  console.log("Bonjour", name, familyName); // même syntaxe que la ligne précédente
  console.log(`Bonjour ${name} ${familyName}`); // Interpolation de variables (mélanges de chaines de caractères et de variables)
};
const firstName = "Guillaume";
const lastName = "Maignaut";
sayHello(firstName, lastName);
