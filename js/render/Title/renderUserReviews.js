export function renderUserReviews(title, reviews) {
  const element = document.createElement("div");
  element.classList.add("flex", "flex-col", "title-reviews-wrap");
  element.style.gap = "20px";

  const headingContainer = document.createElement("section");
  headingContainer.classList.add("flex");
  headingContainer.style.backgroundColor = "var(--light-blue)";
  headingContainer.style.padding = "10px 0";
  headingContainer.style.justifyContent = "center";
  element.append(headingContainer);

  const heading = document.createElement("h3");
  heading.textContent = "Community User Reviews:";
  heading.style.fontWeight = "var(--w4)";
  heading.style.fontSize = "var(--s28)";
  heading.style.fontFamily = "var(--teko)";
  headingContainer.append(heading);

  const reviewsContainer = document.createElement("div");
  reviewsContainer.classList.add("flex", "flex-col", "title-reviews-container");
  reviewsContainer.style.gap = "20px";
  element.append(reviewsContainer);

  for (let i = 0; i < reviews.length; i++) {
    let currentReview = reviews[i];

    const reviewSection = document.createElement("div");
    reviewSection.classList.add("flex", "review-wrap");
    reviewSection.style.padding = "20px 10px";
    if (currentReview.id % 2 === 1) {
      reviewSection.style.justifyContent = "flex-end";
    }
    reviewsContainer.append(reviewSection);

    const reviewBody = document.createElement("div");
    reviewBody.classList.add("flex", "flex-col", "review-body");
    reviewBody.style.padding = "10px";
    reviewBody.style.borderRadius = "var(--r8)";
    reviewBody.style.width = "clamp(250px, 70%, 630px)";
    reviewBody.style.backgroundColor = "var(--light-blue)";
    reviewSection.append(reviewBody);

    const starContainer = document.createElement("div");
    starContainer.classList.add("flex");
    reviewBody.append(starContainer);

    for (let k = 0; k < currentReview.rating; k++) {
      const star = document.createElement("i");
      star.classList.add("fa-solid", "fa-star-sharp");
      star.style.color = "var(--fancy-green)";
      starContainer.append(star);
    }

    const figure = document.createElement("figure");
    figure.style.margin = "0";
    reviewBody.append(figure);

    const blockquote = document.createElement("blockquote");
    blockquote.style.margin = "0";
    figure.append(blockquote);

    const review = document.createElement("p");
    review.textContent = currentReview.review;
    review.style.padding = "1rem";
    review.style.borderRadius = "var(--r8)";
    review.style.backgroundColor = "var(--light-blue)";
    blockquote.append(review);

    const figcaption = document.createElement("figcaption");
    figcaption.textContent = "-" + currentReview.name;
    figcaption.style.fontWeight = "var(--w4)";
    figcaption.style.fontSize = "var(--s21)";
    figcaption.style.fontFamily = "var(--teko)";
    figure.append(figcaption);

    const cite = document.createElement("cite");
    cite.textContent = ", " + title.name;
    figcaption.append(cite);
  }

  return element;
}
