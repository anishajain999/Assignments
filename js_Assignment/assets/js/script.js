function toggle(){
    let password = document.getElementById("password");
    let eye = document.getElementById("toggle");

    if (password.getAttribute("type")=="password"){
        password.setAttribute("type","text");
        eye.style.color = "#0be881";
    }
    else{
        password.setAttribute("type","password");
        eye.style.color = "#808080";
    }
}

let parameters = {
    count : false,
    letters : false,
    numbers : false,
    special : false
}
let strengthBar = document.getElementById("strength-bar");
let msg = document.getElementById("msg");

function strengthChecker(){
    let password = document.getElementById("password").value;
    let submit = document.getElementById("submit");

    parameters.letters = (/[A-Za-z]+/.test(password))?true:false;
    parameters.numbers = (/[0-9]+/.test(password))?true:false;
    parameters.special = (/[!\"$%&/()=?@~`\\.\';:+=^*_-]+/.test(password))?true:false;
    parameters.count = (password.length > 8)?true:false;

    let barLength = Object.values(parameters).filter(value=>value);

    console.log(Object.values(parameters), barLength);

    let list1 = document.getElementById("list1");
    let list2 = document.getElementById("list2");
    let list3 = document.getElementById("list3");
    let list4 = document.getElementById("list4");
    
    if(parameters.letters){
        list2.style.color="Green";
    }
    else{
        list2.style.color="Grey";
    }
    if(parameters.numbers){
        list1.style.color="Green";
    }
    else{
        list1.style.color="Grey";
    }
    if(parameters.special){
        list3.style.color="Green";
    }
    else{
        list3.style.color="Grey";
    }
    if(parameters.count){
        list4.style.color="Green";
    }
    else{
        list4.style.color="Grey";
    }

    strengthBar.innerHTML = "";
    for( let i in barLength){
        let span = document.createElement("span");
        span.classList.add("strength");
        strengthBar.appendChild(span);
    }
    
    
    let spanRef = document.getElementsByClassName("strength");
    
  
    if((password.length>8 && password.length <=12) && parameters.letters &&  parameters.numbers && parameters.special){
        msg.textContent = "Your password is Moderate";
        submit.style.display="flex";
    }
    else if((password.length>12 && password.length <=14) && parameters.letters &&  parameters.numbers && parameters.special){
        msg.textContent = "Your password is Medium";
        submit.style.display="flex";
    }
    else if((password.length > 14) && parameters.letters &&  parameters.numbers && parameters.special){
        msg.textContent = "Your password is strong";
        submit.style.display="flex";
    }
    else{
        msg.textContent = "Your password is Weak";
        submit.style.display="none";
    }
}
function Submission()
{
    alert("Submit Sucessfully!..");
    setTimeout(function(){
        window.location.reload(1);
     }, 1000);
}