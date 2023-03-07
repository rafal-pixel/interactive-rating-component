const interactiveRating = document.querySelector(".interactive-rating");
const ratingForm = document.querySelector(".rating-form");
const successForm = document.querySelector(".success-form");
const yourRating = document.querySelector(".your-rating");

const setAvcitveNumber = (element) => {
  const chooseTtem = document.querySelectorAll(".rating-form__choose-item");
  chooseTtem.forEach((el) => {
    el.classList.remove("active");
  });
  element.classList.add("active");
};

if (interactiveRating) {
  interactiveRating.addEventListener("click", (e) => {
    if (e.target.classList.contains("rating-form__choose-item")) {
      setAvcitveNumber(e.target);
    }
    if (e.target.classList.contains("btn")) {
      e.preventDefault();
      const checked = document.querySelector("input[name=rating]:checked");
      if (checked) {
        ratingForm.style.display = "none";
        yourRating.innerHTML = checked.value;
        successForm.style.display = "block";
      }
    }
  });
}
