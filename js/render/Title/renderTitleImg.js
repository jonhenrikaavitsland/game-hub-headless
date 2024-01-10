export function renderTitleImg(title) {
  const element = document.createElement("div");
  element.classList.add("flex", "product-img-container");

  const productImage = document.createElement("img");
  productImage.src = title.images[0].src;
  productImage.setAttribute("alt", title.name);
  element.append(productImage);

  return element;
}
