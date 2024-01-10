export function changeTitleTag(title) {
  const titleTag = document.querySelector("title");
  titleTag.textContent = `${title.name} | Game Hub`;
}
