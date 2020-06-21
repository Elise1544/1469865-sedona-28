var foundHotel = document.querySelector(".reservation-button__found-hotel");
var mainForm = document.querySelector(".main-form");
var checkInDate = document.querySelector(".check-in");
var adult = document.querySelector(".adult");
var checkOutDate = document.querySelector(".check-out-date");

foundHotel.addEventListener("click", function (evt) {
  evt.preventDefault();
  mainForm.classList.toggle("modal-show");
  checkInDate.focus();
  mainForm.classList.remove("modal-error");
});

mainForm.addEventListener("submit" , function (evt) {
  if (!checkInDate.value || !adult.value) {
    evt.preventDefault();
    mainForm.classList.remove("modal-error");
    mainForm.offsetWidth = mainForm.offsetWidth;
    mainForm.classList.add("modal-error");
  }
})
