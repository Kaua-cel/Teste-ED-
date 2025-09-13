const btnDropDown = document.querySelector(".drop-down-btn");
const boxOptions = document.querySelector(".box-options");

btnDropDown.addEventListener("click", () => {
  console.log("tetse");
  boxOptions.style.display =
    boxOptions.style.display === "flex" ? "none" : "flex";
});
