import { heroImage } from "../../data/fetch/fetchMedia.js";

export function renderHeroImage() {
  const heroImageParent = document.querySelector(".hero-img");

  heroImageParent.style.backgroundImage = `url(${heroImage.source_url})`;

  try {
    heroImageParent.textContent = "";
    addHtmlToHeroImage();
  } catch (error) {
    console.log("Ops! There was an error!", error);
  }
  changeCssIfOrientationLandscape();

  function changeCssIfOrientationLandscape() {
    window.addEventListener("orientationchange", event => {
      if (
        event.target.screen.orientation.angle === 90 ||
        event.target.screen.orientation.angle === 270
      ) {
        heroImageParent.style.height = "600px";
      }
    });
  }

  function addHtmlToHeroImage() {
    const element = document.createElement("section");
    element.classList.add("flex", "flex-col");

    const heading = document.createElement("h1");
    heading.textContent = "Ready to play?";
    element.append(heading);

    const link = document.createElement("a");
    link.textContent = "Explore";
    link.href = "./games/";
    link.classList.add("cta-explore", "cta");
    element.append(link);

    heroImageParent.append(element);
  }
}
