
        var textbut = document.getElementById("myBtn");
        document.getElementById("myBtn2").disabled = true;
        document.getElementById("myBtn2").style.visibility = "hidden";
          
        showcompleted.addEventListener('click', function(){
        showcompleted.style.backgroundColor = "yellow";  
        showincompleted.style.backgroundColor = "WhiteSmoke";
        showall.style.backgroundColor = "WhiteSmoke";
           
        search_filter.style.backgroundColor = "WhiteSmoke";
        display_filter(elements,"completed");
         })                       
       
        showincompleted.addEventListener('click', function(){
        showincompleted.style.backgroundColor = "yellow";
        showall.style.backgroundColor = "WhiteSmoke";
        showcompleted.style.backgroundColor = "WhiteSmoke";
        search_filter.style.backgroundColor = "WhiteSmoke";
           
        display_filter(elements, "incomplete");
         })        
        showall.addEventListener('click', function(){
        showall.style.backgroundColor = "yellow";
        showincompleted.style.backgroundColor = "WhiteSmoke";
        showcompleted.style.backgroundColor = "WhiteSmoke";
        search_filter.style.backgroundColor = "WhiteSmoke";
           
           
        display(elements);
        })                             
        searchtext.addEventListener('keyup', function() {
        console.log("searchtext keydown and value is", searchtext.innerHTML)        
        display_filter2(elements);           
        })                
         
        search_filter.addEventListener('click', function(){
        search_filter.style.backgroundColor = "yellow";
        showincompleted.style.backgroundColor = "WhiteSmoke";
        showall.style.backgroundColor = "WhiteSmoke";
        showincompleted.style.backgroundColor = "WhiteSmoke";
           
        var t = document.getElementById("searchtext");
            t.disabled = false;  
            t.style.visibility = "visible";
            searchtext.addEventListener('keydown', (display_filter2(elements)));      
        })
         
                                                
        function updatecheckbox(){ 
        var cboxindex = document.getElementById("tasklist") ;   }        
       
                     
        window.onload = function() {   
                      
           if (JSON.parse(localStorage.getItem("Todolist")) != null )
              {                  
               elements = JSON.parse(localStorage.getItem("Todolist"));
               var el = document.createElement("li");
               display(elements) }
                          
             }
                 
                            
        function display(e){
           
          var x = document.getElementById("tasklist");
           var y = document.getElementById("textbutton");
           var z = document.getElementById("task");
           var zz = document.getElementById("myBtn");
           var t = document.getElementById("searchtext");
           t.disabled = true;  
           t.style.visibility = "hidden";
           
                x.innerHTML = "";
                z.disabled = false;
                zz.disabled = false;
        
          $(function(){
            $("#tasklist :input").prop("disabled", false);
             });
                   
           var x = document.getElementById("tasklist");
           var y = document.getElementById("textbutton");
           var z = document.getElementById("task");

                x.innerHTML = "";
                z.value = "";
                z.style.color = "black";
            
                for (let i = 0; i<e.length; i++){
                     var ee = document.createElement("li");
                     var cbox = document.createElement("input");
                  
                 
                      cbox.type = "checkbox";
                      cbox.addEventListener('click', function(){
                      e[i].status = !e[i].status;
                      
                      window.localStorage.setItem("Todolist", JSON.stringify(elements));
                      })
                          
                      const delBtn = document.createElement('button');
                      delBtn.innerHTML = '<i class="fa fa-trash"></i>';
                      delBtn.addEventListener('click', function(){
                     
                      e.splice(i, 1);
                     
                      window.localStorage.setItem("Todolist", JSON.stringify(elements));
                      display(e);
                      })
             
                      const editBtn = document.createElement('button');
                      //editBtn.innerHTML = '<i class="fa fa-trash"></i>';
                      editBtn.innerHTML = '<i class="fa fa-pencil-square-o"></i>';
                      
            
                      editBtn.addEventListener('click', function()   {
                      var x = document.getElementById("myBtn");
                      
                      x.disabled = true;
                      x.innerHTML = "Edit"
                      //$(element).addClass('someclass');
                      
                      
                      var z = document.getElementById("myBtn2");
                      z.disabled = false;
                      z.style.visibility = "visible";
                      z.style.backgroundColor = "red"
                      y = document.getElementById("task");
                      y.style.color = "red";
                      y.focus();
                      //for (let j = 0; i<e.length; j++){
                      
                       $(function(){
                        $("#tasklist :input").prop("disabled", true);
                       });
                       
                                         
                     /* $(document).ready(function(){
                      $("#tasklist: input")
                      $Text.css("background-color", "green");
                      $Text.css("font-weight", "bold");
                      $Text = $("td.ms-cellstyle.ms-vb2:contains('No')");
                      $Text.css("background-color", "red");
                      $Text.css("font-weight", "bold");
                      });                   */
                      //e[i].style.                         
                    
                      y.value = e[i].task;  
                      document.getElementById("myBtn2").disabled = false;
                      
                         myBtn2.addEventListener('click', function(){
                         
                         e[i].task = y.value;   
                       
                         x.disabled = false;
                         x.innerHTML = "Add Task"
                         z.disabled = true;
                         z.style.visibility = "hidden";
                         
                         window.localStorage.setItem("Todolist", JSON.stringify(elements));
                         
                         i = -1;
                         $(document).ready(function(){
                        $("#tasklist :input").prop("disabled", false);
                       });
                         display(e);
                         
                         })
                     
                      //window.localStorage.setItem("Todolist", JSON.stringify(elements));
                  
                      //display(e);
                  
                      })
                      
                      
                      const upBtn = document.createElement('button');
                      upBtn.innerHTML = '<i class="fa fa-angle-double-up"></i>';
                      
                      upBtn.addEventListener('click', function(){
                      var statusholding;
                      var taskholding;
                      if (i != 0) {
                     
                      
                      statusholding = e[i].status;
                      taskholding = e[i].task;
                      
                      e[i].status = e[i-1].status;
                      e[i].task = e[i-1].task;
                     
                      
                      e[i-1].status = statusholding;
                      e[i-1].task = taskholding;
                   
                      window.localStorage.setItem("Todolist", JSON.stringify(elements));
                      
                      display(e);}
                      })
                      
                      const downBtn = document.createElement('button');
                      downBtn.innerHTML = '<i class="fa fa-angle-double-down"></i>';
                      
                      downBtn.addEventListener('click', function(){
                      var statusholding;
                      var taskholding;
                      if (i != e.length) {
                      
                      statusholding = e[i].status;
                      taskholding = e[i].task;
                      
                      e[i].status = e[i+1].status;
                      e[i].task = e[i+1].task;
                      
                      
                      e[i+1].status = statusholding;
                      e[i+1].task = taskholding;
                     
                      window.localStorage.setItem("Todolist", JSON.stringify(elements));
                      
                      display(e);}
                      })
                                    
                      
                      var txtnode = document.createTextNode(e[i].task);
                      
                      cbox.checked = e[i].status; 
                      ee.appendChild(cbox);
                      ee.appendChild(txtnode);
                      ee.appendChild(delBtn);
                      ee.appendChild(editBtn);
                      ee.appendChild(upBtn);
                      ee.appendChild(downBtn);
                      x.appendChild(ee);   
                      
                        }
                  
                    
              }       
               
                    
           var elements = []; 
        
           function addtask(){
               var x = document.getElementById("myBtn");
                                           
              
               if (x.innerHTML != "EDIT")
                {
               var status = false;          
           if (JSON.parse(localStorage.getItem("Todolist")) == null )
              {        
                     
            elements.push({'task': task.value, 'status': status});
            
            window.localStorage.setItem("Todolist", JSON.stringify(elements));
           
               }
            else
            {                
            elements.push({'task': task.value, 'status': status});  
               
            window.localStorage.setItem("Todolist", JSON.stringify(elements));
             }              
            display (elements);
               } 
           }
               
           function display_filter(e, ind){
           var t = document.getElementById("searchtext");
           t.disabled = true;  
           t.style.visibility = "hidden";
           $(function(){
                        $("#tasklist :input").prop("disabled", true);
                       });
                   
           var x = document.getElementById("tasklist");
           var y = document.getElementById("textbutton");
           var z = document.getElementById("task");
           var zz = document.getElementById("myBtn");
           var zzz = document.getElementById("showall");
           var zzzz = document.getElementById("showcompleted");
           var zzzzz = document.getElementById("search_filter");
            var t = document.getElementById("searchtext");
                x.innerHTML = "";
                z.disabled = true;
                zz.disabled = true;
                
                for (let i = 0; i<e.length; i++){
                     var ee = document.createElement("li");
                     var cbox = document.createElement("input");
                   
                      cbox.type = "checkbox";
                       
                      var txtnode = document.createTextNode(e[i].task);
                      
                      cbox.checked = e[i].status; 
                      if (e[i].status == true && ind == "completed") {
                      
                      ee.appendChild(cbox);
                      ee.appendChild(txtnode);
                      
                      x.appendChild(ee);   
                               }
                     
                      if (e[i].status == false && ind == "incomplete") {
                      
                      ee.appendChild(cbox);
                      ee.appendChild(txtnode);
                      
                      x.appendChild(ee);   
                               }

                }
              
              }       
               
           
    function display_filter2(e){
           
           $(function(){
                        $("#tasklist :input").prop("disabled", true);
                       });
                   
           var x = document.getElementById("tasklist");
           var y = document.getElementById("textbutton");
           var z = document.getElementById("task");
           var zz = document.getElementById("myBtn");
           var zzz = document.getElementById("showall");
           var zzzz = document.getElementById("showcompleted");
           var zzzzz = document.getElementById("search_filter");
           var t = document.getElementById("searchtext");
           t.disabled = false;
                     
                x.innerHTML = "";
                z.disabled = true;
                zz.disabled = true;
                
                t.disabled = false;
                
                
                for (let i = 0; i<e.length; i++){
                     console.log("loop, i is",i, "and input value is", t.value );
                     var ee = document.createElement("li");
                     var cbox = document.createElement("input");
                
                      cbox.type = "checkbox";
                            
                      var str1 = String(t.value);
                      var str2 = String(e[i].task);
                      
                      var txtnode = document.createTextNode(e[i].task);
                      
                      cbox.checked = e[i].status; 
                      console.log("comparing string input value", str1, "e[i] task", str2);
                      n =  str2.includes(str1); 
                      console.log("n is true or false?", n);
                      if (n == true) {
                      console.log("status is checked, completed", e[i].status);
                      ee.appendChild(cbox);
                      ee.appendChild(txtnode);
                      
                      x.appendChild(ee);   
                               }
                        }
              
              }       
    
           var elements = []; 
    
           function addtask(){
             if (task.value != "") {
             var x = document.getElementById("myBtn");
  
               if (x.innerHTML != "EDIT")
               {
               var status = false;          
    
          if (JSON.parse(localStorage.getItem("Todolist")) == null )
              {          
              elements.push({'task': task.value, 'status': status});
              window.localStorage.setItem("Todolist", JSON.stringify(elements));
              }
          else
              {                    
              elements.push({'task': task.value, 'status': status});  
              window.localStorage.setItem("Todolist", JSON.stringify(elements));
             }              
              display (elements);
               } 
           }    
           }             
               
               
               
               
               
               
   

   