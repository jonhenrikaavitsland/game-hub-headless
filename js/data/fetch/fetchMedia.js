import { urlMedia } from "../api/constants.js";
import { fetchData } from "../api/fetchData.js";

export const mediaContents = await fetchMedia(urlMedia);
console.log(mediaContents);

export async function mediaAllPages() {
  const logo = document.querySelector(".logo");
  const logoHeader = document.querySelector(".logo-desktop");
  const favIcon = document.querySelector(".fav");

  const mediaLogo = mediaContents[2].source_url;

  try {
    logo.src = mediaLogo;
    logoHeader.src = mediaLogo;
    favIcon.setAttribute("href", mediaLogo);
  } catch (error) {
    console.log("Ops! Something went wrong!", error);
  }
}

export async function fetchMedia(url) {
  const content = await fetchData(url);
  return content;
}
