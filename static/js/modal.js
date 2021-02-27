document.getElementById("btnCloseModal").addEventListener("click", (event) => {
  let modal = document.querySelector(".modal");

  let overlay = document.querySelector(".overlay");
//   overlay.style.animation = "modalOut 1s forwards";
  overlay.classList.add("deactivate");
});
