function clearE(){
 document.getElementById("output").value = "";
 
 
}

function clearAll(){
  document.getElementById("output").value = "";
 document.getElementById("histul").innerHTML = "";
}

function removeZero(){
 var value = document.getElementById("output").innerHTML;
 if(value == "0"){
  value = ""
document.getElementById("output").innerHTML = value
 }
}


function dis(val){
  //to remove display value first if it was a product of the calcFunc, by checking if the value matches with the last value in the history 
   if(document.getElementById("output").value == '0'){;
 document.getElementById("output").value = "" + val;
  
//document.getElementById("output").innerHTML = val
 }
 else{
  document.getElementById("output").value += val}
  
}



function math(val){
   if(document.getElementById("output").value == "0" || document.getElementById("output").value == "" ){
    return false
  }
  document.getElementById("output").value += val
}

function calcFunc(){
  //removeZero();
   if(document.getElementById("output").value == "0" || document.getElementById("output").value == "" ){
    return false
  }
  let x = document.getElementById("output").value
  let y = eval(x)
  document.getElementById("output").value = y;
  //alert('oh');
  var histli = document.createElement('li');
  histli.innerHTML = y;
  //alert('hey');
  //document.getElementById('hisStorediv').style.display = 'block';
  document.getElementById("histul").appendChild(histli);
  document.getElementById("hisStorediv").appendChild(histul);
  
}

function mAdd(){
  //let x = document.getElementById("output").value
  //let y = eval(x)
 // document.getElementById("output").value = y;
  var mli = document.createElement('li');
  //var mvalue = {};
  if(document.getElementById("mul").innerHTML == "")
  mli.innerHTML = document.getElementById("output").value;
  else if (document.getElementById("mul").innerHTML !== ""){
 var mvalue = +(document.getElementById("mul").lastChild.innerHTML) + +(document.getElementById("output").value) ;
  mli.innerHTML = mvalue};
  document.getElementById("mul").appendChild(mli);
  document.getElementById("mStorediv").appendChild(mul)
}

function mClear(){
  document.getElementById('mul').innerHTML = ""
}

function mSub(){
  //how to loop through memory store to match display value for the subtraction... how to set the memory store as an array?
  //if(document.getElementById("output").value 
  var mli = document.createElement('li');
  //var mvalue = {};
  if(document.getElementById("mul").innerHTML == "")
  mli.innerHTML = document.getElementById("output").value * -1;
  else if (document.getElementById("mul").innerHTML !== ""){
 var mvalue = +(document.getElementById("mul").lastChild.innerHTML) - +(document.getElementById("output").value) ;
  mli.innerHTML = mvalue};
  document.getElementById("mul").appendChild(mli);
  document.getElementById("mStorediv").appendChild(mul)
  
}

function mRecall(){

//how to pass the data in memory store as an array?? And then pull out the last index?
 var x = document.getElementById("mul").lastChild.innerHTML;
 document.getElementById("output").value = x
}




function delb(){
 
 document.getElementById("output").value = document.getElementById("output").value.slice(0, - 1); 
}

function signb(){
 document.getElementById("output").value = document.getElementById("output").value * (-1)

}

function pi(){
  document.getElementById("output").value += 3.141592654
}

function pctb(){
 document.getElementById("output").value = document.getElementById("output").value / 100 
}

function sqb(){
   if(document.getElementById("output").value == "0" || document.getElementById("output").value == "" ){
    return false
  }
 document.getElementById("output").value = document.getElementById("output").value * document.getElementById("output").value 
}

function sqrt(){
  var x = document.getElementById("output").value;
  document.getElementById("output").value = Math.sqrt(x)
}

function roundto0(){
  var num = document.getElementById("output").value
  var n = parseFloat(num).toFixed(0);
  document.getElementById("output").value = n
}

function roundto2(){
  var num = document.getElementById("output").value
  var n = parseFloat(num).toFixed(2);
  document.getElementById("output").value = n
}