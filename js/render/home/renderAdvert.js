import { advertImage } from "../../data/fetch/fetchMedia.js";

const advertParent = document.querySelector(".advert div");

export function renderAdvertImage() {
  const element = document.createElement("img");
  element.src = advertImage.source_url;
  element.setAttribute("alt", advertImage.alt_text);
  advertParent.append(element);
}
