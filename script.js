const plusBtn = document.querySelectorAll("img.plus");
const minusBtn = document.querySelectorAll("img.minus");

plusBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    let quesContainer = btn.parentElement.parentElement;
    quesContainer.classList.add("active");
  });
});

minusBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    let quesContainer = btn.parentElement.parentElement;
    quesContainer.classList.remove("active");
  });
});
