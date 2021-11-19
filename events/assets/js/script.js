console.log("working");
let input = document.getElementById("input");
input.oninput = function(){
    let result = document.getElementById("result");
    result.innerHTML = input.value;
}
function focusFunction() {
    // Focus = Changes the background color of input to yellow
    document.getElementById("myInput").style.background = "green";
}
  
function blurFunction() {
    // No focus = Changes the background color of input to red
    document.getElementById("myInput").style.background = "red";
}

let x=0;
let y=0;

function myMoveFunction(){
    document.getElementById("mousemove").innerText = y+=1;
}

function myEnterFunction(){
    document.getElementById("mouse_enter").innerText = x+=1;
}


cut_paste = document.getElementById("cut_paste");
cut_paste.onpaste=function(event){
    alert("Paste: " +event.clipboardData.getData('text/plain'));
    event.preventDefault();
}
cut_paste.oncut = input.oncopy = function(event) {
    alert(event.type + ' - ' + document.getSelection());
    event.preventDefault();
};

function changeFunction(){
    let z = document.getElementById("change");
    z.value = z.value.toUpperCase();
}

function keydownDuntion(){
    document.getElementById("keydown");
    alert("Pressed a key");
}