import { renderHeroImage } from "../render/home/renderHeroImage.js";
import { renderReleasesHome } from "../render/home/renderReleasesHome.js";
import {
  headingContainer,
  changeHeadingHome,
} from "../functionality/changeHeadingHome.js";
import { renderAdvertImage } from "../render/home/renderAdvert.js";

createHome();

function createHome() {
  renderHeroImage();
  renderReleasesHome();
  headingContainer.addEventListener("click", changeHeadingHome);
  renderAdvertImage();
}

