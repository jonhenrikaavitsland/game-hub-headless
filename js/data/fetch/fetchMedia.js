import { urlMedia } from "../api/constants.js";
import { fetchData } from "../api/fetchData.js";

export const mediaContents = await fetchMedia(urlMedia);

export let logo;
export let heroImage;
export let advertImage;

for (let i = 0; i < mediaContents.length; i++) {
  if (mediaContents[i].id === 36) logo = mediaContents[i];
  if (mediaContents[i].id === 52) heroImage = mediaContents[i];
  if (mediaContents[i].id === 54) advertImage = mediaContents[i];
}

export async function mediaAllPages() {
  const favIcon = document.querySelector(".fav");

  try {
    favIcon.setAttribute("href", logo.source_url);
  } catch (error) {
    console.log("Ops! Something went wrong!", error);
  }
}

export async function fetchMedia(url) {
  const content = await fetchData(url);
  return content;
}
