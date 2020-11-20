var memory = [];
var previousKey = "";
var previousNumber = "";
var previousOperator = "";
// Clear All memory
function mc(e) {
    memory = [];
    genMemory(memory);
    previousKey = "";
    previousNumber = "";
    previousOperator = "";
}

// m+
function mplus(e) {
    var memoryText = document.getElementById("display0").value;
    if (memoryText.length > 0) {
        memory.push(memoryText);
    } else {
        alert("nothing to store");
    }
    
    genMemory(memory);
}
// m- this will remove the latest
function mminus(e) {
    if (memory.length > 0) {
        memory.pop();
        genMemory(memory);
    }
}
// mr - this will recall the latest
function mr(e) {
    if (memory.length > 0) {

        var latestMemory = memory[memory.length - 1];
        document.getElementById("display0").value = latestMemory;
    } else { alert("Memory is empty");}

}
function genMemory(memory) {
    document.getElementById("displayMemory").innerHTML = "";

    var memoryHeader = document.createElement("p");
    memoryHeader.textContent = "Memory";
    document.getElementById("displayMemory").appendChild(memoryHeader);

    for (let i = 0; i < memory.length; i++) {
        var li = document.createElement("li");
        var t = document.createTextNode(memory[i]);
        li.Name = "memoryList";
        li.className = "memoryList";
        li.appendChild(t);
        document.getElementById("displayMemory").appendChild(li);
    }
}
function direct(e) {

}
function display1(s) {
    switch (s) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case ".":
            var originalNumber = "";
            if (previousKey =='+/-'||previousKey == '/' || previousKey == '+' || previousKey == '*' || previousKey == '-' || previousKey == "=") {
                if (previousKey == "=") {
                    document.getElementById("display0").value = "";
                    document.getElementById("display1").value = "";
                    previousNumber = "";
                }

            } else {
                var originalNumber = document.getElementById("display0").value;
            }
            document.getElementById("display0").value = originalNumber + s;
           
            
            break;
        case "/":
        case "*":
        case "+":
        case "-":
        case "=":
            if (previousOperator == "=") {
                document.getElementById("display1").value = "";
            }
            var originalS = document.getElementById("display1").value;
            var originalNumber = document.getElementById("display0").value;

            document.getElementById("display1").value = originalS + " " + originalNumber + " " + s;
  
            if (previousNumber == "") {

            } else {
                if (previousOperator == "+/-") {
                    //chaange
                    document.getElementById("display0").value = 0 - previousNumber;
                } else {
                    var exp = previousNumber + previousOperator + originalNumber;
                    console.log(exp);
                    document.getElementById("display0").value = equalCompute(exp);
                }

            }
            previousNumber = document.getElementById("display0").value;
            previousOperator = s;
            break;
        case "+/-":
            var originalNumber = parseFloat(document.getElementById("display0").value);
            if (previousKey == "=") {
                document.getElementById("display1").value = "";
                previousNumber = "";
            }
           
            document.getElementById("display0").value = 0 - originalNumber;

            previousNumber = document.getElementById("display0").value;
            previousOperator = s;
            break;

        default:
        // code block
    }
 previousKey = s;
    
}

function AC(e) {
    document.getElementById("display1").value = '';
    document.getElementById("display0").value = '';
}

function equalPress(s) {
    display1(s);

    // write to History
    var p = document.createElement("p");
    p.textContent = document.getElementById("display1").value;
    var result = document.createElement("p");
    result.textContent = document.getElementById("display0").value;
    document.getElementById("displayHistory").appendChild(p);
    document.getElementById("displayHistory").appendChild(result);
}

// convert the string to math formula and return the resule
function equalCompute(expr) {

    var chars = expr.split("");
    var n = [], op = [], index = 0, oplast = true;

    n[index] = "";

    // Parse the expression
    for (var c = 0; c < chars.length; c++) {

        if (isNaN(parseInt(chars[c])) && chars[c] !== "." && !oplast) {
            op[index] = chars[c];
            index++;
            n[index] = "";
            oplast = true;
        } else {
            n[index] += chars[c];
            oplast = false;
        }
    }

    // Calculate the expression
    expr = parseFloat(n[0]);
    for (var o = 0; o < op.length; o++) {
        var num = parseFloat(n[o + 1]);
        switch (op[o]) {
            case "+":
                expr = expr + num;
                break;
            case "-":
                expr = expr - num;
                break;
            case "*":
                expr = expr * num;
                break;
            case "/":
                expr = expr / num;
                break;
        }
    }

    return expr;
}
function notInUse(s) {
    alert(s + " not in use");
}