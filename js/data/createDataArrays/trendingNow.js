export function filterTrendingNow(data) {
  const games = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].attributes[2].terms[0].name === "true") {
      games.push(data[i]);
    }
  }
  games.push(games[0]);
  return games;
}
