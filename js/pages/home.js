import { renderHeroImage } from "../render/home/renderHeroImage.js";
import { renderDecisionHelp } from "../render/home/renderdecisionHelp.js";
import { makeDecisionLink } from "../redirect/home/redirectDecisionHelp.js";

createHome();

function createHome() {
  renderHeroImage();
  renderDecisionHelp();
  makeDecisionLink();
}

