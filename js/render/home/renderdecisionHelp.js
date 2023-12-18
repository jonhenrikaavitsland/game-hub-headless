import { questionGirl } from "../../data/fetch/fetchMedia.js";

export function renderDecisionHelp() {
  const parent = document.querySelector(".decision-help");

  try {
    parent.innerHTML = "";
    addHtmltoDecisionHelp();
  } catch (error) {
    console.log("Ops! There was an error!", error);
  }

  function addHtmltoDecisionHelp() {
    const element = document.createElement("section");
    element.classList.add("flex");

    const image = document.createElement("img");
    image.src = `${questionGirl.source_url}`;
    image.setAttribute("alt", questionGirl.alt_text);
    element.append(image);

    const header = document.createElement("h2");
    header.textContent = "Try our random game picker today!";
    element.append(header);

    parent.append(element);
  }
}
