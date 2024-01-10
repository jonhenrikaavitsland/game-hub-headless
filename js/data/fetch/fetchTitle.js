import { host, endpointProducts } from "../api/constants.js";
import { getId } from "../api/getId.js";
import { fetchData } from "../api/fetchData.js";

const id = getId();
const newUrl = host + endpointProducts + id;
export const title = await fetchData(newUrl);
