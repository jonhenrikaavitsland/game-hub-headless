export function router() {
  switch (location.pathname) {
    case "/games/title/":
      // dp something
      break;
    case "/games/":
      // do something
      break;
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
      return import("../pages/home.js");
  }
}
