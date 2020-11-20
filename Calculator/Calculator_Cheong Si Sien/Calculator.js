
/* memvar   = temp storage for current memory value
 * clearscn = indicator to clear the screen for certain conditions
 *            basically minicking Windows Calculator.
 *            eg: after Memory recall, number should be reset to 0 in display
 * firsttime= indicator to output the word memory and history in the display 
 * roundoff = temp variable to hold the rounding off to 10 decimal places
 */

var memvar = 0;
var clearscn = 0;
var firsttime = '1';

function memory(ind){
     var inputmath = document.getElementById ('display');
     var roundoff = '0'
     var meminput = document.getElementById ('answer2');
    
     switch(ind){
        case 'R': 
            roundoff = round(memvar,10);
            inputmath.value = roundoff;
            clearscn = 1;
            meminput.value = "memory: " + roundoff;   
            break;
     
        case 'C': memvar = 0;
            clearscn = 1;
            meminput.value = "memory: " + '0';     
            break; 
            
        case 'S': 
            if ((inputmath.value != null) && (inputmath.value != "")){
                 memvar = parseFloat(inputmath.value);}
                 else {memvar = 0;}
                clearscn = 1;
            meminput.value = "memory: " + memvar;
            break; 
            
        case '+': memvar = parseFloat(inputmath.value) + memvar;
            clearscn = 1;
            meminput.value = "memory: " + memvar;    
            break;  
            
        case '-': memvar = memvar-parseFloat(inputmath.value);
            clearscn = 1;
            meminput.value = "memory: " + memvar;    
            break;  
}
}

function get(num){
    if (clearscn == 1) {
        clearscreen();
        clearscn = 0;
    }
   
    var input = document.getElementById ('display');
    console.log("currently:", input.value);
  
    switch(num){
        case 1: input.value += '1';
        break;
 
        case 2: input.value += '2';
        break; 
        
        case 3: input.value += '3';
        break; 
        
        case 4: input.value += '4';
        break;  
        
        case 5: input.value += '5';
        break;  
        
        case 6: input.value += '6';
        break;  
        
        case 7: input.value += '7';
        break;
        
        case 8: input.value += '8';
        break;
        
        case 9: input.value += '9';
        break;
        
        case 0: input.value += '0';
        break;
    }
    }    

document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
   console.log("code is", charCode);
    for (let i = 0; i<10; i++) {
           if (parseInt(charStr) == i) {
               get(i);} 
         }
      
           if (charStr == "+" || charStr == "-" || charStr == "*" || charStr == "/" || charStr == "."){
               getmaths(charStr);}   
            
           if (charCode == 13) {
               console.log("return pressed", charCode)
               calAns();}            
    }


function clearscreen(){
    document.getElementById ('display').value = "";
}

function getmaths(op) {
    var inputmath = document.getElementById ('display');
    switch(op){
        case '+': inputmath.value += '+';
            clearscn = 0;
        break;
 
        case '*': inputmath.value += '*';
             clearscn = 0;
        break; 
        
        case '-': inputmath.value += '-';
            clearscn = 0;
        break; 
        
        case '/': inputmath.value += '/';
            clearscn = 0;
        break;  
        
        case '.' :   
            if (clearscn == 1) {
                clearscreen();}
            clearscn = 0;
            inputmath.value += '.';
        break;
        
        case '!':
            if (inputmath.value.charAt(0) == '-') {
            inputmath.value = inputmath.value.slice(1);}
            else{inputmath.value = '-' + inputmath.value}
            clearscn = 0;
        break;
    }
}

function calAns() {
    var computed;
    var inputans = document.getElementById ('display');
    const decimals = 2;
    var finalans = 0;
    computed = eval(inputans.value);
    finalans = round(computed,10);
    console.log("math round 10:", finalans);
    var text = document.getElementById('answer');
    var newdiv=document.createElement("div");
    if (firsttime == 1) {
       console.log("history is firsttime");
       text.value = "history" + '\r\n' + text.value + '\r\n' + display.value + "=" + finalans; 
       firsttime = 0;
    }
    else
    {text.value = text.value + '\r\n' + display.value + "=" + finalans;}
    inputans.value = finalans;
    clearscn = 1;
}  
 
function backspace(){
        var inputbks = document.getElementById('display');
        var len = inputbks.value;
           if (len.length > 0){
               len = len.substring(0, len.length-1);
               inputbks.value = len;
              }   
        } 
    
    
function round(number, precision) {
    var pair = (number + 'e').split('e')
    // note e is the exponential, eg: 100e2 means 100x 10power2 = 10000
    var value = Math.round(pair[0] + 'e' + (+pair[1] + precision))
    pair = (value + 'e').split('e')
    return +(pair[0] + 'e' + (+pair[1] - precision))
    }

    

