let taskList = [];
let view 	 = {"filter" : "all"};

/* Loading data from localStorage into taskList */
if (typeof(Storage) !== "undefined") {
	let storedData = JSON.parse(localStorage.getItem("todo"))
	taskList   	   = (storedData != null) ? storedData : [];
	storedData 	   = JSON.parse(localStorage.getItem("config"))
	view 	   	   = (storedData != null) ? storedData : {"filter": "all"} ;
	genTable(taskList, view);
	setFilterSelection(view);
} else alert("No web Storage support...");

function setFilterSelection(view) {
	document.getElementById("showTasks").value = view.filter;
}

/* Update localStorage before leaving page */
window.addEventListener("beforeunload", () => {
	data = JSON.stringify(taskList);
	localStorage.setItem("todo", data);
	data = JSON.stringify(view);
	localStorage.setItem("config", data);
});

/* Add button pressed event handling */
function addTask(inputID) {
	let desc = document.getElementById(inputID).value;
	let data = {"desc": desc, "completed": false}; 
	taskList.push(data);
	genTable(taskList, view);
}

/* Checkbox activities handling */
document.addEventListener("click", (event) => {
	let isCheckBox    	  = event.target.type === "checkbox";
	let isCheckBoxChecked = event.target.checked;

	if (isCheckBox && isCheckBoxChecked) {
		let rowIndex = event.target.parentNode.parentNode.sectionRowIndex;
		taskList[rowIndex].completed = true;
		genTable(taskList, view);
	} else if (isCheckBox && (!isCheckBoxChecked)) {
		let rowIndex = event.target.parentNode.parentNode.sectionRowIndex;
		taskList[rowIndex].completed = false;
		genTable(taskList, view);
	}
});

/* Delete event handling */
document.addEventListener("click", (event) => {
	let isDeleteEvent = event.target.id === "delete";
	if (!isDeleteEvent) 
		return;
	
	let rowIndex = event.target.parentNode.sectionRowIndex;
	if ((taskList.length-1) == rowIndex) 
		taskList.pop();
	else {
		front 	 = taskList.slice(0, rowIndex);
		back     = taskList.slice(rowIndex+1, taskList.length);
		taskList = front.concat(back);
	}
	genTable(taskList, view);
});

/* Up or Down event handling */
document.addEventListener("click", (event) => {
	let isUpEvent = event.target.id === "up";
	let isDownEvent = event.target.id === "down";
	if (!isUpEvent && !isDownEvent) 
		return;
	
	let rowIndex = event.target.parentNode.sectionRowIndex;
	if (rowIndex == 0 && isUpEvent)
		return;
	else if (rowIndex == (taskList.length-1) && isDownEvent)
		return;
	else if (isUpEvent) {
		let temp = taskList[rowIndex-1];
		taskList[rowIndex-1] = taskList[rowIndex];
		taskList[rowIndex]   = temp;
	} else if (isDownEvent) {
		let temp 			 = taskList[rowIndex+1];
		taskList[rowIndex+1] = taskList[rowIndex];
		taskList[rowIndex]   = temp;
	}
	genTable(taskList, view);
});

/* Description edit handling */
document.addEventListener("click", (event) => {
	let isEditEvent = event.target.id === "edit";
	if (!isEditEvent) return;

	row		 = event.target.parentNode;
	rowIndex = row.sectionRowIndex;
	tdDesc 	 = row.cells["desc"].innerHTML

	textBox  = createTextBox(tdDesc);

	row.deleteCell(1);
	row.insertCell(1);
	row.cells[1].appendChild(textBox);

	textBox.focus();
	textBox.select();
});

//document.addEventListener("focusout", editSubmitted);
document.addEventListener("keyup", editSubmittedEntered);

function editSubmitted(event) {
	let isExitEditEvent = event.target.id === "editBox";
	if (!isExitEditEvent) 
		return;
	
	textBox  	 = event.target;
	row      	 = textBox.parentNode.parentNode; 
	rowIndex  	 = row.sectionRowIndex;
	tempDesc 	 = textBox.value;
	tempCompeted = row.cells["checkbox"].firstElementChild.checked;

	console.log("focus losed");

	row.deleteCell(1);
	row.insertCell(1);
	row.cells[1].id = "desc";
	row.cells["desc"].appendChild(textBox);
	row.cells["desc"].innerHTML = tempDesc;

	taskList = deleteAt(taskList, rowIndex);
	taskList = insertAt(taskList, rowIndex, tempDesc, tempCompeted);
}

function editSubmittedEntered(event) {
	let isExitEditEvent = event.target.id === "editBox";
	if (!isExitEditEvent) return;
	if (event.type == "keyup" && event.key !== "Enter") return;
	
	textBox  	 = event.target;
	row      	 = textBox.parentNode.parentNode; 
	rowIndex  	 = row.sectionRowIndex;
	tempDesc 	 = textBox.value;
	tempCompeted = row.cells["checkbox"].firstElementChild.checked;

	row.deleteCell(1);
	row.insertCell(1);
	row.cells[1].id = "desc";
	row.cells["desc"].appendChild(textBox);
	row.cells["desc"].innerHTML = tempDesc;

	taskList = deleteAt(taskList, rowIndex);
	taskList = insertAt(taskList, rowIndex, tempDesc, tempCompeted);
}

/* Filter change event handling */
function changeView() {
	let selection = document.getElementById("showTasks").value;
	view.filter = selection;
	genTable(taskList, view);
}

let descriptions;
let result;
let searchList = [];
window.addEventListener("keyup", event => {
	let isSearchBoxEvent = event.target.id === "searchBox";
	if (!isSearchBoxEvent) return; 

	input = event.target.value;
	if (input == undefined) return

	descriptions = taskList.map( i => i.desc );
	result 		 = descriptions.map( i => match(i, input));

	console.log(result);
	searchList = [];
	for (let i = 0; i < taskList.length; i++) {
		if (result[i].length > 0) {
			searchList.push(taskList[i]);
		} 
	}
	genTable(searchList,view);
});

function match(target, keyword) {
	let targetItems = target.split(" ");
	targetItems = 
		targetItems
			.filter( i => i.length >= keyword.length )
			.filter( i => i.slice(0, keyword.length).toLowerCase() == keyword.toLowerCase() );
	return targetItems;
}

function insertAt(array, pos, desc, completed) {
	if ((array.length) == pos) 
		array.push({"desc": desc, "completed": completed});
	else if (pos == 0) 
		array = [{"desc": desc, "completed": completed}].concat(array);
	else {
		front = array.slice(0, pos);
		back  = array.slice(pos, array.length);
		front.push({"desc": desc, "completed": completed});
		array = front.concat(back);
	}
	return array;
}

function deleteAt(array, pos) {
	if ((array.length-1) == pos) 
		array.pop();
	else if (pos == 0) 
		array = array.slice(1,array.length);
	else {
		front = array.slice(0,pos);
		back  = array.slice(pos+1, array.length);
		array = front.concat(back);
	}
	return array
}

function createTextBox(desc) {
	textBox 	  = document.createElement("input");
	textBox.type  = "text";
	textBox.value = desc;
	textBox.id	  = "editBox";
	return textBox;
}

function genTable(array, view) {
	let table     = document.getElementById("list");
	let old_tbody = document.getElementById("table_body");
	let new_tbody = document.createElement('tbody');

	if (view.filter === "all") 
		filter = array
	else if (view.filter === "completed")
		filter = array.filter( i => i.completed == true);
	else if (view.filter === "notCompleted")
		filter = array.filter( i => i.completed == false);


	let length = old_tbody.rows.length;
	for (let k = 0; k < length; k++)
		old_tbody.deleteRow(0);
	
	for (let i = 0; i < filter.length; i++)  
		old_tbody.appendChild(
			createRow(filter[i].desc, filter[i].completed));
}

function createRow(desc, completed) {
	let tr 		   = document.createElement("tr");
	let tdCheckBox = document.createElement("td");
	let checkBox   = document.createElement("input");
	let tdDesc 	   = document.createElement("td");
	let tdCross	   = document.createElement("td");
	let tdUp	   = document.createElement("td");
	let tdDown	   = document.createElement("td");
	let tdEdit	   = document.createElement("td");

	checkBox.type 	  = "checkbox";
	checkBox.checked  = completed;

	tdCheckBox.id     = "checkbox";
	tdCheckBox.appendChild(checkBox);

	tdDesc.id		  = "desc";
	tdDesc.innerHTML  = desc;

	tdCross.id	 	  = "delete";
	tdCross.innerHTML = "&cross;"

	tdUp.id 		  = "up"
	tdUp.innerHTML 	  = "&#9650;"

	tdDown.id 		  = "down"
	tdDown.innerHTML  = "&#9660;"

	tdEdit.id		  = "edit"
	tdEdit.innerHTML  = "&#x270D;"

	tr.appendChild(tdCheckBox);
	tr.appendChild(tdDesc);
	tr.appendChild(tdCross);
	tr.appendChild(tdUp);
	tr.appendChild(tdDown);
	tr.appendChild(tdEdit);
	return tr;
}
