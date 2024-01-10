export function changeTitleInBreadcrumb(title) {
  const parent = document.querySelector(".title-name");
  parent.textContent = title.name;
}
