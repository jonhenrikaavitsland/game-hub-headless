export function filterTitles(data) {
  const titles = [];
  for (let i = 0; i < data.length; i++) {
    titles.push(data[i]);
  }
  titles.push(data[0]); // Adds extra titles to make 12 to improve look of the page.
  titles.push(data[1]);
  return titles;
}
