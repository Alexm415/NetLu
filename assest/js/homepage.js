let tmdbApiKey = "aeaff9aa6a2dfe6e52db45e5c6947320";
let urlTopTMDB = `https://api.themoviedb.org/3/movie/top_rated?api_key=${tmdbApiKey}`;
let urlPlayingTMDB = `https://api.themoviedb.org/3/movie/now_playing?api_key=${tmdbApiKey}`;
let containerEl = document.getElementById('container');

function top_rated() {
  fetch(urlTopTMDB)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

function now_playing() {
    fetch(urlPlayingTMDB)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

let ratedList = JSON.parse(top_rated());
let playingList = JSON.parse(now_playing());

for (let i = 0; i < ratedList.length; i++){
    let movieEl = document.createElement('div');
    movieEl.textContent = ratedList[i].title;
    containerEl.appendChild(movieEl);
}