var isUserValid = false;
var isPasswordValid = false;
var isNameValid = false;
var isCountryValid = false;
var isEmailValid = false;
var isZipValid = false;

function useridvalidation(e) {
    if (e.target.value === "" || e.target.value === null || e.target.value.length < 5 || e.target.value.length > 12) {
        e.target.nextElementSibling.innerHTML = "Userid is required and must be of length 5 to 12";
   }
    else {
       
        e.target.nextElementSibling.innerHTML = "";
       
    }
}
document.getElementById('userid').addEventListener("keyup", useridvalidation);
document.getElementById('userid').addEventListener("blur", useridvalidation);

function pwdvalidation(e) {
    if (e.target.value === "" || e.target.value === null || e.target.value.length < 7 || e.target.value.length > 12) {
        e.target.nextElementSibling.innerHTML = "Password is required and must be of length 7 to 12";
    }
    else  {
       
            e.target.nextElementSibling.innerHTML = "";
    }
}
document.getElementById('password').addEventListener("keyup", pwdvalidation);
document.getElementById('password').addEventListener("blur", pwdvalidation);


document.getElementById('password').addEventListener("keyup", namevalidation);
document.getElementById('password').addEventListener("keydown", namevalidation);

function namevalidation(e) {
    var alpha = /^[a-zA-Z]\s]+$/;
    if (e.target.value.match(alpha)) {
        e.target.nextElementSibling.innerHTML = "";
    }
    else {

        e.target.nextElementSibling.innerHTML = "Required and alphabets only";
    }
}

function countryvalidation(e) {
    //document.getElementById('country').addEventListener("blur",function(e));
    if (e.target.value === "" || e.target.value === null) {
        e.target.nextElementSibling.innerHTML = "Must select a country";
        isCountryValid = false;
    }
    else {

        e.target.nextElementSibling.innerHTML = "";
        isCountryValid = true;
    }
}
//document.getElementById('zipcode').addEventListener("keyup",zipvalidation);
function zipvalidation(e) {
    var beta = /^[0-9]+$/;
    if (e.target.value.match(beta)) {
        e.target.nextElementSibling.innerHTML = "";
    }
    else {

        e.target.nextElementSibling.innerHTML = "Required. Must be numeric only";
    }
}
//document.getElementById('zipcode').addEventListener("blur",zipvalidation);

function emailvalidation(e) {
    if (e.target.value === "" || e.target.value === null) {
        e.target.nextElementSibling.innerHTML = "Required";
    }
    else {

        e.target.nextElementSibling.innerHTML = "";
    }
}

function save(e)
{
    e.preventDefault();

    const formData = new FormData(document.regform);
    

    /*function save(e)
    {
            e.preventDefault();

            console.log(document.regform.choice);
          
        
        }
  */

    var inames = [];
    var myformdata = {};
    for (let k of formData.keys()) {
        if (!inames.includes(k)) {
            inames.push(k);
            myformdata[k] = formData.getAll(k);
        }
    }
    console.log(myformdata);
    document.getElementById("regform").hidden = true;

    for(let k in myformdata) {
        var p = document.createElement("p");
        //console.log(myformdata[k]);
        p.textContent = k + ":" + myformdata[k];
        document.getElementById("display").appendChild(p);
        }
}

fchoice = [];
for (var i = 0; i <= document.regform.choice.length - 1; i++) {
    if (document.regform.choice[i].checked)
        fchoice.push(document.regform.choice[i].value)
}

console.log(fchoice);
}

function inputValidate() {
    isFormValid = validateForm();
    console.log("input Validation");
    console.log("Button state before: " + document.getElementById("button").disabled);
    if (isFormValid) {
        document.getElementById("button").disabled = false;
        console.log("Button state after: " + document.getElementById("button").disabled);
        console.log(document.getElementById("button"));
        document.getElementById("button").style.cursor = 'pointer';
        return true;
    } else {
        document.getElementById("button").disabled = true;
        document.getElementById("button").style.cursor = 'not-allowed';
        return false;

