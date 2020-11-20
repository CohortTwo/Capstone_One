
// Create a new Task when clicking on the "Add" button
var task = [];
var displayMessage;
var searchText = "";
function loadData(e) {
    var storeData = window.localStorage.getItem("toDoList");
    displayMessage = e;
    if (storeData !== null) {
        task = JSON.parse(storeData);
       
        genList(task);
    }
   
}
function addTask(e){
    var text = document.getElementById("task").value;
    var status = false;
    
    var taskobj = {"Text": text, "status": status };
    task.push(taskobj);
    document.getElementById("task").value = null;
    window.localStorage.setItem("toDoList", JSON.stringify(task));
    genList(task);

}

function genList(task) {
    var urel = document.getElementById("toDoList");
  
    urel.innerHTML = "";
    for (let i = 0; i < task.length; i++) {
        //   &&&&& Create 1 task
        var li = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.classList = "column1";
        var t = document.createTextNode(task[i].Text);
        td1.appendChild(t);  
        li.Name = "toDoList";
        li.className = "toDoList";
        li.classList = "toDoList";
        li.appendChild(td1);

        //  ******************Add the checkbox to each Li *******************************
        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        var t = document.createTextNode(task[i].Text);
        checkBox.name = "checkbox";
        checkBox.checked = task[i].status;
        checkBox.addEventListener("click", function (e) {
            task[i].status = !task[i].status;
            window.localStorage.setItem("toDoList", JSON.stringify(task));
        })
        li.appendChild(checkBox);

        //  *********************Add the delete  to each Li ***************************
        var deleteButton = document.createElement("button");
        var xString = document.createTextNode("X");
        deleteButton.appendChild(xString);
        deleteButton.className = "deleteButton";
        deleteButton.classList = "deleteButton";
        deleteButton.addEventListener("click", function (e) {

            task.splice(i, 1);
            window.localStorage.setItem("toDoList", JSON.stringify(task));
            genList(task);

        })
        li.appendChild(deleteButton);

        /**************** Add the Edit Button to each Li **********************/
        var editButton = document.createElement("button");
        var editString = document.createTextNode("Edit");
        editButton.className = "editButton";
        editButton.classList="editButton"
        editButton.appendChild(editString);

        editButton.addEventListener("click", function (e) {

            var editInput = document.createElement("input");
            editInput.type = "text";
            editInput.id = "editInput";
            console.log(task[i].Text);
            editInput.value = task[i].Text;

            var confirmButton = document.createElement("button");
            var confirmString = document.createTextNode("confirm");
            confirmButton.appendChild(confirmString);

            confirmButton.addEventListener("click", function () {
                task[i].Text = document.getElementById("editInput").value;
                genList(task);
                window.localStorage.setItem("toDoList", JSON.stringify(task));
                document.body.removeChild(editInput);
                document.body.removeChild(confirmButton);

            })

            document.body.appendChild(editInput);
            document.body.appendChild(confirmButton);

        })
        li.appendChild(editButton);

           // *************** Up Button ********************88
            var upButton = document.createElement("button");
            var upString = document.createTextNode("Up");
        upButton.className = "upButton";
        upButton.classList = "upButton";
            upButton.appendChild(upString);
    
            upButton.addEventListener("click", function (e) {
                var tempObj = {};
                if (i == 0) {
                    alert("It is the top so cannot move");
                } else {
                    tempObj = task[i - 1];
                    task[i - 1] = task[i];
                    task[i] = tempObj;
                    window.localStorage.setItem("toDoList", JSON.stringify(task));
                    genList(task);
                    
                }
    
    
            })
    
        li.appendChild(upButton);

        // *****************down Button ***************
        var downButton = document.createElement("button");
        var downString = document.createTextNode("Down");
        downButton.className = "downButton";
        downButton.appendChild(downString);

        downButton.addEventListener("click", function (e) {
            var tempObj = {};
            if (i == (task.length-1)) {
                alert("It is the bottom so cannot move");
            } else {
                tempObj = task[i + 1];
                task[i + 1] = task[i];
                task[i] = tempObj;
                window.localStorage.setItem("toDoList", JSON.stringify(task));
                genList(task);
               
            }
        })

        li.appendChild(downButton);
        if (searchText === "") {

            if (displayMessage == 'All') { li.hidden = false; }
            if (displayMessage == 'Complete' && task[i].status !== true) { li.hidden = true; }
            if (displayMessage == 'InComplete' && task[i].status == true) { li.hidden = true; }
       } else {

            var substringtask = task[i].Text.substring(0, searchText.length);

            if (substringtask.toUpperCase() !== searchText.toUpperCase()) { li.hidden = true; }
            if (displayMessage == 'Complete' && task[i].status !== true ) { li.hidden = true; }
            if (displayMessage == 'InComplete' && task[i].status == true) { li.hidden = true; }
        }


     //   if(document.getElementById)

        document.getElementById("toDoList").appendChild(li);
    }
}
function search(e) {
    
    searchText = document.getElementById("search").value;
    
    genList(task);
   
}