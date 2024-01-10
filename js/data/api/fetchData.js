export async function fetchData(url) {
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

export async function fetchDataGET(url, consumerKey, consumerSecret) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: "Basic " + btoa(`${consumerKey}:${consumerSecret}`),
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
}