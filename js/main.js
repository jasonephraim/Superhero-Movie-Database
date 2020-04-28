let moviesList = document.getElementById("moviesList");

let request = new XMLHttpRequest();

request.onload = function () {
  // parse the text as JavaScript Object
  let result = JSON.parse(this.responseText);

  let movies = result.Search.map((movie) => {
    return `<div class="card bg-dark text-white" style="max-width: 18rem;">
                <img class="card-img" src="${movie.Poster}Card image" alt="Card image">
                <div class="card-img-overlay">    
                    <div class="card-header">${movie.Year}</div>
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <p class="card-text"></p>
                    </div>
                    <div class="card-footer"></div>
                </div>
            </div>`;
  });

  // converting liItems array to a string and then assigning to the ul
  moviesList.innerHTML = movies.join("");

  console.log(movies);
};

request.open("GET", "http://www.omdbapi.com/?s=batman&apikey=c76fee64");
request.send();
