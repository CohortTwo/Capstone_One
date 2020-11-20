let http = new XMLHttpRequest();
let url  = "https://api.tvmaze.com/shows"

http.open("GET", url, true);
http.send();

let data;

http.onreadystatechange = function() {
    let div;

    /* Receive data */
    if (this.readyState == 4 && this.status == 200) 
        data = JSON.parse(this.responseText);
    if (data == undefined) return

    /* Sort data by ratings */
    data.sort((a,b) => 
        (a.rating.average > b.rating.average) ? -1 : 1)

    /* Set up attach point */
    div = document.getElementById("id01");

    /* Attach tables for front (landing) page */
    div.appendChild(genFrontPageTB(data, "Comedy"));
    div.appendChild(genFrontPageTB(data, "Action"));
    div.appendChild(genFrontPageTB(data, "Fantasy"));
    div.appendChild(genFrontPageTB(data, "Adventure"));
    div.appendChild(genFrontPageTB(data, "Romance"));
}

function genFrontPageTB(data, genre) {
    data    = getShowsByGenre(data, genre);
    topFive = genSeq(5).map((i) => data[i]);
    return genTB(topFive, 5, "frontpage", genre);
}

window.addEventListener("click", (e) => {
    let isSeeMoreEvent = e.target.id == "comedyPage";

    if (!isSeeMoreEvent) return;

    /* Remove all child nodes from the main <div> */
    let div = document.getElementById("id01")
    while (div.firstChild) 
        div.removeChild(div.firstChild);

    let comedy    = getShowsByGenre(data, "Comedy");
    let topThirty = genSeq(30).map((i) => comedy[i]); 
    comedy        = genTB(topThirty, 6, "seeMore", "Comedy");
    div.appendChild(comedy);
});

window.addEventListener("click", (e) => {
    let isReturnEvent = e.target.id === "return";
    if (isReturnEvent) return 

    console.log("got it");
});

function getShowsByGenre(data, genre) {
    return data.filter(i => i.genres.includes(genre));
}

function crTBHeader(hdr, tdID, trID) { 
    let genre       = document.createElement("span"); 
    genre.innerHTML = hdr;
    genre.classList = "genre";
    genre.id        = hdr.toLowerCase();
    
    let seeMore       = document.createElement("span");
    seeMore.innerHTML = "see more";
    seeMore.classList = "seeMore"
    seeMore.id        = hdr.toLowerCase() + "Page";

    let hdrTD       = document.createElement("td");
    hdrTD.classList = tdID;
    hdrTD.colSpan   = '2';
    hdrTD.appendChild(genre);
    hdrTD.appendChild(seeMore);

    let hdrTR       = document.createElement("tr");
    hdrTR.appendChild(hdrTD);
    
    return hdrTR;
}

function crTBTemplate(numOfTD, col=1) {
    /* Work out number of rows using total number cells and col size */
    numOfTR = (numOfTD % col == 0) ? 
              (numOfTD / col)      : 
              (parseInt(numOfTD / col)) + 1;

    /* Work out the template array */
    let box      = genSeq(numOfTD);
    let step     = genSeq(numOfTR);
    let finalBox = [];
    step.map( () => finalBox.push(box.splice(0,col)) );
    return finalBox
}

function packDataTD(arr) {
    return arr.map(i => {
        let td       = document.createElement("td");
        td.classList = "informationCell";
        td.appendChild(i);
        return td;
    });
}

function packImgTag(imgAddress, name) {
        let img = document.createElement("img");
        img.src = imgAddress;
        img.alt = name;
        return img;
}

function genTB(kvObj, numOfCols, tdID, hdr) {
    let tb = document.createElement('table');
    tb.classList.add(tdID);
    tb.id = tdID;

    /* <td> & <tr> for the header row - create and include in tb */
    tb.append(crTBHeader(hdr, tdID));

    /* Pack data into <td> tags and store them in an array */
    let imgArr = kvObj.map(i => packImgTag(i.image.medium, i.name));
    let tdArr  = packDataTD(imgArr.map(i => i));

    /* Create template table */
    let template = crTBTemplate(tdArr.length, numOfCols);

    /* Implementing the table using the template */
    template.map(r => {
        let tr = document.createElement("tr");
        r.map(c => tr.appendChild(tdArr[c]));
       tb.append(tr);
    });
    return tb;
}

function genSeq(num, reverse=false) { 
    let seq = [];

    if (!reverse) {
        let c   = 0; 
        while (c < num) {
            seq.push(c);
            c++;
        }
    } else {
        let c = num;
        while (c > num) {
            seq.push(c);
            c--;
        }
    }
    return seq;
}
