const container = document.querySelector(".container");
// const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const seats = document.querySelectorAll(".row .seat");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

const ticketPrice = +movieSelect.value;

// console.log(ticketPrice);
seats.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (!element.classList.contains("occupied")) {
      e.currentTarget.getElementsByClassName.
    }
  });
});
// container.addEventListener("click", () => {
//   console.log("working");
//   if (
//     e.target.classList.contains("seat") &&
//     !e.target.classList.contains("occupied")
//   ) {
//     console.log("working");
//   }
// });
