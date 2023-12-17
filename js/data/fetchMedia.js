import { urlMedia } from "./api/constants.js";
import { fetchData } from "./api/fetchData.js";

export const mediaContents = await fetchMedia(urlMedia);
console.log(mediaContents);

export async function mediaAllPages() {
  const logo = document.querySelector(".logo");

  try {
    logo.setAttribute("src", mediaContents[2].source_url);
  } catch (error) {
    console.log("Ops!, failed to load logo!", error);
  }
}

export async function fetchMedia(url) {
  const mediaContents = await fetchData(url);
  return mediaContents;
}
