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
      for (let i = 0; i < data.results.length; i++) {
        let movieEl = document.createElement("div");
        movieEl.textContent = data.results[i].title;
        console.log(data.results[i].title);
        containerEl.appendChild(movieEl);
      }
    });
}

now_playing();