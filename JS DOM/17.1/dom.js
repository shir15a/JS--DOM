const div = document.querySelector("p");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");

plus.addEventListener("click", () => {
  let fontSize = parseInt(window.getComputedStyle(div).fontSize);
  fontSize += 10;
  if (fontSize < 100) {
    div.style.fontSize = `${fontSize}px`;
  }
});

minus.addEventListener("click", () => {
  let fontSize = parseInt(window.getComputedStyle(div).fontSize);
  fontSize -= 10;
  if (fontSize > 6) {
    div.style.fontSize = `${fontSize}px`;
  }
});
