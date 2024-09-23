const searchBtn = document.getElementById("btn-search");
const modalBg = document.querySelector(".modal-background");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const cancelBtn = document.getElementById("btn-cancel");
const submitBtn = document.getElementById("btn-submit");
const selectedGenre = document.getElementById("select-genre");
const containerEl = document.getElementById("container");

// activate modal on button click
searchBtn.addEventListener("click", function () {
  modal.classList.add("is-active");
});

// deactivate modal
modalBg.addEventListener("click", function () {
  modal.classList.remove("is-active");
});
// deactivate modal
modalClose.addEventListener("click", function () {
  modal.classList.remove("is-active");
});
// deactivate modal
cancelBtn.addEventListener("click", function () {
  modal.classList.remove("is-active");
});

// form submit handler
submitBtn.addEventListener("click", function () {
  let genreId = selectedGenre.options[selectedGenre.selectedIndex].value;
  let url = `https://api.themoviedb.org/3/discover/movie?&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}&api_key=aeaff9aa6a2dfe6e52db45e5c6947320`;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.results);
      containerEl.textContent = "";
      // create a card for each movie
      for (let i = 0; i < 5; i++) {
        // card container
        let card = document.createElement("div");
        card.classList.add("card", "cell");
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
  modal.classList.remove("is-active");
});
