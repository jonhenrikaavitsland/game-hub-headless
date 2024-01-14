import { mediaAllPages } from "./data/fetch/fetchMedia.js";
import { menus } from "./menu/menu.js";
import { router } from "./router/router.js";
import { addAnimationToIcons } from "./icons/animatedIcons.js";
import { renderLogo } from "./render/renderLogo.js";
import "../js/search/search.js";

mediaAllPages();
menus();
router(); //  page specific code, see router.js
addAnimationToIcons();
renderLogo();