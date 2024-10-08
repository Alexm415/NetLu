let containerEl = document.getElementById("container-top");
let rapidKey = "895fa40f65mshc659b4c0abd47f9p1a7010jsncbec4c192322";
let urlRapid = `https://movies-tv-shows-database.p.rapidapi.com/?page=1`;
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "895fa40f65mshc659b4c0abd47f9p1a7010jsncbec4c192322",
    "x-rapidapi-host": "movies-tv-shows-database.p.rapidapi.com",
    Type: "get-upcoming-movies",
  },
};

function top_rated() {
  fetch(urlRapid, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      for (let i = 0; i < data.movie_results.length; i++) {
        let card = document.createElement("div");
        card.classList.add("card", "cell", "is-col-min-8");
        // card image
        let cardImg = document.createElement("div");
        let movieEl = document.createElement("div");
        // let imgEL = document.createElement("img");
        let releaseDate = document.createElement("h2");
        movieEl.textContent = data.movie_results[i].title;
        movieEl.classList.add("mTitle", "overflow");
        cardImg.classList.add("card-image", "cardz");
        let figure = document.createElement("figure");
        figure.classList.add("image", "is-3by4");
        containerEl.appendChild(card);
        card.appendChild(movieEl);
        // figure.appendChild(imgEL);
        cardImg.appendChild(figure);
        card.appendChild(cardImg);

        // imgEL.src = data.results[i].poster_path;
        releaseDate = data.movie_results[i].year;
        console.log(data.movie_results[i].title);
        let urlImg = `https://movies-tv-shows-database.p.rapidapi.com/?movieid=${data.movie_results[i].imdb_id}`;
        const optionsI = {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "895fa40f65mshc659b4c0abd47f9p1a7010jsncbec4c192322",
            "x-rapidapi-host": "movies-tv-shows-database.p.rapidapi.com",
            Type: "get-movies-images-by-imdb",
          },
        };

        fetch(urlImg, optionsI)
          .then(function (response1) {
            return response1.json();
          })
          .then(function (data1) {
            console.log(data1);
            let imgEL = document.createElement("img");
            imgEL.src = data1.poster;
            figure.appendChild(imgEL);
          });

        // containerEl.appendChild(imgEL);
        card.append(releaseDate);
        
        const buttonEl = document.querySelector("#backButton"); 

buttonEl.addEventListener("click", function () {
  window.location = "./index.html";
});
      }
    });
}

top_rated();
