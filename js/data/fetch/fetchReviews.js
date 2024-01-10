import {
  consumerKeyReviews,
  consumerSecretReviews,
  urlReviews,
} from "../api/constants.js";
import { fetchDataGET } from "../api/fetchData.js";

export const reviews = await fetchDataGET(
  urlReviews,
  consumerKeyReviews,
  consumerSecretReviews
);
console.log(reviews);
