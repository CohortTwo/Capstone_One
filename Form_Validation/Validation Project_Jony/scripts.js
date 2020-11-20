//var isFormValid=false;

var isUseridValid=false;
var isPasswordValid=false;
var isNameValid=false;
var isCountryValid=false;
var isEmailValid=false;
var isZcodeValid=false;

document.getElementById("userid").addEventListener("blur", function(e){
  if(e.target.value==="" || e.target.value===null){
                    e.target.nextElementSibling.innerHTML = "Required and must be of length 5 to 12 ";  
                    isUseridValid===false;                  
                }
                else if(e.target.value.length<5 || e.target.value.length>12){
                    e.target.nextElementSibling.innerHTML = "User id should be between 5 and 12 characters";
                    isUseridValid===false;
                } 
                else{
                    e.target.nextElementSibling.innerHTML = "";
                    isUseridValid===true;
                }
})
document.getElementById("userid").addEventListener("keyup", function(e){
  if(e.target.value==="" || e.target.value===null){
                    e.target.nextElementSibling.innerHTML = "Required and must be of length 5 to 12 ";      
                    isUseridValid===false;              
                }
                else if(e.target.value.length<5 || e.target.value.length>12){
                    e.target.nextElementSibling.innerHTML = "User id should be between 5 and 12 characters";
                    isUseridValid===false;
                } 
                else{
                    e.target.nextElementSibling.innerHTML = "";
                    isUseridValid===true;
                }
})
    /*        function useridvalidation(e){
                if(e.target.value==="" || e.target.value===null){
                    e.target.nextElementSibling.innerHTML = "User id should be filled";                    
                }
                else{
                    e.target.nextElementSibling.innerHTML = "";
                }
            } */
 document.getElementById("pwd").addEventListener("blur", function(e){
      if(e.target.value==="" || e.target.value===null){
                    e.target.nextElementSibling.innerHTML = "Required and must be of length 7 to 12";    
                    isPasswordValid===false;                
                }
                else if(e.target.value.length<7 || e.target.value.length>12){
                    e.target.nextElementSibling.innerHTML = "Password should be between 7 and 12 characters";
                    isPasswordValid===false; 
                } 
                else{
                    e.target.nextElementSibling.innerHTML = "";
                    isPasswordValid===true; 
                }

  })
  document.getElementById("pwd").addEventListener("keyup", function(e){
      if(e.target.value==="" || e.target.value===null){
                    e.target.nextElementSibling.innerHTML = "Required and must be of length 7 to 12";  
                    isPasswordValid===false  ; 
                }
                else if(e.target.value.length<7 || e.target.value.length>12){
                    e.target.nextElementSibling.innerHTML = "Password should be between 7 and 12 characters";
                    isPasswordValid===false; 
                } 
                else{
                    e.target.nextElementSibling.innerHTML = "";
                    isPasswordValid===true; 
                }

  })

function toggleP() {
  var x = document.getElementById("pwd");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

 document.getElementById("fname").addEventListener("blur", function(e){
      if(e.target.value==="" || e.target.value===null){
                    e.target.nextElementSibling.innerHTML = "Please enter a name and must be alphabets only"; 
                    isNameValid===false;                   
                }
                /*else if(e.target.value.pattern="[^a-zA-Z]"){
                    e.target.nextElementSibling.innerHTML = "Please enter only alphabets";
                } */
                else{
                    e.target.nextElementSibling.innerHTML = "";
                    isNameValid===true; 
                }

  })




   document.getElementById("fname").addEventListener("keyup", function(e){
      if(e.target.value==="" || e.target.value===null){
                    e.target.nextElementSibling.innerHTML = "Please enter a name and must be alphabets only";   
                    isNameValid===false;                  
                }
                /*else if(e.key.pattern="[^a-zA-Z]"){
                    e.target.nextElementSibling.innerHTML = "Please enter only alphabets";
                } */
                else{
                    e.target.nextElementSibling.innerHTML = "";
                    isNameValid===true; 
                }

  })
var fnamePattern = /^[A-Za-z]+$/;
    document.getElementById("fname").addEventListener("keyup", function(e){
      if(e.target.value.match(fnamePattern)){
                    e.target.nextElementSibling.innerHTML = ""; 
                    isNameValid===true;                    
                }
                else{
                    e.target.nextElementSibling.innerHTML = "Please enter alphabets only";
                    isNameValid===false; 
                }

  })
  
    document.getElementById("fname").addEventListener("blur", function(e){
      if(e.target.value.match(fnamePattern)){
                    e.target.nextElementSibling.innerHTML = "";   
                    isNameValid===true;                  
                }
                else{
                    e.target.nextElementSibling.innerHTML = "Please enter alphabets only";
                    isNameValid===false; 
                }

  })

     document.getElementById("country").addEventListener("blur", function(e){
      if(e.target.value==="" || e.target.value===null){
                    e.target.nextElementSibling.innerHTML = "Required. Please select your country";   
                    isCountryValid===false;                  
                }
                else{
                    e.target.nextElementSibling.innerHTML = "";
                    isCountryValid===true; 
                }

  })

 document.getElementById("zcode").addEventListener("blur", function(e){
      if(e.target.value==="" || e.target.value===null){
                    e.target.nextElementSibling.innerHTML = "Required and must be numbers";   
                    isZcodeValid===false;                  
                }
                /*else if(e.target.value.pattern!="[0-9]{10}"){
                    e.target.nextElementSibling.innerHTML = "Please enter only numbers";
                } */
                else{
                    e.target.nextElementSibling.innerHTML = "";
                    isZcodeValid===true; 
                }

  })
document.getElementById("zcode").addEventListener("keyup", function(e){
      if(e.target.value==="" || e.target.value===null){
                    e.target.nextElementSibling.innerHTML = "Required and must be numbers";  
                    isZcodeValid===false;                   
                }
                 else{
                    e.target.nextElementSibling.innerHTML = "";
                    isZcodeValid===true; 
                }

  })

  var zcodePattern = /^[0-9]+$/;
    document.getElementById("zcode").addEventListener("keyup", function(e){
      if(e.target.value.match(zcodePattern)){
                    e.target.nextElementSibling.innerHTML = "";  
                    isZcodeValid===true;                   
                }
                else{
                    e.target.nextElementSibling.innerHTML = "Please enter numbers only";
                    isZcodeValid===false; 
                }

  })
   document.getElementById("zcode").addEventListener("blur", function(e){
      if(e.target.value.match(zcodePattern)){
                    e.target.nextElementSibling.innerHTML = "";  
                    isZcodeValid===true;                   
                }
                else{
                    e.target.nextElementSibling.innerHTML = "Please enter numbers only";
                    isZcodeValid===false; 
                }

  })

 document.getElementById("email").addEventListener("blur", function(e){
      if(e.target.value==="" || e.target.value===null){
                    e.target.nextElementSibling.innerHTML = "Required and must be a valid email";      
                    isEmailValid===false;               
                }
                else{
                    e.target.nextElementSibling.innerHTML = "";
                    isEmailValid===true; 
                }

  })
  document.getElementById("email").addEventListener("keyup", function(e){
      if(e.target.value==="" || e.target.value===null){
                    e.target.nextElementSibling.innerHTML = "Required and must be valid email";      
                    isEmailValid===false;               
                }
                 else{
                    e.target.nextElementSibling.innerHTML = "";
                    isEmailValid===true; 
                }

  })
var emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
 document.getElementById("email").addEventListener("blur", function(e){
      if(e.target.value.match(emailPattern)){
                    e.target.nextElementSibling.innerHTML = "";   
                    isEmailValid===true;                  
                }
                else{
                    e.target.nextElementSibling.innerHTML = "Please enter a valid email";
                    isEmailValid===false; 
                }

  })

document.getElementById("gender").addEventListener("blur", function(e){
      if(e.target.value===""){
                    e.target.nextElementSibling.innerHTML = "";    
                    
                    console.log(document.getElementById("gender").value)
                }

        
                else{
                    e.target.nextElementSibling.innerHTML = "Required. Please select your gender.";
                }
            })
            

/*document.getElementById("lang").addEventListener("blur", function(e){
  if(e.target.value==="" || e.target.value===null){
                    e.target.nextElementSibling.innerHTML = "Required. ";                    
                }
                else{
                    e.target.nextElementSibling.innerHTML = "";
                }
})*/


function isFormValid(){
    if(isUseridValid===true && isPasswordValid===true && isNameValid===true && isCountryValid===true && isZcodeValid===true && isEmailValid===true){
    document.getElementById("saveBtn").disabled = false;
}
    else{
        document.getElementById("saveBtn").disabled = true;
        return false;
    }
}


function save(e){
				e.preventDefault();
            

				const formData = new FormData(document.regform)
                var inames = [];
                var myformdata = {};
                for(let k of formData.keys()){
                    if(!inames.includes(k)){
                        inames.push(k);
                        myformdata[k]=formData.getAll(k)
                    }                    
                }
                console.log(myformdata);

                 for (let k in myformdata) {
                    var para = document.createElement("P");
                    para.innerHTML = [k] + myformdata[k];
                    document.getElementById("dataDisplay").appendChild(para);
                }
            }
            

            
