import { filterTitles } from "../data/createDataArrays/arrayOfTitles.js";
import { products } from "../data/fetch/fetchProducts.js";
import { clearReleaseList } from "../render/clearParentHtml.js";
import { renderReleases } from "../render/renderGameCard.js";

createGames();

function createGames() {
  const titles = filterTitles(products);
  const parent = document.querySelector(".games-container");

  try {
    clearReleaseList(parent);
    renderReleases(titles, parent, "games");
  } catch (error) {
    console.log("Ops! There was an error!", error);
  }
}
