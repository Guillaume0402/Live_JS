const clic = () => {
  console.log("clic");
};

// Récupérer un élément html grace a son id
const myButton = document.querySelector("#myButton"); // On récupère l'élément html qui a l'id myButton
myButton.addEventListener("click", clic); // On ajoute un écouteur d'événement sur le bouton myButton qui appelle la fonction clic

// Sélectionner un élément html grace a son attribut
const buttonData = document.querySelector("[data-myButton]"); // On récupère l'élément html qui a l'attribut data-myButton
console.log(buttonData);
buttonData.addEventListener("mouseenter", () => {
  // fonction anonyme qui s'execute au survol de l'élément
  console.log("mouseenter");
});

// Séléctionner des éléments html grace a leur classe

const dots = document.querySelectorAll("[data-dot]"); // On récupère tous les éléments html qui ont la classe dot
const mySpan = document.querySelector("[data-number]"); // On récupère l'élément html qui a l'attribut data-number
console.log(dots);
for (let index = 0; index < dots.length; index++) {
  // On parcourt tous les éléments html qui ont la classe dot
  dots[index].addEventListener("click", (event) => {
    // event est un objet qui contient des informations sur l'événement qui a été déclenché
    const clickedDot = event.target;
    const number = clickedDot.getAttribute("data-dot"); // On récupère la valeur de l'attribut data-dot de l'élément html qui a été cliqué
    console.log("clic dot", number); // On affiche la valeur de l'attribut data-dot dans la console
    mySpan.textContent = number; // On change le contenu textuel de l'élément html mySpan
    // mySpan.innerHTML = `<b>${number}</b>`;  // On change le contenu html de l'élément html mySpan en mettant la valeur de l'attribut data-dot en gras
  });
}

const reset = document.querySelector("[data-reset]"); // On récupère l'élément html qui a l'attribut data-reset
reset.addEventListener("click", () => {
  // fonction anonyme qui s'execute au clic sur l'élément reset
  mySpan.innerHTML = ""; // On change le contenu textuel de l'élément html mySpan en le vidant
});

console.log(document.getElementsByClassName("dot"));

// différence entre nodeList et HTMLCollection
// https://developer.mozilla.org/fr/docs/Web/API/NodeList
// https://developer.mozilla.org/fr/docs/Web/API/HTMLCollection
