import { filterNewReleases } from "../../data/createDataArrays/newReleases.js";
import { filterTrendingNow } from "../../data/createDataArrays/trendingNow.js";
import { products } from "../../data/fetch/fetchProducts.js";
import { renderReleases } from "../renderGameCard.js";

export async function renderReleasesHome() {
  const newReleasesParent = document.querySelector(".new-releases-container");
  const trendingNowParent = document.querySelector(".trending-now-container");
  const newReleases = filterNewReleases(products);
  const trendingNow = filterTrendingNow(products);
  newReleasesParent.innerHTML = "";
  renderReleases(newReleases, newReleasesParent, "home");
  trendingNowParent.innerHTML = "";
  renderReleases(trendingNow, trendingNowParent, "home");
}
