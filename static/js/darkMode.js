document.getElementById("btnPageMode").addEventListener("click", (event) => {
  let btnPageMode = event.target;
  let body = document.querySelector("body");
  if (body.classList.contains("body--dark")) {
    body.classList.remove("body--dark");
    document.querySelector(".header").classList.remove("header--dark");
    document.querySelector(".section").classList.remove("section--dark");
    document.querySelector(".footer").classList.remove("footer--dark");
    document
      .querySelector(".btn__mode__page")
      .classList.remove("btn__mode__page--dark");
      document
      .querySelector(".btn__icon__page-mode")
      .classList.replace("fa-sun", "fa-moon");
    } else {
      body.classList.add("body--dark");
      document.querySelector(".header").classList.add("header--dark");
      document.querySelector(".section").classList.add("section--dark");
      document.querySelector(".footer").classList.add("footer--dark");
      document
      .querySelector(".btn__mode__page")
      .classList.add("btn__mode__page--dark");
      document
      .querySelector(".btn__icon__page-mode")
      .classList.replace("fa-moon", "fa-sun");
  }
});
