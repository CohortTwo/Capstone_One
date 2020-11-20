function fillFields() {
document.getElementById("userID").value = "andyong";
document.getElementById("password").value = "password";
document.getElementById("name").value = "Andy Ong";   
document.getElementById("address").value = "4th Positivity Street";
document.getElementById("countrySelector").value = "SG";
document.getElementById("zipcode").value = 1234; 
document.getElementById("email").value = "andyong17@gmail.com";
document.getElementsByName("gender")[0].checked = true;
document.getElementsByName("language")[0].checked = true;
document.getElementsByName("language")[1].checked = true;
document.getElementById("about").value = "This is a test message.";
enableSubmit();
}

/* This function should apply validating functions on the field data and return
 * either true or false. False always means fails and fails should disqualify
 * the data, data should not depend on failing test to be legit. Instead of
 * sqeezing multiple tests together in functions, function should be framework
 * that accept parts. */
//function validate(field, ...func) { 
//}

function verify(min, max, inputBox, errorDisplayLoc) {
	let inputString = document.getElementById(inputBox).value;

	if (inputString.length < min || inputString.length > max) {
		let errorMsg = document.getElementById(errorDisplayLoc);
		errorMsg.innerHTML = `Required and must be of length ${min} to ${max}.`;
	} else {
		let errorMsg = document.getElementById(errorDisplayLoc);
		errorMsg.innerHTML = "";
	}
}

function checkName(errorDisplayLoc) { 
	let inputString = document.getElementById("name").value;

	if (containNumber(inputString)) {
		let errorMsg = document.getElementById(errorDisplayLoc);
		errorMsg.innerHTML = "Required and alphabets only."
	} else if (inputString.trim() === "") {
		let errorMsg = document.getElementById(errorDisplayLoc);
		errorMsg.innerHTML = "Required and alphabets only."
	} else {
		let errorMsg = document.getElementById(errorDisplayLoc);
		errorMsg.innerHTML = "";
	}
}

function checkZip(errorDisplayLoc) {
	let inputString = document.getElementById("zipcode").value;

	if (containAlphabet(inputString)) {
		let errorMsg = document.getElementById(errorDisplayLoc);
		errorMsg.innerHTML = "Required and numbers only."
	} else if (inputString.trim() === "") {
		let errorMsg = document.getElementById(errorDisplayLoc);
		errorMsg.innerHTML = "Required and numbers only."
	} else {
		let errorMsg = document.getElementById(errorDisplayLoc);
		errorMsg.innerHTML = "";
	}
}

function containNumber(text) {
	let unwantedChar = /\d+/;
	return text.match(unwantedChar) === null ? false : true;
}

function containAlphabet(text) {
	let unwantedChar = /[^0-9]+/;
	return text.match(unwantedChar) === null ? false : true;
}

function checkCountrySelector(errorDisplayLoc) {
	let inputString = document.getElementById("countrySelector");
	if (inputString.value === "none") {
		let errorMsg = document.getElementById(errorDisplayLoc);
		errorMsg.innerHTML = "Required. Must select a country."
	} else {
		let errorMsg = document.getElementById(errorDisplayLoc);
		errorMsg.innerHTML = "";
	}
}

function checkEmail(errorDisplayLoc) { 
	let inputString = document.getElementById("email");

	const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (res.test(inputString.value)) { // true = valid email.
		let errorMsg = document.getElementById(errorDisplayLoc);
		errorMsg.innerHTML = "";
	} else {
		let errorMsg = document.getElementById(errorDisplayLoc);
		errorMsg.innerHTML = "Required. Must be a valid email."
	}
}

function getLanguages() {
	/* Retrieve checked values from the language check boxes */
	let languages = []; // language is an array field
	let lang = document.getElementsByName("language");
	lang.forEach( item => (item.checked) ? languages.push(item.id) : null );
	return languages;
}

function removeWarningRadio(errorDisplayLoc) {
	let maleRadioButton      = document.getElementById("male");
	let femaleRadioButton 	 = document.getElementById("female");

	if (maleRadioButton.checked || femaleRadioButton.checked) {
		let errorMsg = document.getElementById(errorDisplayLoc);
		errorMsg.innerHTML = "";
	}
}

function getGender() {
	isMale   = document.getElementsByName("gender")[0].checked;
	return isMale ? "male" : "female";
}

function checkCheckBoxes(errorDisplayLoc) {
	let inputString = document.getElementById("english");
	let inputString2 = document.getElementById("nonenglish");

	if (inputString.checked || inputString2.checked) {
		let errorMsg = document.getElementById(errorDisplayLoc);
		errorMsg.innerHTML = "";
	} else {
		let errorMsg = document.getElementById(errorDisplayLoc);
		errorMsg.innerHTML = "Required.";
	}
}

/* Auto validation of all inputs on Keyups and clicks */

//document.addEventListener("keyup", enableSubmit);
//document.addEventListener("click", enableSubmit);
document.addEventListener("change", enableSubmit);

function enableSubmit() {
	checkCheckBoxes("errorMsg8");
	removeWarningRadio("errorMsg7");

	if (validInputBoxes() && 
		validRadio()	  && 
		validCheckBoxes() &&
		validSelector()) {
		document.getElementById("submit").disabled = false ;
		document.getElementById("submit").onclick = buttonClicked;
		document.getElementById("tooltiptext").innerHTML = "Please click to submit form.";
	} else {
		document.getElementById("submit").disabled = true;
		document.getElementById("tooltiptext").innerHTML = "Invalid form. Please fill in all the required fields with valid details!";
	}
}

function validInputBoxes() {
	let haveEmptyInputBoxes   = checkForEmptyInputBoxes().includes(true);
	let haveInvalidInputBoxes = checkForInvalidInputBoxes().includes(true);
	return (haveEmptyInputBoxes || haveInvalidInputBoxes) ? false : true;
}

function validCheckBoxes() {
	errormsg = document.getElementById("errorMsg8");
	return (errormsg.innerHTML == "") ? true : false;
}

function validSelector() {
	/* Does validation on country selector. Necessary because user might skipped
	 * the field altogether and no error messages would have exist in errormsg4
	 **/
	checkCountrySelector('errorMsg4'); 

	errormsg = document.getElementById("errorMsg4");
	return (errormsg.innerHTML == "") ? true : false;
}

function validRadio() {
	errormsg = document.getElementById("errorMsg7");
	return (errormsg.innerHTML == "") ? true : false;
}

function checkForInvalidInputBoxes() {
	inputBoxErrorArray = 
		["errorMsg1", "errorMsg2", "errorMsg3", "errorMsg5", "errorMsg6"]

	result = inputBoxErrorArray.map( errorMsg => {
		errormsg = document.getElementById(errorMsg);
		return (errormsg.innerHTML == "") ? false : true;
	});
	return result;
}

function checkForEmptyInputBoxes() {
	inputBoxArray = ["userID", "password", "name", "zipcode", "email"]
	result = inputBoxArray.map( inputBox => {
		inputbox = document.getElementById(inputBox)
		if (inputbox != null) 
			return inputbox.value == "" ? true : false;
		else 
			return false;
	});
	return result;
}

function buttonClicked(event) {
	event.preventDefault(); 
	formData = save();
	reVamp(formData);
}

function save() {
	formData = {}; // Object to hold inputted form data

	/* Populating the object with inputted form data */
	formData["userID"]    = document.getElementById("userID").value;
	formData["password"]  = document.getElementById("password").value;
	formData["name"]      = document.getElementById("name").value;
	formData["address"]   = document.getElementById("address").value;
	formData["country"]   = document.getElementById("countrySelector").value;
	formData["zipcode"]   = document.getElementById("zipcode").value;
	formData["email"]     = document.getElementById("email").value;
	formData["gender"]    = getGender(); 
	formData["languages"] = getLanguages();
	formData["about"]     = document.getElementById("about").value;
	return formData;
}

function createRow(key, value) {
	let row = document.createElement("tr"); 
	let th  = document.createElement("th");
	let td  = document.createElement("td");
	th.classList.add("rowheader");
	td.classList.add("inputbox");

	th.innerHTML = key;
	td.innerHTML = value;

	row.appendChild(th);
	row.appendChild(td);
	return row;
}

function createNewTable() {
	table = document.createElement("table");
	table.id = "previewTable";
	table.cellPadding = "5px";
	table.cellSpacing = "5px";
	return table;
}

function generateTable(formData) {
	table = createNewTable();
	for (let i = 0; i < Object.keys(formData).length; i++) {

		row = createRow(Object.keys(formData)[i], 
						Object.values(formData)[i])

		table.appendChild(row);
	}
	return table;
}


function reVamp(formData) {
	document.getElementById("heading1").innerHTML = "Review Details";

	generatedTable = generateTable(formData);
	
	testRow = createRow();
	testRow.removeChild(testRow.cells[1]);
	testRow.cells[0].innerHTML = 
		"<input type='button' id='revert' name='submit' value='Revert' onclick='revertClicked(event, table1, formData)'>"
	testRow.cells[0].classList.remove("rowheader");
	testRow.cells[0].classList.add("submitbutton");
	testRow.cells[0].colSpan=2;
	testRow.cells[0].align="center";
	generatedTable.appendChild(testRow);

	table1 = document.getElementById("table1");
	document.body.removeChild(table1);

	document.body.appendChild(generatedTable);
}

function revertClicked(event, oldTable, formData) {
	event.preventDefault();
	document.getElementById("heading1").innerHTML = "Registration Form";

	previewTable = document.getElementById("previewTable");

	document.body.removeChild(previewTable);
	document.body.appendChild(oldTable);

}


