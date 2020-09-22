const hideButton = document.getElementById("hide-modal");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

const darkModeButton = document.getElementById("dark-mode-button");

hideButton.addEventListener("click", (event) => {
  modal.style.animation = "modalOut .8s forwards";
  overlay.classList.remove("active");
  // overlay.classList.add('active')
});
overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    modal.style.animation = "modalOut .8s forwards";
    overlay.classList.remove("active");
  }
});

darkModeButton.addEventListener("click", (event) => {
  if (darkModeButton.classList.contains("active")) {
    darkModeButton.classList.remove("active","dark-mode");
    document.getElementsByTagName("header")[0].classList.remove("dark-mode");
    document.getElementsByTagName("footer")[0].classList.remove("dark-mode");
    document.getElementsByTagName("body")[0].classList.remove("dark-mode");
    document.getElementsByClassName("hero")[0].classList.remove("dark-mode");
  } else {
    darkModeButton.classList.add("active","dark-mode")
    document.getElementsByTagName("header")[0].classList.add("dark-mode");
    document.getElementsByTagName("footer")[0].classList.add("dark-mode");
    document.getElementsByTagName("body")[0].classList.add("dark-mode");
    document.getElementsByClassName("hero")[0].classList.add("dark-mode");
  }
});
