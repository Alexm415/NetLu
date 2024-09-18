const toprated = document.querySelector(".toprated");
const featured = document.querySelector(".featured");
const theater = document.querySelector(".in-theater");

toprated.addEventListener("click", function (event) {
  event.preventDefault();
  window.location = "toprated.html";
});

featured.addEventListener("click", function (event) {
  event.preventDefault();
  window.location = "featured.html";
});
theater.addEventListener("click", function (event) {
  event.preventDefault();
  window.location = "intheaters.html";
});
