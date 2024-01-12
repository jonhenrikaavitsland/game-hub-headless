import { renderProductDescription } from "./renderProductDescription.js";
import { renderPurchaseContainer } from "./renderPurchaseContainer.js";
import { renderTitleImg } from "./renderTitleImg.js";

export function renderTitleGridParent(parent, title) {
  const element = document.createElement("div");
  element.classList.add("title-bottom-content");

  const productImage = renderTitleImg(title);
  const purchaseContainer = renderPurchaseContainer(title);
  const productDescriptionContainer = renderProductDescription(title);
  element.append(productImage, purchaseContainer, productDescriptionContainer);

  parent.append(element);
}
