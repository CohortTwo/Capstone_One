
var cat = [];

function getHTTP(type,idno,iD2) {
    var show = new XMLHttpRequest();
    //  var gtype = type;
    //  var iDno = idno;
    console.log(type, idno);
    show.open("GET", "https://api.tvmaze.com/search/shows?q=" + type);
    show.send();
    show.onreadystatechange = function () {
        // console.log("ready state value::::", show.readyState);
        if (show.readyState === 4) {
            cat = JSON.parse(show.responseText);
            console.log(cat);
            genByType(cat, type,idno,iD2);
        }
    }
}

function genByType(cat, gt, iD1,iD2) {
   
    for (let i = 0; i <= cat.length - 1; i++) {
        var newDiv = document.createElement("div");
        var newImg = document.createElement("img");
        newDiv.id = iD2;
        newDiv.innerHTML = cat[i].show.name + "<br>Runtime:" + cat[i].show.runtime;
        newImg.setAttribute("src", cat[i].show.image.medium);
        newImg.setAttribute("style", "width:100%");
        document.getElementById(iD1).appendChild(newDiv);
        newDiv.appendChild(newImg);
    }
}

function Search() {
    var searchIP = document.getElementById("search");
    var filter = searchIP.value.toUpperCase();
    var flag = false;
    // console.log(filter);
    var show = new XMLHttpRequest();
    var listShow = [];
    show.open("GET", "https://api.tvmaze.com/search/shows?q=" + filter);
    show.send();
    show.onreadystatechange = function () {
        //  console.log("ready state value::::", show.readyState);
        if (show.readyState === 4) {
            listShow = JSON.parse(show.responseText);
            console.log(listShow);
            // window.open("search.html");

            document.getElementById("mainpage").style.display = "none";
            var schpage = document.createElement('div');
            schpage.id = "searchpage";
            document.getElementById("searchnewshow").appendChild(schpage);

            var viewSearch = document.getElementById("searchpage");
            var texth2 = document.createElement('h2');
            texth2.innerHTML = filter;
            viewSearch.appendChild(texth2);

            for (var a = 0; a <= listShow.length - 1; a++) {
                var text = listShow[a].show.name;
                //console.log(listShow[a].show.name);
                if (text !== "" && text !== null) {
                    if (text.toUpperCase().indexOf(filter) > -1) {
                        // confirm("Search found: " + listShow[a].show.name);
                        genPage(listShow[a]);
                        flag = true;
                    }
                }
            }
        }
    }
    return flag;
}

function genPage(name) {
    var viewSearch = document.getElementById("searchpage");
    var text = name.show.name + "<br>  Runtime: " + name.show.runtime + "<br>Language: " + name.show.language + "<br>Score:" + name.score + "<br>Summary:" + name.show.summary;
    var newDiv = document.createElement("div");
    var newImage = document.createElement("img");
    newDiv.id = "moresearch";
    newDiv.innerHTML = text;
    newImage.setAttribute('src', name.show.image.medium);
    newImage.setAttribute('style', "width:100%");
    //  console.log(newDiv.innerHTML);
    viewSearch.appendChild(newImage);
    viewSearch.appendChild(newDiv);

}