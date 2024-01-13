import { changeTitleInBreadcrumb } from "../render/Breadcrumb/changeTitleInBreadcrumb.js";
import { changeTitleTag } from "../render/Title/changeTitleTag.js";
import { title } from "../data/fetch/fetchTitle.js";
import { renderTitleHeading } from "../render/Title/renderTitleHeader.js";
import { clearReleaseList } from "../render/clearParentHtml.js";
import { fetchDataGET } from "../data/api/fetchData.js";
import {
  consumerKeyReviews,
  consumerSecretReviews,
  host,
} from "../data/api/constants.js";
import { renderTitleGridParent } from "../render/Title/renderTitleGrid.js";

createTitle();

async function createTitle() {
  try {
    const parent = document.querySelector(".title-wrap");
    const reviews = await fetchDataGET(
      host + "/wp-json/wc/v2/products/" + `${title.id}` + "/reviews/",
      consumerKeyReviews,
      consumerSecretReviews
    );

    changeTitleInBreadcrumb(title);
    changeTitleTag(title);
    clearReleaseList(parent);
    renderTitleHeading(title, parent, reviews);
    renderTitleGridParent(parent, title, reviews);
    console.log(title);
    console.log(reviews);
  } catch (error) {
    console.log("An error occurred", error);
  }
}
