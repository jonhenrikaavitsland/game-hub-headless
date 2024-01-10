export function router() {
  switch (location.pathname) {
    case "/games/title/":
      return import("../pages/title.js");
    case "/games/":
      return import("../pages/games.js");
    case "/checkout/success/":
      // do something
      break;
    case "/checkout/":
      // do something
      break;
    case "/about/":
      // do something
      break;
    case "/contact/":
      // do something
      break;
    case "/account/":
      // do something
      break;
    case "/":
    case "/index.html":
      return import("../pages/home.js");
  }
}
