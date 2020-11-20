var isUserID = false;
var isPassword = false;
var isUserName = false;
var isCountry = false;
var isZip = false;
var isEmail = false;
var isGender = false;
var isLanguage = false;

document.getElementById('userID').addEventListener("blur", validateUserID);
document.getElementById('userID').addEventListener("keyup", validateUserID);

function validateUserID(e) {
    if (e.target.value === "" || e.target.value === null) {
        e.target.nextElementSibling.innerHTML = "<font color='red' size='3px'>Username cannot be blank</font>";
        isUserID = false;
    }
    else if (e.target.value.length < 4 || e.target.value.length > 12) {
        e.target.nextElementSibling.innerHTML = "<font color='red' size='3px'>Please enter values of 5-12 length</font>";
        isUserID = false;

    } else {
        e.target.nextElementSibling.innerHTML = "";
        isUserID = true;
    }
};

document.getElementById('password').addEventListener("blur", validatePassword);
document.getElementById('password').addEventListener("keyup", validatePassword);

function validatePassword(e) {
    if (e.target.value === "" || e.target.value === null) {
        e.target.nextElementSibling.innerHTML = "<font color='red' size='3px'>Password cannot be blank</font>";
        isPassword = false;
    }
    else if (e.target.value.length < 7 || e.target.value.length > 12) {
        e.target.nextElementSibling.innerHTML = "<font color='red' size='3px'>Please enter values of 7-12 length</font>";
        isPassword = false;
    } else {
        e.target.nextElementSibling.innerHTML = "";
        isPassword = true;
    }
}

document.getElementById('userName').addEventListener("blur", validateUserName);
document.getElementById('userName').addEventListener("keyup", validateUserName);

function validateUserName(e) {
    
    if (e.target.value === "" || e.target.value === null) {
        e.target.nextElementSibling.innerHTML = "<font color='red' size='3px'>Name cannot be blank</font>";
        isUserName = false;
    } else if (e.target.value.match(/^[a-zA-Z ][a-zA-Z \\s]+$/)) {
        e.target.nextElementSibling.innerHTML = "";
        isUserName = true;
        
    } else {
        e.target.nextElementSibling.innerHTML = "<font color='red' size='3px'>Please enter alphabetic only</font>";
        isUserName = false;
    }
};


document.getElementById('country').addEventListener("blur", validateCountry);
document.getElementById('country').addEventListener("change", validateCountry);

function validateCountry(e) {
    if (e.target.value === 0 || e.target.value === "" || e.target.value === "0") {
        e.target.nextElementSibling.innerHTML = "Please select your Country";
        isCountry = false;
    } else {
        e.target.nextElementSibling.innerHTML = "";
        isCountry = true;
    }
};

document.getElementById('zip').addEventListener("blur", validateZip);
document.getElementById('zip').addEventListener("keyup", validateZip);

function validateZip(e) {
    if (e.target.value === "" || e.target.value === null) {
        e.target.nextElementSibling.innerHTML = "<font color='red' size='3px'>Zipcode cannot be blank</font>";
        isZip = false;
    }
    else if (e.target.value.match(/^.*[a-zA-Z]$/g)) {
        e.target.nextElementSibling.innerHTML = "<font color='red' size='3px'>Enter a valid zipcode number only</font>";
        isZip = false;
    }
    else {
        e.target.nextElementSibling.innerHTML = "";
        isZip = true;
    }
}


document.getElementById('email').addEventListener("blur", validateEmail);
document.getElementById('email').addEventListener("keyup", validateEmail);


function validateEmail(e) {
    var Email = e.target.value;

    if (e.target.value === "" || e.target.value === null) {
        e.target.nextElementSibling.innerHTML = "<font color='red' size='3px'>Email cannot be blank</font>";
        isEmail = false;
    } else if (e.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
        e.target.nextElementSibling.innerHTML = "";
        isEmail = true;
    }
    else {
        e.target.nextElementSibling.innerHTML = "<font color='red' size='3px'>must be valid email</font>";
        isEmail = false;
    }

};


document.getElementById('regForm').addEventListener("click", validateGender);
document.getElementById('regForm').addEventListener("click", validateLanguage);

function validateGender(e) {

    var text = document.getElementById('text2');
    if (document.querySelector('input[name="gender"]:checked') === null) {

        text.style.display = "block";

        isGender = false;
    } else {
        text.style.display = "none";
        isGender = true;
    }
};

function validateLanguage(e) {

    var text = document.getElementById('text1');
    if (document.querySelector('input[name="lang"]:checked') === null) {

        text.style.display = "block";

        isLanguage = false;
    } else {
        text.style.display = "none";
        isLanguage = true;
    }
};

document.getElementById('regForm').addEventListener("change", validateForm);

function validateForm(e) {
    if (isUserID === true &&
        isPassword === true &&
        isUserName === true &&
        isCountry === true &&
        isZip === true &&
        isEmail === true &&
        isGender === true &&
        isLanguage === true) {
        document.getElementById('BTN').disabled = false;
    } else {
        document.getElementById('BTN').disabled = true;
    }
}

function save(e) {
    e.preventDefault();
    
    const formData = new FormData(document.regForm)
    var inames = [];
    var myformdata = {};

    for (let k of formData.keys()) {

        if (!inames.includes(k)) {
            inames.push(k); 
            myformdata[k] = formData.getAll(k) 
            var tableCol = document.createElement('tr');
            document.getElementById('display').appendChild(tableCol);
        }
    }



    for (let k in myformdata) {
        var tableCol = document.createElement('td');
        tableCol.innerHTML = myformdata[k];
        document.getElementById('display').appendChild(tableCol);
    }
}



