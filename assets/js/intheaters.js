let tmdbApiKey = "aeaff9aa6a2dfe6e52db45e5c6947320";
let urlTopTMDB = `https://api.themoviedb.org/3/movie/top_rated?api_key=${tmdbApiKey}`;
let urlPlayingTMDB = `https://api.themoviedb.org/3/movie/now_playing?api_key=${tmdbApiKey}`;
let containerEl = document.getElementById("container-playing");

function now_playing() {
  fetch(urlPlayingTMDB)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (let i = 0; i < 20; i++) {
        // card container
        let card = document.createElement("div");
        card.classList.add("card", "cell", "is-col-min-8");
        // card image
        let cardImg = document.createElement("div");
        cardImg.classList.add("card-image");
        let figure = document.createElement("figure");
        figure.classList.add("image", "is-3by4");
        let img = document.createElement("img");
        img.setAttribute(
          "src",
          `https://image.tmdb.org/t/p/original${data.results[i].poster_path}`
        );
        figure.appendChild(img);
        cardImg.appendChild(figure);
        card.appendChild(cardImg);
        containerEl.appendChild(card);
      }
    });
}

now_playing();
