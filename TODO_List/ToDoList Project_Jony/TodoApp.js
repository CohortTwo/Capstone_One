
/*function addTask(){
 var el = document.createElement("li");
 var tasktext = document.getElementById("task").value;
 el.innerHTML = tasktext;
 var ulref = document.getElementById("tasklist");
 ulref.appendChild(el);
 document.getElementById("task").value = "";


}*/


 /*task.addEventListener("keyup", function(){
  if(task.value !=== undefined)
  addBtn.disabled = false;
 }
 else{
  addBtn.disabled = true;
 })*/
 
task.addEventListener("keyup", function(){
  addBtn.disabled = false;
})


var tasks = [];

var data = window.localStorage.getItem("todoList");

function loadhappened(){
 //var data = window.localStorage.getItem("todoList");
 if(data !== null){
  tasks = JSON.parse(data);
  genList(tasks);
 }
}

function addTask(){
var tasktext = document.getElementById("task").value;
var status = false;
tasks.push({'task':tasktext, 'status':status});
window.localStorage.setItem("todoList", JSON.stringify(tasks));
genList(tasks);

document.getElementById("task").value=""; //clear the textfield after each event
document.getElementById("task").focus(); //put focus back to textfield

}

function genList(alltasks){  //genList(tasks) is fine too
var ulref = document.getElementById("tasklist");
ulref.innerHTML="";
//for(var i=0;i<=alltasks.length-1;i++){
 for(let i=0;i<=alltasks.length-1;i++){ //use let not var
var el = document.createElement("li");
var statusBox = document.createElement("input");
statusBox.type="checkbox";
statusBox.checked = alltasks[i].status; //keep the status
statusBox.addEventListener("click", function(){
 alltasks[i].status = !alltasks[i].status
})
//statusBox.checked = alltasks[i].status; //keep the status
window.localStorage.setItem("todoList", JSON.stringify(alltasks));
var tasktextel = document.createTextNode(alltasks[i].task);

var delBtn = document.createElement("i");
delBtn.classList.add("fas", "fa-trash-alt");
delBtn.addEventListener("click", function(){
alltasks.splice(i,1);
window.localStorage.setItem("todoList", JSON.stringify(alltasks));
genList(alltasks);
})  //try also include a dialog box to confirm to delete or not

var editBtn = document.createElement('i');
editBtn.classList.add('far', 'fa-edit');
editBtn.addEventListener('click', function(){
  var edittxt = prompt("You can edit the task here:");
  if(edittxt.value == 0 || edittxt.value == ""){
    return false;
    }
    else{
      return true;
      task = edittxt.value
    }
  

})

var upBtn = document.createElement('i');
upBtn.classList.add('fas', 'fa-arrow-alt-circle-up');
upBtn.addEventListener('click', function(){
  if(alltasks.i == 0){
    alltasks[i] == alltasks [i];
    window.localStorage.setItem("todoList", JSON.stringify(alltasks));
  genList(alltasks);
  }
  else if(alltasks.i !== 0){
    let temp = alltasks[i];
  alltasks[i] = alltasks[i-1];
  alltasks[i-1] = temp;
  window.localStorage.setItem("todoList", JSON.stringify(alltasks));
  genList(alltasks);}
})

var downBtn = document.createElement('i');
downBtn.classList.add('fas', 'fa-arrow-alt-circle-down');
downBtn.addEventListener('click', function(){
  if(alltasks.i == alltasks.length-1){
    alltasks[i] == alltasks [i];
    window.localStorage.setItem("todoList", JSON.stringify(alltasks));
  genList(alltasks);
  }
  else if(alltasks.i !== alltasks.length-1){
    var temp = alltasks[i];
  alltasks[i] = alltasks[i+1];
  alltasks[i+1] = temp;
  window.localStorage.setItem("todoList", JSON.stringify(alltasks));
  genList(alltasks);}
})

el.appendChild(statusBox);
el.appendChild(tasktextel);
el.appendChild(delBtn);
el.appendChild(editBtn);
el.appendChild(upBtn);
el.appendChild(downBtn);
ulref.appendChild(el);

}
}

function filterComplete(){
document.getElementById('mainList').style.display = 'none';
document.getElementById('fdiv').style.display = 'block';  
var fdata = window.localStorage.getItem("todoList");
 if(fdata !== null || fdata !== ""){
  var ftasks = JSON.parse(fdata);
  var complist = document.createElement('li');
  //ftasks = document.getElementById('alltasks').task;
  for (let i = 0; i <= ftasks.length-1; i++)
  ftasks[i].innerHTML = ftasks[i].status.checked===true;
  complist.appendChild(ftasks);
  document.getElementById("compul").appendChild(complist);
  document.getElementById("fdiv").appendChild(compul)
 }
}

function filterIncomplete(){

}

function showAll(){

}

function searchList(){
   var input, filter, ul, li;
  input = document.getElementById('searchBar');
  filter = input.value.toUpperCase();
  ul = document.getElementById("tasklist");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, hide those who don't match the search query
  for (var i = 0; i < li.length; i++) {
    var txtValue = li[i].textContent || li[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}









