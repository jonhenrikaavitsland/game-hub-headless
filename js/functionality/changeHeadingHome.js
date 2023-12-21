export const headingContainer = document.querySelector(".heading-wrap");
const trendingNowParent = document.querySelector(".trending-now-container");
const newReleasesParent = document.querySelector(".new-releases-container");

// Hides the alternating container of game-cards.
export function changeHeadingHome() {
  const headingH2 = document.querySelector(".headings");
  if (headingH2.textContent === "New releases") {
    headingH2.textContent = "Trending now";
    newReleasesParent.classList.add("hidden");
    trendingNowParent.classList.remove("hidden");
  } else {
    headingH2.textContent = "New releases";
    trendingNowParent.classList.add("hidden");
    newReleasesParent.classList.remove("hidden");
  }
}
