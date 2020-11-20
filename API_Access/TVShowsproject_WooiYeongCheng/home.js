var types = ['comedy', 'fantasy', 'Drama', 'romance', 'thriller', 'Actions'];
for (let i = 0; i <= types.length - 1; i++)
{
    getShows(types[i])
}



function getShows(genre)
{
    var http = new XMLHttpRequest();
    http.open("GET", "https://api.tvmaze.com/search/shows?q=" + genre);
    http.send();
    http.onreadystatechange = function ()
    {
        if (http.readyState === 4) {
            let shows = JSON.parse(http.response);
            console.dir(shows)
            for (let i = 0; i <= 4; i++) {
                var newShow = document.createElement("div");
                newShow.innerHTML = "<b>Movie Name:</b>" + shows[i].show.name;
                var showRuntime = document.createElement("div");
                showRuntime.innerHTML = "<b>Show Time:</b>" + shows[i].show.runtime;
                newShow.appendChild(showRuntime)
                var showPic = document.createElement("img");
                showPic.setAttribute("src", shows[i].show.image.medium);
                newShow.appendChild(showPic)

                document.getElementById(genre).appendChild(newShow)
            }

            var seemore = document.createElement('i');
            seemore.innerHTML = "See More";
            seemore.addEventListener('click', function () {
                console.log("GENRE::", genre);
                console.log("SHOWS::", shows);
                showGenre(genre, shows);
            })
            document.getElementById(genre).appendChild(seemore)
        }
    }
}

function showGenre(g, s)
{
    document.getElementById("maindiv").style.display = 'none';
    document.getElementById("genreDiv").style.display = 'block';
    var genreTiltle = document.createElement("h1");
    genreTiltle.innerHTML = g;
    document.getElementById("genreDiv").appendChild(genreTiltle)
    for (let i = 0; i < s.length - 1; i++) {
        var showli = document.createElement('li');
        showli.innerHTML = s[i].show.name;

        var showphoto = document.createElement('img');
        showphoto.setAttribute("src", s[i].show.image.medium);
        showli.appendChild(showphoto);

        document.getElementById("genreDiv").appendChild(showli)
    }
}

function Home()
{

    var types = ['Movies', 'TVshows', 'comedy', 'romance', 'thriller', 'kids'];
    for (let i = 0; i <= types.length - 1; i++)
    {
        getShows(types[i]);
    }
}

function TVSHOWS()
{
    document.getElementById("maindiv").style.display = 'none';
    document.getElementById("genreDiv").style.display = 'block';
    var types = ['TVshows'];
    for (let i = 0; i <= types.length - 1; i++)
    {
        getShows(types[i]);
    }
}


function Movies()
{
    console.log("movies()");
    var types = ['Movies'];
    for (let i = 0; i <= types.length - 1; i++)
    {
        getShows(types[i]);
    }
}
function Kids()
{
    console.log("kids()");
    var types = ['kids'];
    for (let i = 0; i <= types.length - 1; i++)
    {
        getShows(types[i]);
    }
}