let stack = { bot : null, 
			  top : [], 
			  mem : null,
	       	  "0" : [], 
			  "1" : [], 
	  		  "2" : [], 
			  "3" : [],
			  MR  : false}

window.addEventListener("keyup", (event) => {
	/* when number keys are pressed */
	if (["0","1","2","3","4","5","6","7","8","9"]
			.map(num => num == event.key)
			.reduce((a,v) => (v) ? v : a , false))  {
		numInput(event);
	}

	if (["+", "-", "*", "/", "="]
			.map(oper => oper == event.key)
			.reduce((a,v) => (v) ? v : a , false))  {
		operInput(event);
	} 

});

window.addEventListener("click", (event) => {
	/* when number keys are pressed */
	if (["0","1","2","3","4","5","6","7","8","9"]
			.map(num => validateEvent(event, num))
			.reduce((a,v) => (v) ? v : a , false))  {
		numInput(event);
	}

	/* when operator keys are pressed */
	if (["+", "-", "*", "/", "="]
			.map(oper => validateEvent(event, oper))
			.reduce((a,v) => (v) ? v : a , false))  {
		operInput(event);
	}

	/* when the CE key is pressed */
	if (validateEvent(event, "CE")) 
		clearEntry(event);

	/* when the Backspace key is pressed */
	if (validateEvent(event, "BS")) 
		backSpace(event);
	
	/* when memory buttons are pressed */
	if (["MC", "MS", "MR", "M+", "M-"]
			.map(oper => validateEvent(event, oper))
			.reduce((a,v) => (v) ? v : a , false))  {
		memFunc(event);
	}
});

function redraw() {
	let bot = document.getElementById("displayBot");
	let top = document.getElementById("displayTop");
	let his = document.getElementById("displayHistory");

	/* Refresh bottom display panel */
	bot.innerHTML = 
		(stack.bot != null) ? stack.bot.toString() : null;

	/* Refresh top display panel */
	if (stack.top.length == 2) 

		top.innerHTML = 
			stack.top[0].toString() + " " + stack.top[1];
	
	else if ((stack.top.length == 4) && 
		     (stack.bot == null)) {

		top.innerHTML = "";

	} else if (stack.top.length ==4)  {

		let num1 = stack.top[0].toString();
		let oper = stack.top[1];
		let num2 = stack.top[2].toString();
		let equ	 = stack.top[3];

		top.innerHTML = 
			num1 + " " + oper + " " + num2  + " " + equ;

	} else if (stack.top.length == 0) {

		top.innerHTML = "";

	}

	/* Refresh history panel */
	let hisList = genSeq(4).map(i => i.toString()); 
	hisList.map(i => {
		
		if (stack[i].length == 0)
			return;

		else {
			let num1 = stack[i][0].toString();
			let oper = stack[i][1];
			let num2 = stack[i][2].toString();
			let equ	 = stack[i][3];
			let num3 = stack[i][4].toString();

			let str = 
				num1 + " " + oper + " " + num2 + " " + equ + " " + num3;

			let text = 
				document.createElement("p");

			text.innerHTML = str;

			his.appendChild(text);
		}
	});
}

function memFunc(event) {
	/* If the MR flag is on. Off it */
	if (stack.MR == true) 
		stack.MR = false;

	let memKey = event.target.innerHTML;
	
	if (memKey == "M+") 
		stack.mem += stack.bot;  

	if (memKey == "MR") {

		if ((stack.top.length == 4) && (stack.MR != null)) 
			stack.top = [];
		
		stack.bot = (stack.mem == null) ? stack.bot : stack.mem;
		stack.MR  = true;

		redraw();
	}

	if (memKey == "MC") 
		stack.mem = null;

	if (memKey == "MS") {
		stack.mem = stack.bot;

		redraw();
	}

	if (memKey == "M-") {
		stack.mem -= stack.bot;

		redraw();
	}
}

function clearEntry(event) {
	/* If the MR flag is on. Off it */
	if (stack.MR == true) 
		stack.MR = false;

	stack.bot = null;
	stack.top = [];
	redraw();
}

function backSpace(event) {
	/* If the MR flag is on. Off it */
	if (stack.MR == true) 
		stack.MR == false;

	if (stack.bot == null) {
		return;
	}
	if (stack.bot.toString().length > 0) {
		stack.bot = stack.bot.toString().slice(0, stack.bot.toString().length-1);
		redraw();
	}
}

function operInput(event) {
	/* If the MR flag is on. Off it */
	if (stack.MR == true) 
		stack.MR == false;

	let operKey;
	/* Get input operator char */
	if (event.type == "click") {
		operKey = event.target.id;
		redraw();
	} else if (event.type == "keyup") {
		operKey = event.key;
		redraw();
	}

	let isEqu   = operKey == "=";

	/* No operands at bot, just bail */
	if (stack.bot == null) {
		console.log("Enter a number first.");

		return;
	}

	/* No data at top, operand present on bot panel */
	if ((stack.bot != null) && 
		(stack.top.length == 0) &&
		(!isEqu)) {

		let num1 = stack.bot;
		let oper = operKey;

		stack["top"] = [stack.bot, operKey];
		stack.bot = null;

		redraw();
		return;
	}
	
	/* Top with 1 operand and 1 operator present, bot with an operand, equal sign pressed.
	 */
	if ((stack.bot != null) && 
		(stack.top.length == 2) &&
		(isEqu)) {

		let num1 = stack["top"][0];
		let num2 = stack["bot"];
		let oper = stack["top"][1];
		let num3 = mathEval(num1, oper, num2);

		if (num3 == undefined) {
			console.log(num1 + " " + num2 + " " + oper);
		}


		stack["top"] = [num1, oper, num2, "="]
		stack["bot"] = num3;

		redraw();
		return;
	}

	/* Top with 1 operand and 1 operator present, bot with an operand,
	 * operator pressed.
	 */
	if ((stack.bot != null) &&
		(stack.top.length == 2) &&
		(!isEqu)) {

		let num1 = stack["top"][0];
		let oper = operKey;
		let num2 = stack["bot"];
		let num3 = mathEval(num1, oper, num2);

		stack["bot"] = null;
		stack["top"] = [num3, oper];

		redraw();
		return;
	}

	/* Top with 2 operands and 1 operator and an equal sign. An
	 * operator (not equal sign) pressed */
	if ((stack.bot != null) &&
		(stack.top.length == 4) &&
		(!isEqu)) {

		let num1 = stack["bot"];
		let oper = operKey; 

		stack["top"] = [num1, oper];
		stack["bot"] = null; 

		redraw();
		return
	}

	//botAddOper(operKey);
	redraw();

}

function numInput(event) {
	/* Get input numerical char or num key pressed */
	let numKey;
	if (event.type == "click") {
		numKey = event.target.innerHTML;
		redraw();
	} else if (event.type == "keyup") 
		numKey = event.key;

	/* When the MR flag is up. Permutations affected by it must be taken care
	 * of. They include:- 
	 *
	 * (1) If you press "MR" right after a result is displayed. The panels
	 * should be cleared before the reveal takes place. 
	 *
	 * (2) After a "MR" press any number input should not APPEND to the number
	 * revealed! The revealed number should be cleared first.
	 */
	if ((stack.bot != null) && (stack.top.length == 4) && (stack.MR == true)) {

		stack.MR  = false;
		stack.top = [];
		stack.bot = null;

		redraw();
		return;

	} else if ((stack.MR == true) && (stack.bot != null)) {

		stack.MR  = false;
		stack.bot = parseInt(numKey);

		redraw();
		return;
	}

	/* Nothing at top, the 2 conditions below provide for situations where
	 * bot has no data and where it does. */
	if ((stack.bot == null) && (stack.top.length == 0)) {
		
		stack.bot = parseInt(numKey);

		redraw();

	} else if ((stack.bot != null) && (stack.top.length == 0)) {

		let num    = stack.bot.toString();
		let newNum = parseInt(num.concat(numKey));

		stack.bot = (num.length > 14) ? stack.bot : newNum;
		
		redraw();
	}

	/* Top with 1 operand and 1 operator, the 2 conditions below provide for
	 * situations where bot has no data and where it does. */
	if ((stack.bot == null) && (stack.top.length == 2)) {

		let num1  = numKey;
		stack.bot = parseInt(num1);

		redraw();

	} else if ((stack.bot != null) && (stack.top.length == 2)) {

		let num    = stack.bot.toString();
		let newNum = parseInt(num.concat(numKey));

		stack.bot  = (num.length > 14) ? stack.bot : newNum;
		
		redraw();
	}

	/* Top with 2 operands, 1 operator, and 1 equal sign,  */
	if ((stack.bot != null) && (stack.top.length == 4)) {

		stack.bot = null;
		stack.top = [];

		let num1  = numKey;
		stack.bot = parseInt(num1);

		redraw();
	} 
}

function mathEval(num1, oper, num2) {

	if (oper === '*') 
		return num1 * num2;
	else if (oper == '/') 
		return num1 / num2;
	else if (oper == '-')
		return num1 - num2;
	else if (oper == '+') 
		return num1 + num2;

}
	
function validateEvent(event, id) {
	return event.target.id == id;
}

function genSeq(num, reverse=false) { 
    let seq = [];

    if (!reverse) {
        let c   = 0; 
        while (c < num) {
            seq.push(c);
            c++;
        }
    } else {
        let c = num;
        while (c > num) {
            seq.push(c);
            c--;
        }
    }
    return seq;
}
