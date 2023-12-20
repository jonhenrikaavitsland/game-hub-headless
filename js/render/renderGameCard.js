export function renderRelease(data, parent, page) {
  const gameCardHtml = createHtmlObject(data, page);
  parent.append(gameCardHtml);
}

export function renderReleases(data, parent, page) {
  data.forEach(function (data) {
    renderRelease(data, parent, page);
  });
}

export function createHtmlObject(data, page) {
  let linkUrl;
  if (page === "home") {
    linkUrl = `./games/title/?id=${data.id}`;
  } else if (page === "games") {
    linkUrl = `./title/?id=${data.id}`;
  }

  const element = document.createElement("div");
  element.classList.add("game-card");

  const childUpperHalf = document.createElement("div");
  childUpperHalf.classList.add("game-card-img-wrap");
  element.append(childUpperHalf);

  const childImage = document.createElement("img");
  childImage.classList.add("cover");
  childImage.src = `${data.images[0].src}`;
  childImage.setAttribute("alt", `cover image of ${data.name}`);
  childUpperHalf.append(childImage);

  const childLowerHalf = document.createElement("div");
  childLowerHalf.classList.add("game-card-lower-half-container");
  element.append(childLowerHalf);

  const childTitleInfoContainer = document.createElement("div");
  childTitleInfoContainer.classList.add("title-info-container", "flex");
  childLowerHalf.append(childTitleInfoContainer);

  const childTitleSection = document.createElement("section");
  childTitleInfoContainer.append(childTitleSection);

  let childTitle;
  if (page === "home") {
    childTitle = document.createElement("h3");
  } else if (page === "games") {
    childTitle = document.createElement("h2");
  }
  childTitle.textContent = `${data.name}`;
  childTitleSection.append(childTitle);

  const childCategory = document.createElement("p");
  childCategory.textContent = `${data.categories[0].name}`;
  childTitleSection.append(childCategory);

  const childRatingContainer = document.createElement("div");
  childRatingContainer.classList.add("star-container", "flex");
  childTitleSection.append(childRatingContainer);

  const childRating = document.createElement("i");
  childRating.classList.add("fa-solid", "fa-star-sharp");
  childRatingContainer.append(childRating);

  const childRatingNumber = document.createElement("span");
  childRatingNumber.textContent = "(" + Math.round(data.average_rating) + ")";
  childRatingContainer.append(childRatingNumber);

  const childAgeRatingContainer = document.createElement("div");
  childAgeRatingContainer.classList.add("age-rating-container");
  childTitleInfoContainer.append(childAgeRatingContainer);

  const childAgeRating = document.createElement("span");
  childAgeRating.textContent = `${data.attributes[0].terms[0].name}`;
  if (data.attributes[0].terms[0].name === "16+") {
    childAgeRating.classList.add("age-rating-16");
  } else if (data.attributes[0].terms[0].name === "18+") {
    childAgeRating.classList.add("age-rating-18");
  } else if (data.attributes[0].terms[0].name === "12+") {
    childAgeRating.classList.add("age-rating-12");
  } else {
    childAgeRating.classList.add("age-rating-3");
  }
  childAgeRatingContainer.append(childAgeRating);

  const childSaleContainer = document.createElement("div");
  childSaleContainer.classList.add("sale-container", "flex", "flex-col");
  childLowerHalf.append(childSaleContainer);

  const childPriceContainer = document.createElement("div");
  childPriceContainer.classList.add("price-container", "flex", "flex-col");
  childSaleContainer.append(childPriceContainer);

  let childPrice = document.createElement("p");
  if (`${data.on_sale}`) {
    childPrice.textContent = `${data.prices.currency_code} ${
      data.prices.sale_price / 100
    }`;
  } else {
    childPrice.textContent = `${data.prices.currency_code} ${
      data.prices.regular_price / 100
    }`;
  }
  childPrice.classList.add("price");
  childPriceContainer.append(childPrice);

  let childPriceBefore = document.createElement("p");
  childPriceBefore.textContent = `${data.prices.currency_code} ${
    data.prices.regular_price / 100
  }`;
  childPriceBefore.classList.add("price-before");
  childPriceContainer.append(childPriceBefore);

  const childButton = document.createElement("a");
  childButton.classList.add("cta", "cta-explore");
  childButton.textContent = "explore";
  childButton.setAttribute("id", "cta-game-card");
  childButton.href = linkUrl;
  childSaleContainer.append(childButton);

  return element;
}
