import { mediaAllPages } from "./data/fetch/fetchMedia.js";
import { menus } from "./menu/menu.js";
import { router } from "./router/router.js";
import { addAnimationToIcons } from "./icons/animatedIcons.js";
import { renderLogo } from "./render/renderLogo.js";

mediaAllPages();
menus();
router();
addAnimationToIcons();
renderLogo();

// solve wave error on carousel
// write js to make the carousel change game on time and on click (the four circles)

// On the random game picker, push the heading down a little bit with padding.