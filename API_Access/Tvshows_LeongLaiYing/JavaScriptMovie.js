var genres = ['Comedy', 'Crime', 'Kids', 'Romance', "Thriller"];
function initialMovies(e) {


    for (let i = 0; i < genres.length; i++) {
        var moviesDiv = document.createElement("div");

        var titleGenre = document.createElement("p");
        titleGenre.textContent = genres[i];
        moviesDiv.appendChild(titleGenre);

        moviesDiv.id = genres[i];
        moviesDiv.classList.add("regionView");
        document.getElementById("div1").appendChild(moviesDiv);
        callMoviesByGenres(genres[i],"");
    }


}

function callMoviesByGenres(genresName,searchText) {
    
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {

        if (http.readyState === 4) {
            var genresJSON = JSON.parse(http.responseText);

// ************ sorting ********************************
            genresJSON.sort(function (a, b) {
                if (a.show.rating.average > b.show.rating.average) { return -1 } else {return 1}
                });
//******************************

        //    console.log(genresJSON);
            if (searchText === "") {
                genMovies(genresJSON, genresName);  
           } else {
                genMoreMovies(genresJSON, genresName, searchText);  
            }
               
        }
    }
   if (searchText === "") {
        http.open("GET", "https://api.tvmaze.com/search/shows?q=" + genresName);
    } else {
       http.open("GET", "https://api.tvmaze.com/search/shows?q=" + searchText);
    }

    http.send();
}

function genMovies(genresJSON, genresName) {

    if (genresJSON.length > 0) {
    
    for (let j = 0; j < 5; j++) {
        //  **** create the movie div ****************************
        var movieObj = genresJSON[j];
      
        var movie = document.createElement("div");
        movie.classList.add("betterView");

        var movieName = document.createElement("b");
        movieName.innerHTML = movieObj.show.name;

        var movieScore = document.createElement("p");
        movieScore.innerHTML = "Movie Score: " + movieObj.score;

        var movieRating = document.createElement("p");
        movieRating.innerHTML = "Rating: " + movieObj.show.rating.average;

        var im = document.createElement("img");
        if (movieObj.show.image === null) {
            im.src = "/images/NoImagefound.png";        
        } else {

            im.src = movieObj.show.image.medium;
        }
        
        im.alt = "/images/NoImagefound.png";


        movie.appendChild(im);
        movie.appendChild(movieName);
        movie.appendChild(movieScore);
        movie.appendChild(movieRating);
        
        // ************ display details
        movie.addEventListener("click", function () {

            document.getElementById("div1").style.display = 'none';
            singleMovie(genresJSON[j]);

        });

        // ****************************************88
        document.getElementById(genresName).appendChild(movie);
    }


        var seemore = document.createElement('i');
        seemore.innerHTML = "See More";

        seemore.addEventListener('click', function () {
            console.log("Genre::", genresName);
            console.log("shows::", genresJSON);
            genMoreMovies(genresJSON, genresName, "");
        });
        document.getElementById(genresName).appendChild(seemore)
        
    }
}
function genMoreMovies(s, g, searchText) {
    document.getElementById("movieDiv").style.display = 'none';
    document.getElementById("div1").style.display = 'none';
    var genreTitle = document.createElement("h1");
    if (searchText.length < 1 ) {
        var Parent = "genreDiv";
        genreTitle.innerHTML = g;
        document.getElementById("searchDiv").style.display = 'none';
    } else {
        document.getElementById("genreDiv").style.display = 'none';
        var Parent = "searchDiv";
        genreTitle.innerHTML = searchText;
    }
    
    document.getElementById(Parent).appendChild(genreTitle)
   
    for (let i = 0; i <= s.length - 1; i++) {

  
        var movie = document.createElement("div");
        movie.classList.add("betterView");

        var movieName = document.createElement("b");
        movieName.innerHTML = s[i].show.name;

        var movieScore = document.createElement("p");
        movieScore.innerHTML = "Movie Score: " + s[i].score;

        var movieRating = document.createElement("p");
        movieRating.innerHTML = "Rating: " + s[i].show.rating.average;

        var im = document.createElement("img");
        if (s[i].show.image === null) {
            im.src = "/images/NoImagefound.png";
        } else {

            im.src = s[i].show.image.medium;

        }

        im.alt = "/images/NoImagefound.png";

        movie.appendChild(im);
        movie.appendChild(movieName);
        movie.appendChild(movieScore);
        movie.appendChild(movieRating);

        // ************ display details
        movie.addEventListener("click", function () {

            singleMovie(s[i]);

        });

        // ****************************************88
        document.getElementById(Parent).appendChild(movie);
    }
}

function singleMovie(s) {
    document.getElementById("div1").style.display = 'none';
    document.getElementById("genreDiv").style.display = 'none';
    document.getElementById("searchDiv").style.display = 'none';
    document.getElementById("movieDiv").style.display = 'block';
    document.getElementById("movieDiv").innerHTML = "";
   
    

    var movieTitle = document.createElement("h1");
    movieTitle.innerHTML = s.show.name;

    var movieSummary = document.createElement("p");
    movieSummary.innerHTML = s.show.summary;

    var movieLanguage = document.createElement("p");
    movieLanguage.innerHTML = s.show.language;

    var movieScore = document.createElement("p");
    movieScore.innerHTML = "Movie Score: " + s.score;
    var movieRating = document.createElement("p");
    movieRating.innerHTML = "Rating: " + s.show.rating.average;

    var movie = document.createElement("div");
    movie.className = "movie";

    var movieText = document.createElement("div");
    movieText.className = "movieText";

    var movieImage = document.createElement("div");
    movieImage.className = "movieImage";

    var im = document.createElement("img");
    im.width = "450";
    im.height = "600";
    if (s.show.image === null) {
        im.src = "/images/NoImagefound.png";
    } else {

        im.src = s.show.image.medium;

    }

    im.alt = "/images/NoImagefound.png";

    movieImage.appendChild(im);
    movieText.appendChild(movieTitle);
    movieText.appendChild(movieSummary);
    movieText.appendChild(movieLanguage);
    movieText.appendChild(movieScore);
    movieText.appendChild(movieRating);

    movie.appendChild(movieText);
    movie.appendChild(movieImage)
    document.getElementById("movieDiv").appendChild(movie);
    
}
function searchBox(e) {
    document.getElementById("searchDiv").style.display = 'block';
    document.getElementById("movieDiv").style.display = 'none';
    document.getElementById("searchDiv").innerHTML = "";


    var searchText = document.getElementById("searchBox").value;
    var genresName = "";
    callMoviesByGenres(genresName, searchText);
}