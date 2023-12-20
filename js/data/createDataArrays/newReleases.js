export function filterNewReleases(data) {
  const games = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].attributes[1].terms[0].name >= 2008) {
      games.push(data[i]);
    }
  }
  games.shift();
  return games;
}
