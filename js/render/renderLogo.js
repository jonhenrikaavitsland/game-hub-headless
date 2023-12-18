import { logo } from "./../data/fetch/fetchMedia.js";

export function renderLogo() {
  const logoContainerMobile = document.querySelector(".logo-container-mobile");
  const logoContainerDesktop = document.querySelector(
    ".logo-container-desktop"
  );

  try {
    logoContainerDesktop.innerHTML = "";
    createLogo(logoContainerDesktop);
    logoContainerMobile.innerHTML = "";
    createLogo(logoContainerMobile);
  } catch (error) {
    console.log("Ops! There was an error!", error);
  }

  function createLogo(parent) {
    const link = document.createElement("a");
    if (location.pathname === "/") {
      link.href = "#";
    } else {
      link.href = "/";
    }

    const element = document.createElement("img");
    element.src = `${logo.source_url}`;
    element.setAttribute("alt", logo.alt_text);
    link.appendChild(element);

    const span = document.createElement("span");
    span.textContent = "home";
    span.classList.add("visually-hidden");
    link.appendChild(span);

    parent.append(link);
  }
}
