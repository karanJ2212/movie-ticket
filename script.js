const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
// const seats = document.querySelectorAll(".row .seat");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
const selectedSeats = JSON.parse(localStorage.getItem("seatindex"));
console.log(selectedSeats);
if (selectedSeats !== null && selectedSeats.length > 1) {
  seats.forEach((seat, index) => {
    if (selectedSeats.indexOf(index) > -1) {
      seat.classList.add("selected");
    }
  });
}
const selectedMovieIndex = JSON.parse(
  localStorage.getItem("selectedMovieInddex")
);
const selectedMovieValue = JSON.parse(
  localStorage.getItem("slectedMoviePrice")
);

if (selectedMovieIndex !== null && selectedMovieValue !== null) {
  movieSelect.value = selectedMovieValue;
  movieSelect.selectedIndex = selectedMovieIndex;
}

// const priceOfTicket = +movieSelect.value;
let priceOfTicket = +movieSelect.value;

const ticketPrice = +movieSelect.value;

const numberOfSeats = () => {
  const seatscount = document.querySelectorAll(".row .seat.selected");
  return seatscount.length;
};
// const populateSeatData = () => {
//   const selectedSeats = JSON.parse(localStorage.getItem("seatindex"));
//   console.log(selectedSeats);
//   if (selectedSeats !== null && selectedSeats.length > 1) {
//     seats.forEach((seat, index) => {
//       if (selectedSeats.indexOf(index) > -1) {
//         seat.classList.add("selected");
//       }
//     });
//   }
// };

//event listener for selecting movie

movieSelect.addEventListener("change", (e) => {
  priceOfTicket = +e.target.value;
  const movieIndex = +e.target.selectedIndex;
  localStorage.setItem("selectedMovieInddex", movieIndex);
  localStorage.setItem("slectedMoviePrice", priceOfTicket);
});

//selected seat class change on click
seats.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("seat")) {
      if (!e.currentTarget.classList.contains("occupied")) {
        e.currentTarget.classList.toggle("selected");
      }
      count.innerText = numberOfSeats();
      total.innerText = numberOfSeats() * priceOfTicket;
    }
    //calculating index of seats that are selected

    const seatscount = document.querySelectorAll(".row .seat.selected");

    const indexOfSeats = [...seatscount].map((seat) => {
      return [...seats].indexOf(seat);
    });

    localStorage.setItem("seatindex", JSON.stringify(indexOfSeats));
  });
});

//updating the count and total price

count.innerText = numberOfSeats();
total.innerText = numberOfSeats() * priceOfTicket;
