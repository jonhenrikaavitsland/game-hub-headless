import { products } from "../data/fetch/fetchProducts.js";

export let games = [];

createSearchObjects();

function createSearchObjects() {
  for (let i = 0; i < products.length; i++) {
    const object = {
      id: `${products[i].id}`,
      name: `${products[i].name}`,
      thumbnail: `${products[i].images[0].thumbnail}`,
    };

    games.push(object);
  }
}

console.log(games);
