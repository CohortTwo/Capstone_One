// ***********Initialisationn

var isFormValid = false;
var isUserIdValid = false;
var isPasswordValid = false;
var isNameValid = false;
var isGenderValid = false;
var isCountryValid = false;
var isLangValid = false;
var isEmailValid = false;
var isZipCodeValid = false;

// User ID ***************************

document.getElementById("userID").addEventListener("blur", validateUserId);

function validateUserId(e) {

        if (e.target.value.length < 5 || e.target.value.length > 12) {
            e.target.nextElementSibling.innerHTML = "UserId is required and must be 5 to 12 characters";
            isUserIdValid = false;
            
        }
        else {
            e.target.nextElementSibling.innerHTML = " ";
            isUserIdValid = true;
        }
    validateForm();
 }
// Password validation ***************************

document.getElementById("password").addEventListener("blur", validatePassword);
function validatePassword(e) {

        if (e.target.value === null || e.target.value.length < 5 || e.target.value.length > 12) {
            e.target.nextElementSibling.innerHTML = "Password is required and must be 5 to 12 characters";
            isPasswordValid = false;
            // console.log("Password is required and must be 5 to 12 characters");
        }
        else {
            e.target.nextElementSibling.innerHTML = "";
            console.log("correct password");
            isPasswordValid = true;
    }
    validateForm();
 }

// Name validation *****************************

document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("name").addEventListener("keyup", validateName);

var pattern = /^[A-Za-z]+$/;
function validateName(e) {
    console.log('name pattern' + e.target.value.match(pattern));
    if (e.target.value===null || e.target.value==="") {
        e.target.nextElementSibling.innerHTML = "Name is required";
        isNameValid = false;
    }
    else {

        // validate name format
        if (e.target.value.match(pattern)===null) {
            e.target.nextElementSibling.innerHTML = "";
            isNameValid = true;
        } else {
            e.target.nextElementSibling.innerHTML = "You Name must be Alphabates";
            isNameValid = false;
        }
    }
    validateForm();
}
    
// Country validation 
validateCountry();

function validateCountry(e) {
    
    if (document.regform.country.value < 1||document.regform.country.value===null) {
        document.getElementById("country").innerHTML = "country is required";
        isCountryValid = false;

    }
    else {
        document.getElementById("country").innerHTML = "";
        isCountryValid = true;       

    }
    validateForm();
}

//  ZipCode Numeric validation ******************************

document.getElementById("zipCode").addEventListener("keyup", validateZipCode);
document.getElementById("zipCode").addEventListener("blur", validateZipCode);

var pattern = /[0-9]+$/;
function validateZipCode(e) {

    console.log(e.target.value.match(pattern));
    if (e.target.value === null || e.target.value === "") {
        e.target.nextElementSibling.innerHTML = "ZipCode is required";
        isZipCodeValid = false;
    }
    else {

        // validate Zip Code format
        if (e.target.value.match(pattern)===null) {
            e.target.nextElementSibling.innerHTML = "ZipCode must be numeric";
            isZipCodeValid = false;
        } else {
            e.target.nextElementSibling.innerHTML = "";
            isZipCodeValid = true;
            
        }
    }
    validateForm();
}


// email

document.getElementById("email").addEventListener("blur", validateEmail);

function validateEmail(e) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// Length validation
  
    if (e.target.value === null || e.target.value.length < 1) {
        e.target.nextElementSibling.innerHTML = "Email is required";
        isEmailValid = false;
    }
    else {

// validate email format
        if (e.target.value.match(mailformat)) {
            e.target.nextElementSibling.innerHTML = "";
            isEmailValid = true;
            
        } else {
            e.target.nextElementSibling.innerHTML = "You have entered an invalid email address!";
            isEmailValid = false;
        }
    }
    validateForm();
}

// Gender validation ***********************

validateGender();

function validateGender(e) {

    if (document.regform.gender.value.length===0) {
         document.getElementById("gender").innerHTML = "Must select Gender";
         isGenderValid = false;

     } else {
         document.getElementById("gender").innerHTML = "";
         isGenderValid = true;
     }
    validateForm();
}

//************* Language validation
validateLang();
function validateLang(e) {

    var langChecked = [];

    for (var i = 0; i < document.regform.lang.length; i++) {
        if (document.regform.lang[i].checked === true) {
 
            langChecked.push(document.regform.lang[i].value);
        }

    }
    if (langChecked.length !== 0) {
        isLangValid = true;
        document.getElementById("lang").innerHTML = "";
 
    } else {
        isLangValid = false;
        document.getElementById("lang").innerHTML = "Lang is required";
    }
    validateForm();
}

//  Display of all submitted fields

function save(e) {
    e.preventDefault();
    // get the form elements using FormData

    const formData = new FormData(document.regform)
    var inames = [];
    var myformdata = {};
    for (let k of formData.keys()) {
        if (!inames.includes(k)) {
            inames.push(k);
            myformdata[k] = formData.getAll(k)
        }
    }

 // Display the input

    document.getElementById("regform").hidden = true;  //  **** Hid the form ****

    for (let k in myformdata) {
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.textContent = k.toUpperCase() + " : ";
     

        var td2 = document.createElement("td");
        td2.innerHTML = myformdata[k];

        tr.appendChild(td1);
        tr.appendChild(td2);

       document.getElementById("display").appendChild(tr);
        }
}

//  Check all validation if ok enable submit button

function validateForm(e){
    if (isUserIdValid == false || isPasswordValid == false || isNameValid == false || isGenderValid == false ||
        isCountryValid == false ||
        isLangValid == false ||
        isEmailValid == false ||
        isZipCodeValid == false) {
        isFormValid = false;
        document.getElementById("validForm").disabled = true;
    } else {
        isFormValid = true;
        document.getElementById("validForm").disabled = false;
    }
}