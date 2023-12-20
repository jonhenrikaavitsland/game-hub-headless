import { renderHeroImage } from "../render/home/renderHeroImage.js";
import { renderDecisionHelp } from "../render/home/renderdecisionHelp.js";
import { makeDecisionLink } from "../redirect/home/redirectDecisionHelp.js";
import { runCarousels } from "../render/home/renderCarousel.js";

createHome();

function createHome() {
  renderHeroImage();
  runCarousels();
  renderDecisionHelp();
  makeDecisionLink();
  // reviews perhaps we can make a thing that displays random reviews or latest reviews? we might have to reenter the reviews if we can not change dates.
  // christmas sale advertisement
}



