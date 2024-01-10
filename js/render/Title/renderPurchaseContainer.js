export function renderPurchaseContainer(title) {
  const element = document.createElement("div");
  element.classList.add("flex", "flex-col", "purchase-container");
  element.style.backgroundColor = "var(--light-blue)";

  const titlePriceContainer = document.createElement("div");
  titlePriceContainer.classList.add(
    "flex",
    "flex-col",
    "title-price-container"
  );
  element.append(titlePriceContainer);

  const titlePrice = document.createElement("p");
  titlePrice.classList.add("title-price");
  titlePrice.textContent =
    title.prices.currency_prefix + " " + title.prices.sale_price / 100;
  titlePrice.style.color = "var(--fancy-green)";
  titlePriceContainer.append(titlePrice);

  const titlePriceBefore = document.createElement("p");
  titlePriceBefore.classList.add("title-price-before");
  titlePriceBefore.textContent =
    title.prices.currency_prefix + " " + title.prices.regular_price / 100;
  titlePriceContainer.append(titlePriceBefore);

  const titleInfoContainer = document.createElement("div");
  titleInfoContainer.classList.add("title-info-section", "flex", "flex-col");
  element.append(titleInfoContainer);

  const released = document.createElement("p");
  released.textContent = "Released: " + title.attributes[1].terms[0].name;
  titleInfoContainer.append(released);

  const system = document.createElement("p");
  system.textContent = "System: Playbox" + "\u2122";
  titleInfoContainer.append(system);

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container", "flex", "flex-col");
  element.append(buttonContainer);

  const button = document.createElement("button");
  button.classList.add("cta", "cta-sale");
  button.innerHTML = "Add " + `<i class="fa-solid fa-cart-plus"></i>`;
  buttonContainer.append(button);

  return element;
}
