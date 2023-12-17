export function secondaryMenu() {
  const searchIcon = document.querySelector(".mobile-srch-wrap");
  const searchContainer = document.querySelector(".mobile-srch-box");

  searchIcon.addEventListener("click", searchBox);
  document.addEventListener("keydown", closeMenuEsc);

  function searchBox() {
    if (searchContainer.classList.contains("hidden")) {
      searchContainer.classList.remove("hidden");
    } else {
      closeSearchBox();
    }
  }

  function closeSearchBox() {
    searchContainer.classList.add("hidden");
  }

  function closeMenuEsc(e) {
    if (e.key === "Escape") {
      closeSearchBox();
    }
  }
}

