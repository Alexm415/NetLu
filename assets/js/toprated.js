let containerEl = document.getElementById("container-top");
let tmdbApiKey = "aeaff9aa6a2dfe6e52db45e5c6947320";
let urlTopTMDB = `https://api.themoviedb.org/3/movie/top_rated?api_key=${tmdbApiKey}`;
let urlPlayingTMDB = `https://api.themoviedb.org/3/movie/now_playing?api_key=${tmdbApiKey}`;
/*const options = { method: "GET", headers: { accept: "application/json" } };
function img() {
  // Array of image filenames
const imageFilenames = ['0.jpg', 'image2.png', 'image3.png'];

// Reference to the container where images will be appended
const imageContainer = document.getElementById('image-container');

// Loop through the array and create image elements
for (let i = 0; i < imageFilenames.length; i++) {
    // Create a new image element
    const img = document.createElement('img');
    
    // Set the source of the image
    img.src = `./assets/images/topRated/${imageFilenames[i]}`;
    
    // Set an alt attribute for accessibility
    img.alt = `Image ${i + 1}`;
    
    // Append the image to the container
    imageContainer.appendChild(img);
}
}*/
function top_rated() {
  fetch(urlTopTMDB)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      for (let i = 0; i < data.results.length; i++) {
        let movieEl = document.createElement("div");
        imgEL = document.createElement("img");
        let releaseDate = document.createElement("h2");
        movieEl.textContent = data.results[i].title;
        imgEL.setAttribute(
          "scr",
          `https://image.tmdb.org/t/p/original${data.results[i].poster_path}`
        );
        releaseDate = data.results[i].release_date;
        console.log(data.results[i].title);
        containerEl.appendChild(movieEl);
        containerEl.appendChild(imgEL);
        containerEl.append(releaseDate);
      }
    });
}
top_rated();
img();
