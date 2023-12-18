export function addAnimationToIcons() {
  const hamburgerBtn = document.querySelector(".fa-bars");
  const hamburgerParent = document.querySelector(".hamburger-wrap");
  const searchBtn = document.querySelector(".fa-bullseye-arrow");
  const searchBtnParent = document.querySelector(".search-btn");
  const twitter = document.querySelector(".fa-x-twitter");
  const twParent = document.querySelector(".tw");
  const instagram = document.querySelector(".fa-instagram");
  const inParent = document.querySelector(".in");
  const facebook = document.querySelector(".fa-facebook");
  const fbParent = document.querySelector(".fb");
  const youtube = document.querySelector(".fa-youtube");
  const ytParent = document.querySelector(".yt");
  const github = document.querySelector(".fa-github");
  const ghParent = document.querySelector(".gh");
  const account = document.querySelector(".fa-user");
  const accParent = document.querySelector(".acc-wrap");
  const searchIcon = document.querySelector(".fa-magnifying-glass");
  const searchIconParent = document.querySelector(".magnifying-wrap");
  const cart = document.querySelector(".fa-cart-shopping-fast");
  const cartParent = document.querySelector(".cart-wrap");
  const closeBtn = document.querySelector(".fa-crosshairs-simple");
  const closeBtnParent = document.querySelector(".close-btn-wrap");

  animateIcon(hamburgerBtn, hamburgerParent);
  animateIcon(searchBtn, searchBtnParent);
  animateIcon(twitter, twParent);
  animateIcon(instagram, inParent);
  animateIcon(facebook, fbParent);
  animateIcon(youtube, ytParent);
  animateIcon(github, ghParent);
  animateIcon(account, accParent);
  animateIcon(searchIcon, searchIconParent);
  animateIcon(cart, cartParent);
  animateIcon(closeBtn, closeBtnParent);

  function animateIcon(icon, parent) {
    parent.onmouseover = event => {
      if (!icon.classList.contains("fa-bounce")) {
        icon.classList.add("fa-bounce");
      }
    };

    parent.onmouseleave = event => {
      if (icon.classList.contains("fa-bounce")) {
        icon.classList.remove("fa-bounce");
      }
    };

    parent.onclick = event => {
      icon.classList.remove("fa-bounce");
    };
  }
}