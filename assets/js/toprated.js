let containerEl = document.getElementById("container-top");
let tmdbApiKey = "aeaff9aa6a2dfe6e52db45e5c6947320";
let urlTopTMDB = `https://api.themoviedb.org/3/movie/top_rated?api_key=${tmdbApiKey}`;

function top_rated() {
  fetch(urlTopTMDB)
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
        cardImg.classList.add("card-image", "cardz");
        let figure = document.createElement("figure");
        figure.classList.add("image", "is-3by4");
        let img = document.createElement("img");
        img.setAttribute(
          "src",
          `https://image.tmdb.org/t/p/original${data.results[i].poster_path}`
        );
        figure.appendChild(img);
        cardImg.appendChild(figure);
        // card title
        let cardTitle = document.createElement("div");
        cardTitle.classList.add('mTitle', 'overflow');
        cardTitle.textContent = data.results[i].title;
        // card year
        let cardYear = document.createElement("div");
        cardYear.textContent = data.results[i].release_date.substring(0, 4);
        // card appends
        card.appendChild(cardTitle);
        card.appendChild(cardImg);
        card.appendChild(cardYear);
        containerEl.appendChild(card);
        
        const buttonEl = document.querySelector("#backButton"); 

buttonEl.addEventListener("click", function () {
  window.location = "./index.html";
});
      }
    });
}
top_rated();
