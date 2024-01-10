export function renderTitleHeading(title, parent, data) {
  const element = document.createElement("section");
  element.classList.add("title-section", "flex", "flex-col");

  const titleHeading = document.createElement("h1");
  titleHeading.textContent = title.name;
  element.append(titleHeading);

  const productID = document.createElement("p");
  productID.textContent = "Productid: " + title.id;
  element.append(productID);

  const starWrap = document.createElement("div");
  starWrap.classList.add("flex", "star-wrap");
  element.append(starWrap);

  const starContainer = document.createElement("div");
  starContainer.classList.add("flex", "stars-container");
  starWrap.append(starContainer);

  let amount = Math.round(title.average_rating);
  for (let i = 0; i < amount; i++) {
    const star = document.createElement("i");
    star.classList.add("fa-solid", "fa-star-sharp");
    starContainer.append(star);
  }

  const rating = document.createElement("span");
  rating.textContent = "(" + data.length + ")";
  starWrap.append(rating);

  parent.append(element);
}
