import { urlMedia } from "../api/constants.js";
import { fetchData } from "../api/fetchData.js";

const mediaContents = await fetchMedia(urlMedia);
console.log(mediaContents);

export let logo;
export let heroImage;

for (let i = 0; i < mediaContents.length; i++) {
  if (mediaContents[i].id === 36) logo = mediaContents[i];
  if (mediaContents[i].id === 52) heroImage = mediaContents[i];
}

console.log(heroImage);

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
