import { filterTitles } from "../data/createDataArrays/arrayOfTitles.js";
import { products } from "../data/fetch/fetchProducts.js";

createGames();

function createGames() {
  const titles = filterTitles(products);
  console.log(titles);
}
