export function hamburgerMenu() {
  const menuIcon = document.querySelector(".hamburger-wrap");
  const menuMobile = document.querySelector(".mobile-navigation");
  const overlay = document.querySelector(".overlay");
  const menuCloseIcon = document.querySelector(".close-btn-wrap");

  menuIcon.addEventListener("click", openMenu);
  menuCloseIcon.addEventListener("click", closeMenu);
  document.addEventListener("keydown", closeMenuEsc);
  overlay.addEventListener("click", closeMenu);

  function openMenu() {
    menuMobile.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }

  function closeMenu() {
    menuMobile.classList.add("hidden");
    overlay.classList.add("hidden");
  }

  function closeMenuEsc(e) {
    if (e.key === "Escape") {
      closeMenu();
    }
  }
}
