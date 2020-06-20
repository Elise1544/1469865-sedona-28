var foundHotel = document.querySelector(".reservation-button__found-hotel");
var mainForm = document.querySelector(".main-form");

foundHotel.addEventListener("click", function (evt) {
  evt.preventDefault();
  mainForm.classList.toggle("modal-show");
});
