import { products } from "../../data/fetch/fetchProducts.js";
import { filterNewReleases } from "../../data/createDataArrays/newReleases.js";
import { clearReleaseList } from "../clearParentHtml.js";
import { createHtmlObject } from "../renderGameCard.js";

export const newReleases = filterNewReleases(products);

export function runCarousels() {
  const parent = document.querySelector(".new-releases-container");

  try {
    clearReleaseList(parent);
    renderCarousel(newReleases[0], parent);
  } catch (error) {
    console.log("Ops! There was an error", error);
  }
}

export function renderCarousel(data, parent) {
  const wrap = document.createElement("div");
  wrap.classList.add("carousel-wrap");

  const heading = document.createElement("h2");
  heading.textContent = "New Releases";
  wrap.append(heading);

  const gameCard = createHtmlObject(data, "home");
  wrap.append(gameCard);

  const bottomContainer = document.createElement("div");
  bottomContainer.classList.add("carousel-bottom-wrap", "flex");
  wrap.append(bottomContainer);

  const circleOne = document.createElement("i");
  circleOne.classList.add("fa-solid", "fa-circle", "fa-2xl", "circle-1");
  bottomContainer.append(circleOne);

  const circleTwo = document.createElement("i");
  circleTwo.classList.add("fa-solid", "fa-circle", "fa-2xl", "circle-2");
  bottomContainer.append(circleTwo);

  const circleThree = document.createElement("i");
  circleThree.classList.add("fa-solid", "fa-circle", "fa-2xl", "circle-3");
  bottomContainer.append(circleThree);

  const circleFour = document.createElement("i");
  circleFour.classList.add("fa-solid", "fa-circle", "fa-2xl", "circle-4");
  bottomContainer.append(circleFour);

  parent.append(wrap);
}
