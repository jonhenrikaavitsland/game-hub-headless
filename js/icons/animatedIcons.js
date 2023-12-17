export function addAnimationToIcons() {
  const hamburgerBtn = document.querySelector(".fa-bars");
  const searchBtn = document.querySelector(".fa-bullseye-arrow");
  const twitter = document.querySelector(".fa-x-twitter");
  const instagram = document.querySelector(".fa-instagram");
  const facebook = document.querySelector(".fa-facebook");
  const youtube = document.querySelector(".fa-youtube");
  const github = document.querySelector(".fa-github");
  const account = document.querySelector(".fa-user");
  const searchIcon = document.querySelector(".fa-magnifying-glass");
  const cart = document.querySelector(".fa-cart-shopping-fast");

  animateIcon(hamburgerBtn);
  animateIcon(searchBtn);
  animateIcon(twitter);
  animateIcon(instagram);
  animateIcon(facebook);
  animateIcon(youtube);
  animateIcon(github);
  animateIcon(account);
  animateIcon(searchIcon);
  animateIcon(cart);

  function animateIcon(icon) {
    icon.onmouseover = event => {
      if (!icon.classList.contains("fa-bounce")) {
        icon.classList.add("fa-bounce");
      }
    };

    icon.onmouseleave = event => {
      if (icon.classList.contains("fa-bounce")) {
        icon.classList.remove("fa-bounce");
      }
    };
  }
}
