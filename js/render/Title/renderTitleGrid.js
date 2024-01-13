import { renderProductDescription } from "./renderProductDescription.js";
import { renderPurchaseContainer } from "./renderPurchaseContainer.js";
import { renderTitleImg } from "./renderTitleImg.js";
import { renderUserReviews } from "./renderUserReviews.js";

export function renderTitleGridParent(parent, title, reviews) {
  const element = document.createElement("div");
  element.classList.add("title-bottom-content");

  const productImage = renderTitleImg(title);
  const purchaseContainer = renderPurchaseContainer(title);
  const productDescriptionContainer = renderProductDescription(title);
  const UserReviews = renderUserReviews(title, reviews);
  element.append(
    productImage,
    purchaseContainer,
    productDescriptionContainer,
    UserReviews
  );

  parent.append(element);
}
