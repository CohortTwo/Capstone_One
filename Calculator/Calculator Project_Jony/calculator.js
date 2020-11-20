function clearAll(){
 document.getElementById("output").value = "";
 
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

  document.getElementById("output").value += val;
}

function calcFunc(){
  //removeZero();
  let x = document.getElementById("output").value
  let y = eval(x)
  document.getElementById("output").value = y;
  //alert('oh');
  var histli = document.createElement('li');
  histli.innerHTML = y;
  //alert('hey');
  //document.getElementById('hisStorediv').style.display = 'block';
  document.getElementById("histul").appendChild(histli);
  document.getElementById("hisStorediv").appendChild(histul)
}

function mSave(){
  let x = document.getElementById("output").value
  let y = eval(x)
  document.getElementById("output").value = y;
  var mli = document.createElement('li');
  mli.innerHTML = y;
  //document.getElementById('histStorediv').style.display = 'none';
  document.getElementById("mul").appendChild(mli);
  document.getElementById("mStorediv").appendChild(mul)
}

function mClear(){
  document.getElementById('mul').innerHTML = ""
}

function mSub(){
  //how to loop through memory store to match display value for the subtraction... how to set the memory store as an array?
  //if(document.getElementById("output").value 
}

function mRecall(){

//how to pass the data in memory store as an array?? And then pull out the last index?
  var mstoreli = [];
  mstoreli.innerHTML = document.getElementById("mul").li;
  console.log(mstoreli.innerHTML);
  for (var i=o; i<=mstoreli.length-1;i++){
  mstoreli[i].innerHTML = document.getElementById("mul").li[i].value;
  document.getElementById("output").value = mstoreli[length-1].value}

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