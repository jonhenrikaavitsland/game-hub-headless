import { mediaAllPages } from "./data/fetch/fetchMedia.js";
import { menus } from "./menu/menu.js";
import { router } from "./router/router.js";
import { addAnimationToIcons } from "./icons/animatedIcons.js";

mediaAllPages();
menus();
router();
addAnimationToIcons();
