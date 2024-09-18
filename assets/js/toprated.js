const toprated = document.querySelector(".toprated");
const featured = document.querySelector(".featured");
const theater = document.querySelector(".in-theater");
let tmdbApiKey = "aeaff9aa6a2dfe6e52db45e5c6947320";
let urlTopTMDB = `https://api.themoviedb.org/3/movie/top_rated?api_key=${tmdbApiKey}`;
let urlPlayingTMDB = `https://api.themoviedb.org/3/movie/now_playing?api_key=${tmdbApiKey}`;

function top_rated() {
  fetch(urlTopTMDB)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
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
