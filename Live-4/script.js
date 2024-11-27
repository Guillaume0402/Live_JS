// Boucle for
// Pour toutes mes ... (valeurs)
// pour chacun de ... (enfants)
// pour tous mes nombres pairs/impairs
// pour les 10 premiers utilisateurs

// Array = tableau
// new Array()
const colorsString = ["blue", "red", "green"]; // Tableau de string
// const colorsInt = [0x0000ff, 0xff0000, 0x00ff00];  // Tableau de nombre

console.log("tableau", colorsString); // ["blue", "red", "green"]
console.log("tableau", colorsString[0]); // "blue"

// Programme :
// Calcule automatiquement une réduction de 50%
// sur le prix de chaque article
const prices = [12, 13, 14, 15];
console.log("Nombre d'éléments dans mon tableau", prices.length);
const pricesPromo = [];

// tu commences à 0; tu t'arretes quand tu arrives a la fin de mon tableau; tu ajoutes 1 a chaque tour
for (let index = 0; index < prices.length; index++) {
  // console.log("index", index); // 0, 1, 2, 3
  // console.log("Prix initial", prices[index]); // 12, 13, 14, 15
  const initialPrice = prices[index];
  const pricesWithPromo = initialPrice / 2;
  // console.log(initialPrice, pricesWithPromo); // 12, 13, 14, 15, 6, 6.5, 7, 7.5
  pricesPromo.push(pricesWithPromo); // Ajoute le prix avec promo dans le tableau
  // pricesPromo[index] = pricesWithPromo; // similaire a la ligne du dessus
  console.log("pricesPromo", pricesPromo); // [6, 6.5, 7, 7.5]
}

console.log("Mes nouveaux prix sont", pricesPromo);

// Tableau d'objets
const shop = [
  { name: "tshirt", price: 12 },
  { name: "jeans", price: 13 },
  { name: "shoes", price: 14 },
  { name: "hat", price: 15 },
];
for (let index = 0; index < shop.length; index++) {
  const pricesWithPromo = shop[index].price / 2;
  shop[index].promo = pricesWithPromo;
}
console.table(shop);
