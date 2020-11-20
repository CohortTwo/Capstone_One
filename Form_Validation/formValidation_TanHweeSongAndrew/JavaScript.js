
var Uid = 0; var Pid = 0; var Nid = 0; var Cid = 0; var Zid = 0; var Mid = 0;
var Sid = 0; var Lid = 0;

document.getElementById("sbutton-id").style.cursor = 'not-allowed';

    function useridvalidation(e) {
        if (e.target.value === "" || e.target.value === null) {
        console.log("userid blank or null detected");
            e.target.nextElementSibling.innerHTML = "Data entered must be length of 5 to 12";
            Uid = 0;
            CheckandActivateSubButton();
        }
        else if
            ((e.target.value.length >= 5) && (e.target.value.length <= 12)) {
        console.log("userid Valid data 5 to 12");
            e.target.nextElementSibling.innerHTML = "";
            Uid = 1;
            CheckandActivateSubButton();
           
        }
        else {
            e.target.nextElementSibling.innerHTML = "Data entered must be length of 5 to 12";
            Uid = 0;
            CheckandActivateSubButton();
             }
    }
    document.getElementById('userId').addEventListener("blur", useridvalidation);
    document.getElementById('userId').addEventListener("keyup", useridvalidation);



    function pwdvalidation(e) {
        if (e.target.value === "" || e.target.value === null) {
        console.log("pwd blank or null detected");
            e.target.nextElementSibling.innerHTML = "Data entered must be length of 7 to 12";
            Pid = 0;
            CheckandActivateSubButton();
        }
        else if
            ((e.target.value.length >= 7) && (e.target.value.length <= 12)) {
        console.log("pwd Valid data 7 to 12");
            e.target.nextElementSibling.innerHTML = "";
            Pid = 1;
            CheckandActivateSubButton();
            
        }
        else {
        e.target.nextElementSibling.innerHTML = "Data entered must be length of 7 to 12";
            Pid = 0;
            CheckandActivateSubButton();
        }
    }
    document.getElementById('pwd-id').addEventListener("blur", pwdvalidation);
    document.getElementById('pwd-id').addEventListener("keyup", pwdvalidation);


    function namevalidation(e) {
        if (e.target.value === "" || e.target.value === null) {
        console.log("name-id blank or null detected");
            e.target.nextElementSibling.innerHTML = "Data entered must be alphabets only";
            Nid = 0;
            CheckandActivateSubButton();
        }
        else if
            (/^[a-zA-Z]+$/.test(e.target.value)) {
        console.log("name-id Valid data -alphabets only");
            e.target.nextElementSibling.innerHTML = "";
            Nid = 1;
            CheckandActivateSubButton();
        }
        else {
        e.target.nextElementSibling.innerHTML = "Data entered must be alphabets only";
            Nid = 0;
            CheckandActivateSubButton();
        }
    }
    document.getElementById('name-id').addEventListener("blur", namevalidation);
    document.getElementById('name-id').addEventListener("keyup", namevalidation);




    function countryvalidation(e) {
        if (e.target.value === "Singapore" || e.target.value === "Malaysia" ||
            e.target.value === "India" || e.target.value === "Srilanka") {
            console.log("ctry-id country selected");
            Cid = 1;
            CheckandActivateSubButton();
        } else {
            Cid = 0;
            CheckandActivateSubButton();
        }
    }
    document.getElementById('ctry-id').addEventListener("click", countryvalidation);


    function zipidvalidation(e) {
        if (e.target.value === "" || e.target.value === null) {
        console.log("zipid blank or null detected");
            e.target.nextElementSibling.innerHTML = "Data entered must be numeric only";
            Zid = 0;
            CheckandActivateSubButton();
        }
        else if
            (!isNaN(e.target.value)) {
        console.log("userid Valid data -numbers");
            e.target.nextElementSibling.innerHTML = "";
            Zid = 1;
            CheckandActivateSubButton();
        }
        else {
        e.target.nextElementSibling.innerHTML = "Data entered must be numeric only";
            Zid = 0;
            CheckandActivateSubButton();
        }
    }
    document.getElementById('zip-id').addEventListener("blur", zipidvalidation);
    document.getElementById('zip-id').addEventListener("keyup", zipidvalidation);


function emailvalidation(e) {
    if (e.target.value === "" || e.target.value === null) {
        console.log("email blank or null detected");
        e.target.nextElementSibling.innerHTML = "Input valid email address";
        Mid = 0;
        CheckandActivateSubButton();
    }
    else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.target.value)) {
            console.log("email valid data");
            e.target.nextElementSibling.innerHTML = "";
            Mid = 1;
        CheckandActivateSubButton();
        }
    else {
        e.target.nextElementSibling.innerHTML = "Input valid email address";
        Mid = 0;
        CheckandActivateSubButton();
    }
}
document.getElementById('email-id').addEventListener("blur", emailvalidation);
document.getElementById('email-id').addEventListener("keyup", emailvalidation);


    function sexvalidation(e) {
        if (e.target.value === "male" || e.target.value === "female") {
            console.log("male/female-id country selected");
            Sid = 1;
            CheckandActivateSubButton();
        }
        else {
            Sid = 0;
            CheckandActivateSubButton();
        }
    }
    document.getElementById('male-id').addEventListener("click", sexvalidation);
    document.getElementById('female-id').addEventListener("click", sexvalidation);


    function langvalidation(e) {
        if (e.target.value === "eng" || e.target.value === "noneng") {
            console.log("end/noneng-id selected");
            Lid = 1;
            CheckandActivateSubButton();
        } else {
            Lid = 0;
            CheckandActivateSubButton();
        }
        
    }
    document.getElementById('eng-id').addEventListener("click", langvalidation);
    document.getElementById('noneng-id').addEventListener("click", langvalidation);

console.log("Uid + Pid + Nid + Cid + Zid + Mid + Sid + Lid");
console.log(Uid + Pid + Nid + Cid + Zid + Mid + Sid + Lid);

// All non optional fields tested ok
function CheckandActivateSubButton() {
    if (Uid && Pid && Nid && Cid && Zid && Mid && Sid && Lid) {
        console.log("form valid flag on");
        document.getElementById("sbutton-id").disabled = false;
        document.getElementById("sbutton-id").style.cursor = 'pointer';     

    } else {
        console.log("one of them is false");
        console.log(Uid + Pid + Nid + Cid + Zid + Mid + Sid + Lid);
        document.getElementById("sbutton-id").disabled = true;
    }
}


function saveD(e) {
    e.preventDefault(); //stop event- prevent submit button from processing
    document.getElementById('regform').hidden = 'true';
    
    console.log("entering the formdata");
        const formData = new FormData(document.regform)// name of form="regform" in index.html
        var inames = []; //collect the names in the DOC
        var myformdata = {}; //object data
    
        for (let k of formData.keys()) {//for k(all) of formdata.keys
            if (!inames.includes(k)) {// check k not matching inames...
                inames.push(k); //keep the name for the first occurence...
                myformdata[k] = formData.getAll(k);// save data into myformdata
                console.log(myformdata);//console log
            }
        }

    

    for (let k in myformdata) {
        var p = document.createElement("p");
        p.textContent = k+" ====> "+myformdata[k]; //display name & content 
        document.getElementById("displaytext").appendChild(p);
    }
}
document.getElementById('sbutton-id').addEventListener("click", saveD);



