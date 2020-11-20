    var validinds = [0, 0, 0, 0, 0, 0, 0, 0]; 
        <!-- variable "validins array is used to check for  --> 
        <!-- valid entry for the required fields in order to -->
        <!--     activate SUBMIT button  -->
        <!--     validinds[0] = userid, validinds[1] = password, validinds[2] = name  -->
        <!--    validinds[3] = zip, validinds[4] = email, validinds[5] = gender(button)  -->
        <!--     validinds[6] = language(checkbox), validinds[7] = about(textarea box)-->
        
             
        function UpdateButClick() <!-- This is to check whether Gender button is pressed -->    
        { validinds[5] = 1; <!-- Click = True since function is called  -->
          
          <!-- checking if submit button should be activated. Only when required fields -->
          <!--     are valid then submit button should be activated -->             
          if (validinds[0] == 1 && validinds[1] == 1 && validinds[2] == 1 && validinds[3] == 1 
              && validinds[4] == 1 && validinds[5] == 1 && validinds[6] ==1)
             { 
               document.getElementById("submitbut").disabled = false; <!-- activate submit button -->
             }
          else 
             { document.getElementById("submitbut").disabled = true; 
             }
        }
        
        function UpdateCbxClick(e) <!-- This is to check whether Language checkbox is pressed -->
        { var checked1 = document.getElementById("eng").checked;   <!-- checked1 and checked2 whether checked -->
          var checked2 = document.getElementById("noneng").checked;
          
          validinds[6] = 1; 
          if ((checked1 != 0) || (checked2 != 0))  <!-- if one of the checked, means submit activates-->
             {
              validinds[6] = 1;
             }
          else 
             {validinds[6] = 0;
             }
                              
          if 
             (validinds[0] == 1 && validinds[1] == 1 && validinds[2] == 1 && validinds[3] == 1 && validinds[4] == 1 
              && validinds[5] == 1 && validinds[6] ==1)
             {
               document.getElementById("submitbut").disabled = false;
             }
          else
             {
               document.getElementById("submitbut").disabled = true; 
             }
         }
                        
        function useridvalidations(e) 
        {   var txt = e.target.value;
            var txtlen = txt.length; <!-- check the length of the user id input -->
            
            if (e.target.value === "" || e.target.value === null) 
               {
                e.target.nextElementSibling.color = "red"; <!-- check userid null? -->
                e.target.nextElementSibling.innerHTML = "<span class='color-red'>User id is Compulsory </span>";
                validinds[0] = 0; <!-- if userid null, becomes invalid, submit button cannot activate -->
                document.getElementById("submitbut").disabled = true;
                document.getElementById("userid").focus();
               }

            else if (txtlen < 5)
                    {
                       validinds[0] = 0;
                       e.target.nextElementSibling.innerHTML = 
                       "<span class='color-red'>User id should have at leas 5 characters </span>";
                       document.getElementById("submitbut").disabled = true;
                       document.getElementById("userid").focus();
                    }
                 else 
                 {
                    e.target.nextElementSibling.innerHTML = "";
                    validinds[0] = 1;
                 }
                      
            if (validinds[0] == 1 && validinds[1] == 1 && validinds[2] == 1 && validinds[3] == 1 
                && validinds[4] == 1 && validinds[6] == 1 )
               {   
                  document.getElementById("submitbut").disabled = false;
               }
            else
               { document.getElementById("submitbut").disabled = true; 
               }
        }   
           
        function passwordvalidations(e) 
        {
            var txt = e.target.value;
            var txtlen = txt.length;
           
            if (e.target.value === "" || e.target.value === null)
               {
                 e.target.nextElementSibling.innerHTML = "<span class='color-red'>Password is Compulsory </span>";
                 validinds[1] = 0;
                 document.getElementById("password").focus();               
               }
            else if (txtlen < 7)
                    {
                      e.target.nextElementSibling.innerHTML = 
                      "<span class='color-red'>Password should have at least 7 characters </span>";
                      validinds[1] = 0;
                      document.getElementById("password").focus();
                    }
                 else 
                    { 
                      e.target.nextElementSibling.innerHTML = "";
                      validinds[1] = 1;
                    }
                    
            if (validinds[0] == 1 && validinds[1] == 1 && validinds[2] == 1 && validinds[3] == 1 && validinds[4] == 1 
                && validinds[5] == 1 && validinds[6] == 1)
               {
                 document.getElementById("submitbut").disabled = false;
               }
            else 
               {
                 document.getElementById("submitbut").disabled = true; 
               }
        }

        function namevalidations(e) 
        {
            var txt = e.target.value;
            var txtlen = txt.length;
            if (e.target.value === "" || e.target.value === null) 
            {
               e.target.nextElementSibling.innerHTML = "<span class='color-red'>Name is Compulsory </span>";
               validinds[2] = 0;
               document.getElementById("submitbut").disabled = true;
               document.getElementById("name").focus();
            }
            else
            {
               e.target.nextElementSibling.innerHTML = "";              
               validinds[2] = 1;
            }
            
            if (validinds[0] == 1 && validinds[1] == 1 && validinds[2] == 1 && validinds[3] == 1 && validinds[4] == 1 
                && validinds[5] == 1 && validinds[6] == 1) 
            {
               document.getElementById("submitbut").disabled = false;
            }
            else 
            {                
               document.getElementById("submitbut").disabled = true;
            }  
        }
        
        function zipvalidations(e)
        {
            if (e.target.value === "" || e.target.value === null)
            {
                document.getElementById("zip").focus();
                validinds[3] = 0;
                e.target.nextElementSibling.innerHTML = "<span class='color-red'>Zip Code is Compulsory </span>";
            }
            else
            {
                e.target.nextElementSibling.innerHTML = "";
                validinds[3] = 1;
            }
            
            if (validinds[0] == 1 && validinds[1] == 1 && validinds[2] == 1 && validinds[3] == 1 && validinds[4] == 1 
                && validinds[5] == 1 && validinds[6] == 1) 
            {
                
                document.getElementById("submitbut").disabled = false;
            }
            else { document.getElementById("submitbut").disabled = true; }
            
        }

        function emailvalidations(e) {
          
            var mailformat = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;;
            var txt = e.target.value;
         
            if (e.target.value === "" || e.target.value === null) 
            {
                document.getElementById("email").focus();
                validinds[4] = 0;
                e.target.nextElementSibling.innerHTML = "<span class='color-red'>Email is Compulsory </span>";
            }
            else if (txt.match(mailformat)) 
                {
                   e.target.nextElementSibling.innerHTML = "";
                   validinds[4] = 1;
                }
                else 
                {
                   document.getElementById("email").focus();
                   validinds[4] = 0;
                   e.target.nextElementSibling.innerHTML = "<span class='color-red'>Format eg: abc@xyz.com</span>";
                }
                        
            if (validinds[0] == 1 && validinds[1] == 1 && validinds[2] == 1 && validinds[3] == 1 && validinds[4] == 1
                && validinds[5] == 1 && validinds[6] == 1) 
            {
               document.getElementById("submitbut").disabled = false;
            }
            else 
            {  document.getElementById("submitbut").disabled = true; 
            }
        }
           
        document.getElementById("userid").addEventListener('keyup', useridvalidations);
        document.getElementById("password").addEventListener('keyup', passwordvalidations);
        document.getElementById("name").addEventListener('keyup', namevalidations);
        document.getElementById("email").addEventListener('keyup', emailvalidations);
        document.getElementById("zip").addEventListener('keyup', zipvalidations);

       function save(e)
       {
           e.preventDefault();
           const formData = new FormData(document.regform);
           var inames = [];
           var myformdata={};
           var tblrow = 1; <!-- display at row 1 of table -->
           var counter = 0;
           var display1 = document.getElementById("disptable"); <!-- display table  -->
           var newRow = display1.insertRow(tblrow); <!-- InsertRow into display table -->
           let cells = [];
           
           for(let k of formData.keys())
              {
                  if(!inames.includes(k))
                  { counter++; 
                    cells[counter] = newRow.insertCell(counter-1); <!-- Array starts from [0] and not [1] -->
                    inames.push(k);
                    cells[counter].innerHTML = myformdata[k]; <!-- assign cells in table with dataform fields (array) -->
                    myformdata[k]=formData.getAll(k);
                    cells[counter].innerHTML = myformdata[k];
                  }                    
                 
           var frm = document.getElementById("regform");
           frm.reset(); <!-- Reset and clear form for new entry -->
             }
       }