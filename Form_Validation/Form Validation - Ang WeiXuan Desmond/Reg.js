var isUserID = false;
var isPassword = false;
var isUserName = false;
var isCountry = false;
var isZip = false;
var isEmail = false;
var isGender = false;
var isLanguage = false;

//validate User ID

document.getElementById('userID').addEventListener("blur", validateUserID);
document.getElementById('userID').addEventListener("keyup", validateUserID);

function validateUserID(e) {
    console.log("Validate User id called")
    if (e.target.value === "" || e.target.value === null) {
        e.target.nextElementSibling.innerHTML = "Please enter UserID";
        isUserID = false;
    }
    else if (e.target.value.length < 4 || e.target.value.length > 12) {
        e.target.nextElementSibling.innerHTML = "Please enter values of 5-12 length";
        isUserID = false;
         
    } else {
            e.target.nextElementSibling.innerHTML = "";
            isUserID = true;
    }
    
};
    
    

//validate password

document.getElementById('password').addEventListener("blur", validatePassword);
document.getElementById('password').addEventListener("keyup", validatePassword);

function validatePassword(e) {
    if (e.target.value === "" || e.target.value === null) {
        e.target.nextElementSibling.innerHTML = "Please Enter Password";
        isPassword = false;
    }
    else if (e.target.value.length < 7 || e.target.value.length > 12) {
        e.target.nextElementSibling.innerHTML = "Please enter values of 7-12 length";
        isPassword = false;
    } else {
        e.target.nextElementSibling.innerHTML = "";
        isPassword = true;
    }
}

//validate userName

document.getElementById('userName').addEventListener("blur", validateUserName);
document.getElementById('userName').addEventListener("keyup", validateUserName);

function validateUserName(e) {
    console.log("triggered the validate user")
    if (e.target.value === "" || e.target.value === null) {
        e.target.nextElementSibling.innerHTML = "Please Enter Your Name";
        isUserName = false;
    } else if (e.target.value.match(/^[a-zA-Z ][a-zA-Z \\s]+$/)) {
        e.target.nextElementSibling.innerHTML = "";
        isUserName = true;
        console.log("triggered the validate user regex")
    } else {
        e.target.nextElementSibling.innerHTML = "Alphabets Only";
        isUserName = false;
        console.log("alphabets only")
    }
};

//validate country

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

//validate zip

document.getElementById('zip').addEventListener("blur", validateZip);
document.getElementById('zip').addEventListener("keyup", validateZip);

function validateZip(e) {
    if (e.target.value === "" || e.target.value === null) {
        e.target.nextElementSibling.innerHTML = "Please enter your ZIP";
        isZip = false;
    }
    else if (e.target.value.match(/^.*[a-zA-Z]$/g)) {
        e.target.nextElementSibling.innerHTML = "Numbers Only";
        isZip = false;
    }
    else {
        e.target.nextElementSibling.innerHTML = "";
        isZip = true;
    }
}

//validate email

document.getElementById('email').addEventListener("blur", validateEmail);
document.getElementById('email').addEventListener("keyup", validateEmail);


function validateEmail(e) {
    var Email = e.target.value;
    
    if (e.target.value === "" || e.target.value === null) {
        e.target.nextElementSibling.innerHTML = "Please enter your email";
        isEmail = false;
    } else if (e.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
        e.target.nextElementSibling.innerHTML = "";
        isEmail = true;
    }
    else {
        e.target.nextElementSibling.innerHTML = "Please enter a valid email";
        isEmail = false;
    }

};


//validate gender

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

//validate Language

function validateLanguage(e) {
    
    
    var text = document.getElementById('text1');
    if (document.querySelector('input[name="lang"]:checked') === null) {
        
        text.style.display = "block";
        
        isLanguage = false;
    } else {
        text.style.display = "none";
        isLanguage = true;
    }
        //e.target.nextElementSibling.innerHTML = "Please enter your language";
        
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
    //variables declared here
    const formData = new FormData(document.regForm)
    var inames = [];
    var myformdata = {};

    //document.getElementById('regForm').hidden = true;

    //console.log(myformdata);
    for (let k of formData.keys()) {

        if (!inames.includes(k)) { //prevent duplicates
            inames.push(k); //push the k values into inames
            myformdata[k] = formData.getAll(k) //get the data for each k

            var tableCol = document.createElement('tr');
            
            document.getElementById('displayData').appendChild(tableCol);
        }
        
    }
    
    

    for (let k in myformdata) {
        var tableCol = document.createElement('td');
        tableCol.innerHTML = myformdata[k];
        document.getElementById('displayData').appendChild(tableCol);
    }
}
   /* for (let k in myformdata) {
        
        var tableCol = document.createElement('td');

        tableCol.innerHTML = myformdata[k];
        
        //display.textContent = k + ":" + myformdata[k];

        document.getElementById('displayData').appendChild(tableCol);
        
        //document.getElementById('displayData').appendChild(display);
    }*/
    

  
