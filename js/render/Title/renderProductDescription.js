export function renderProductDescription(title) {
  const element = document.createElement("div");
  element.classList.add("flex", "flex-col", "product-description-container");

  const descriptionSection = document.createElement("section");
  element.append(descriptionSection);

  const descriptionHeader = document.createElement("h2");
  descriptionHeader.textContent = "Product description:";
  descriptionSection.append(descriptionHeader);

  const description = document.createElement("p");
  description.innerHTML = title.short_description;
  descriptionSection.append(description);

  const categoryContainer = document.createElement("section");
  element.append(categoryContainer);

  const categoryHeader = document.createElement("h2");
  categoryHeader.textContent = "Category:";
  categoryContainer.append(categoryHeader);

  const category = document.createElement("p");
  category.innerHTML = title.categories[0].name;
  categoryContainer.append(category);

  const parentalContainer = document.createElement("section");
  element.append(parentalContainer);

  const parentalHeader = document.createElement("h2");
  parentalHeader.textContent = "Parental:";
  parentalContainer.append(parentalHeader);

  const parental = document.createElement("p");
  parental.textContent = "Age Rating: " + title.attributes[0].terms[0].name;
  parentalContainer.append(parental);

  const ageContainer = document.createElement("div");
  ageContainer.classList.add("flex", "age-box");
  ageContainer.style.width = "50px";
  ageContainer.style.height = "50px";
  parentalContainer.append(ageContainer);

  const ageRating = document.createElement("span");
  ageRating.textContent = title.attributes[0].terms[0].name;
  if (
    title.attributes[0].terms[0].name.replace(/\+/g, "") >= 12 &&
    title.attributes[0].terms[0].name.replace(/\+/g, "") <= 16
  ) {
    ageContainer.style.backgroundColor = "var(--rating-12-16)";
  } else if (title.attributes[0].terms[0].name.replace(/\+/g, "") > 16) {
    ageContainer.style.backgroundColor = "var(--rating18)";
  } else if (title.attributes[0].terms[0].name.replace(/\+/g, "") < 12) {
    ageContainer.style.backgroundImage = "var(--white-f2)";
    ageContainer.style.color = "var(--dark-blue)";
  }
  ageContainer.append(ageRating);

  const parentalGuidance = document.createElement("p");
  parentalContainer.append(parentalGuidance);

  const textFront = "Further parental controls are available when ";

  const textNode1 = document.createTextNode(textFront);
  parentalGuidance.append(textNode1);

  const link = document.createElement("a");
  link.href = "../../account/";
  link.textContent = "logging in";
  link.style.color = "var(--fancy-green)";
  parentalGuidance.append(link);

  const textBack = " to your private account!";

  const textNode2 = document.createTextNode(textBack);
  parentalGuidance.append(textNode2);

  return element;
}
