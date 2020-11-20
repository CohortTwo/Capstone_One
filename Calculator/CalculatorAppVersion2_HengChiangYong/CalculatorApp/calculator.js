

var input = []       //capture and store string input
var disptemp = [];   //store number value only
var val1st = [];     //store the value and operator in array
var prevResult= 0;


function display(num) {
    var smallDisplay = document.getElementById("smalldisp");
    var bigDisplay = document.getElementById("bigdisp");
    //input = bigDisplay.innerHTML;
    //var numbers = /^[0-9]+$/;
         input += num;

    
        // Check math operator
          switch (num) {
              case "+":
                   val1st.push(disptemp);
                   smallDisplay.innerHTML = input;
                   val1st.push(num);
                   disptemp = [];
                   console.log(val1st);
                  break;
              case "-":
                  val1st.push(disptemp);
                  smallDisplay.innerHTML = input;
                  val1st.push(num);
                  disptemp = [];
                  console.log(val1st);
                  break;
              case "x":
                  val1st.push(disptemp);
                  smallDisplay.innerHTML = input;
                  val1st.push(num);
                  disptemp = [];
                  console.log(val1st);
                  break;
              case "/":
                  val1st.push(disptemp);
                  smallDisplay.innerHTML = input;
                  val1st.push(num);
                  disptemp = [];
                  console.log(val1st);
                  break;
              case "=":
                  val1st.push(disptemp);
                  smallDisplay.innerHTML = input;
                  val1st.push(num);
                  console.log(val1st);
                  mathOperation(val1st, smallDisplay, bigDisplay);
                  disptemp = bigDisplay.innerHTML;
                  input += disptemp;
                  break;
              case "del":
                  delFn(disptemp, bigDisplay);
                  break;
              case "mod":
                  val1st.push(disptemp);
                  smallDisplay.innerHTML = input;
                  val1st.push(num);
                  disptemp = [];
                  break;
              case "e":
                  disptemp = Math.E;
                  bigDisplay.innerHTML = disptemp;
                  break;
              case "pi":
                  disptemp = Math.PI;
                  bigDisplay.innerHTML = disptemp;
                  break;
              case "m+":
                 // addMen(disptemp);
                  break;
              case "sqrt":
                  sqRoot(disptemp, bigDisplay);
                  break;
              case "x^2":
                  sQuare(disptemp, bigDisplay);
                  break;
              case "1/x":
                  inVerse(disptemp, bigDisplay);
                  break;
              case "log":
                  log10(disptemp, bigDisplay);
                  break;
              case "ln":
                  naturalLog(disptemp, bigDisplay);
                  break;
              case "10^x":
                  powerOfTen(disptemp, bigDisplay);
                  break;
              case "fn":
                  break;
              case "expon":
                  break;
              case "+/-":
                  negateFn(disptemp, bigDisplay);
                  break;
              case "abs":
                  absFn(disptemp, bigDisplay);
                  break;
              case "x^y":
                 // xPowy(disptemp, bigDisplay);
                  val1st.push(disptemp);
                  smallDisplay.innerHTML = input;
                  val1st.push(num);
                  disptemp = [];
                  break;
              case "n!":
                  factorialN(disptemp, bigDisplay);
                  break;
              default:
                  if (disptemp.length < 15) {                 //Limit input number to 15 digits
                      disptemp += num;
                   //   val1st.push(disptemp);
                      console.log(disptemp);
                      bigDisplay.innerHTML = disptemp;
                  }
                  break;
          } 
    
}

function mathOperation(valop,sDisp,bDisp) {
    var currentvalue = 0;
    var nextvalue = 0;
    var result = 0;
    console.log(valop.length);
    for (let i = 1; i <= valop.length - 1; i+=2) {
        if (valop[i] === "x") {
            currentvalue = parseFloat(val1st[i - 1]);
            currentvalue *= parseFloat(val1st[i + 1]);
            result = currentvalue;
        }
        else if (val1st[i] === "/") {
            currentvalue = parseFloat(val1st[i - 1]);
            currentvalue /= parseFloat(val1st[i + 1]);
            result = currentvalue;
        }
        else if (val1st[i] === "+") {
            currentvalue = parseFloat(val1st[i - 1]);
            console.log("Current Value:" + currentvalue);
            currentvalue += parseFloat(val1st[i + 1]);
            console.log("nextvalue: " + nextvalue);
            result = currentvalue;
        }
        else if (val1st[i] === "-") {
            currentvalue = parseFloat(val1st[i - 1]);
            console.log("Current Value:" + currentvalue);
            currentvalue -= parseFloat(val1st[i + 1]);
            console.log("nextvalue: " + nextvalue);
            result = currentvalue;

        } else if (val1st[i] === "mod") {
            currentvalue = parseFloat(val1st[i - 1]);
            currentvalue = currentvalue % parseFloat(val1st[i + 1]);
            result = currentvalue;

        } else if (val1st[i] === "x^y") {
            currentvalue = parseFloat(val1st[i - 1]);
            currentvalue = Math.pow(currentvalue, parseFloat(val1st[i + 1]));
            result = currentvalue;
        } 
    }

    prevResult = result;
    sDisp.innerHTML = input + result;
    bDisp.innerHTML = result;
    historyStorage.push(input + result);
    console.log(historyStorage);
    showHist();
    input = [];
}


var historyStorage = [];
var memoryStorage = [];
memoryStorage.push("0");

function showHist() {
    var showText = [];
    document.getElementById("memlist").style.display = "none";
    histList = document.getElementById("histlist");
    histList.style.display = "block";
   
    histList.innerHTML = "";
    console.log("History: " + historyStorage);
    for (let i = 0; i <= historyStorage.length - 1; i++) {
        showText += historyStorage[i] + "<br>";  
    }
    histList.innerHTML = showText;
}

function showMem() {
   
    document.getElementById("histlist").style.display = "none";
    var memParent = document.getElementById("memlist");
    memParent.style.display = "block";
   
    memParent.innerHTML = "";
    console.log("Memory :" + memoryStorage);
    memParent.innerHTML = memoryStorage[0] + "<br>";
}

function memClear() {
    memoryStorage[0]=0;  //clear the memory storage
    showMem();
}

function memRecall() {
    document.getElementById("bigdisp").innerHTML = memoryStorage[0];

}

function memAdd() {
    var memstore = [];
    var bigD = document.getElementById("bigdisp").innerHTML;
    console.log(bigD);
    
    memstore = parseFloat(memoryStorage[0]) + parseFloat(bigD);
    console.log(memstore);
    memoryStorage[0] = memstore;
    showMem();
    input = [];
    disptemp = [];
}

function memMinus() {
    var memstore = [];
    var bigD = document.getElementById("bigdisp").innerHTML;
    console.log(bigD);

    memstore = parseFloat(memoryStorage[0]) - parseFloat(bigD);
    console.log(memstore);
    memoryStorage[0] = memstore;
    showMem();
    input = [];
    disptemp = [];
}

function memStore() {
    var bigD = document.getElementById("bigdisp").innerHTML;
    memoryStorage.push(bigD);
    document.getElementById("histlist").style.display = "none";
    var memParent = document.getElementById("memlist");
    memParent.style.display = "block";
    memParent.innerHTML = "";
    var storelist = window.localStorage.setItem("listofmemory", JSON.stringify(memoryStorage));
    storelist = window.localStorage.getItem("listofmemory");
    console.log(storelist);
    console.log(memoryStorage);

    for (var a = 0; a <= memoryStorage.length - 1; a++) {
         console.log("Memory :" + memoryStorage);
        memParent.innerHTML = memoryStorage[a] + "<br>";
    }
   
}

function clearEntry() {
    document.getElementById("bigdisp").innerHTML = "0";;
    document.getElementById("smalldisp").innerHTML = "";;
    input=[];                  //clear the memory storage
    prevResult = [];        //clear the memory storage
    disptemp = [];
}

function delFn(num,bigDisp) {
    if (num !== "" && num !== null) {
        console.log("Before Del key:" + input);
        var newinput = input.slice(0, -4);       // need to delete the "del" and current digit
        input = newinput;                        // reassign to input again.
        console.log("Del Key:" + input);
        var text = bigDisp.innerHTML;
        var newtext = text.slice(0, -1);
        bigDisp.innerHTML = newtext;
        disptemp = newtext;
        
    }
}

function absFn(num,disp) {

    var dispnum = disp.innerHTML;
    if (dispnum !== "" & dispnum !== null) {
        var num1 = parseInt(dispnum);
        console.log("Before abs function:"+input);
        var newinput = input.slice(0, -5);
        console.log("After slicing abs fn:" + newinput);
        var newnum = Math.abs(dispnum);
        input = newinput + newnum;
        console.log("After the abs fn exe:" + input);
        disp.innerHTML = newnum;
        historyStorage.push("|" + num1 + "| = " + newnum);
        showHist();
        disptemp = newnum;
       
    }
}

function negateFn(num, disp) {

    if (num !== "" & num !== null) {
        var num1 = parseInt(num);
        var newnum = -num1;
        var newinput = input.slice(0, -5);
        input = newinput+newnum;
        disp.innerHTML = newnum;
        historyStorage.push("negate(" + num1 + ") = " + newnum);
        showHist();
        disptemp = newnum;
    }
}

function sqRoot(num,bigDisp) {
    var num1 = parseFloat(num);
    var result = Math.sqrt(num1)
    bigDisp.innerHTML = result;
    historyStorage.push("√"+num1+" = " + result);
    showHist();
    disptemp = [];
    input = [];
    
}

function sQuare(num, bigDisp) {
    var num1 = parseFloat(num);
    var result = num1 * num1;
    bigDisp.innerHTML = result;
    historyStorage.push(num1 + "x"+ num1 +" = " + result);
    showHist();
    disptemp = [];
    input = [];  
}

function inVerse(num, bigDisp) {
    var num1 = parseFloat(num);
    if (num1 === 0 && num1 === null) {
        var result = "Infinity or undefined!"
        bigDisp.innerHTML = result;
    } else {
        var result = 1 / num1;
        bigDisp.innerHTML = result;
        historyStorage.push("1/" + num1 + " = " + result);
        showHist();
        disptemp = [];
        input = [];
    }
    
}

function log10(num,bigDisp) {
    var num1 = parseFloat(num);
    var result=Math.log10(num1);
    bigDisp.innerHTML = result;
    historyStorage.push("log10 " + num1 + " = " + result);
    showHist();
    disptemp = [];
    input = [];
}

function naturalLog(num, bigDisp) {
    var num1 = parseFloat(num);
    var result = Math.log2(num1);
    bigDisp.innerHTML = result;
    historyStorage.push("log2 " + num1 + " = " + result);
    showHist();
    disptemp = [];
    input = [];
}


function powerOfTen(num, bigDisp) {
    var num1 = parseFloat(num);
    var result = Math.pow(10,num1);
    bigDisp.innerHTML = result;
    historyStorage.push("10pow(" + num1 + ") = " + result);
    showHist();
    disptemp = [];
    input = [];
}

function factorialN(num, bigDisp) {
    var num1 = parseFloat(num);
    var result = num1;
    for (var i = 1; i < num1; i++) {
        result *= num1 - i;
    }
    bigDisp.innerHTML = result;
    historyStorage.push(num1 + "! = " + result);
    showHist();
    disptemp = [];
    input = [];
}

function trigoFn() {

}

function FunctionKey() {

}

function secondFn() {

}