import { fetchData } from "../api/fetchData.js";
import { urlProducts } from "../api/constants.js";

export const products = await fetchData(urlProducts);
