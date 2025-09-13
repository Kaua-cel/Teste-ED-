const btnDropDown = document.querySelector(".drop-down-btn");
const boxOptions = document.querySelector(".box-options");

const exclamationIcon = document.querySelector(".exclamation-icon");
const glossaryBox = document.querySelector(".glossary-box");

const lightBox = document.createElement("div");
lightBox.id = "light-box";
document.body.appendChild(lightBox);
const body = document.querySelector("body");

btnDropDown.addEventListener("click", () => {
  boxOptions.style.display =
    boxOptions.style.display === "flex" ? "none" : "flex";
});

exclamationIcon.addEventListener("click", () => {
  glossaryBox.style.display =
    glossaryBox.style.display === "block" ? "none" : "block";
});

const waterCycleImg = document.querySelector(".water-cycle");
waterCycleImg.addEventListener("click", () => {
  lightBox.classList.add("active");
  body.classList.add("bodyActive");

  const img = document.createElement("img");
  img.src = waterCycleImg.src;

  while (lightBox.firstChild) {
    lightBox.removeChild(lightBox.firstChild);
  }
  lightBox.appendChild(img);
});

lightBox.addEventListener("click", (e) => {
  if (e.target === e.currentTarget || e.target !== e.currentTarget) {
    lightBox.classList.remove("active");
    body.classList.remove("bodyActive");
  }
});
