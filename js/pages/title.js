import { endpointProducts, host } from "../data/api/constants.js";
import { fetchData } from "../data/api/fetchData.js";
import { getId } from "../data/api/getId.js";

createTitle();

async function createTitle() {
  try {
    const id = getId();
    const newUrl = host + endpointProducts + id;
    const title = await fetchData(newUrl);
    console.log(title);
    changeTitleInBreadcrumb(title);
  } catch (error) {
    console.log("An error occurred", error);
  }
}

export function changeTitleInBreadcrumb(title) {
  const parent = document.querySelector(".title-name");
  parent.textContent = title.name;
}

export function changeTitleTag(title) {
  const titleTag = document.querySelector("title") {
    titleTag.textContent = `${title.name} | Game Hub`
  }
}
