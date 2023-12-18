export function makeDecisionLink() {
  const parent = document.querySelector(".decision-help section");

  parent.addEventListener("click", function () {
    location.href = "./games/";
  });
}
