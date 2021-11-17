var arr;

if (localStorage.getItem("detail") == null){
    arr = new Array();
}
else{
    arr = JSON.parse(localStorage.getItem("detail"));
}
function validate(e) {
    e.preventDefault();
    let Name = document.getElementById("Name").value;
    let lName = document.getElementById("Last-Name").value;
    let Age = document.getElementById("Age").value;
    let user = document.getElementById("email").value;
    let Phone = document.getElementById("Phone").value;
    let Address = document.getElementById("Address").value;
    

    let regName = /^[a-zA-Z.\s]{2,20}$/;
    let regPhone = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    let re = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    let regAge = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;


    let Name_validate = document.getElementById("name_validate");
    let lName_validate = document.getElementById("lname_validate");
    let Age_validate = document.getElementById("Age_validate"); 
    let email_validate = document.getElementById("validate");
    let Phone_validate = document.getElementById("Phone_validate");
    let Address_validate = document.getElementById("Address_validate");
    let flag ={
        1:[0,"Name Should'nt contain any special character or space eg. Anisha"],
        2:[0,"Last Name Should'nt contain any special character eg. Jain"],
        3:[0,"Age should be in two digit eg. 08 , 18 , 24"],
        4:[0,"Email should be in form of eg. abc@gmail.com"],
        5:[0,"Phone no. should be of 10 digit eg. 9876543201"],
        6:[0,"Address can'nt be empty"],
    };


    if(!regName.test(Name)){
        // console.log(1);
        flag[1][0]=1;
        Name_validate.innerText = flag[1][1];
   
    }
    else{
        flag[1][0]=0;
        Name_validate.innerText = "";
    }
    if(!regName.test(lName)){
        // console.log(1);
        flag[2][0]=1;
        lName_validate.innerText = flag[2][1];

    }
    else{
        flag[2][0]=0;
        lName_validate.innerText = "";
    }



    if(!regAge.test(Age)){
        // console.log(1);
        flag[3][0]=1;
        Age_validate.innerText = flag[3][1];

    }
    else{
        flag[3][0]=0;
        Age_validate.innerText = "";
    }


    if(!re.test(user)){
        // console.log(1);
        flag[4][0]=1;
        email_validate.innerText = flag[4][1];

    }
    else{
        flag[4][0]=0;
        email_validate.innerText = "";

    }


    if(!regPhone.test(Phone)){
        // console.log(1);
        flag[5][0]=1;
        Phone_validate.innerText = flag[5][1];

    }
    else{
        flag[5][0]=0;
        Phone_validate.innerText = "";
    }

    if(Address==""){
        // console.log(1);
        flag[6][0]=1;
        Address_validate.innerText = flag[6][1];
 
    }
    else{
        flag[6][0]=0;
        Address_validate.innerText = "";
    }
//    console.log(flag);
   if (flag[1][0]==0 && flag[2][0]==0 && flag[3][0]==0 && flag[4][0]==0 && flag[5][0]==0 && flag[6][0]==0 ){
       alert("Submit Sucessfully!.");
       
       let data = {
           "Name":Name,
           "Last-Name":lName,
           "Age":Age,
           "Email":user,
           "Phone ":Phone,
           "Address":Address
       }
       arr.push(data);
       localStorage.setItem("details",JSON.stringify(arr));
       console.log("Details");
       console.log(localStorage.getItem("details"));
   
       
       
   }
}
function removee(e){
    e.preventDefault();
    
    let Name_validate = document.getElementById("name_validate");
    let lName_validate = document.getElementById("lname_validate");
    let Age_validate = document.getElementById("Age_validate"); 
    let email_validate = document.getElementById("validate");
    let Phone_validate = document.getElementById("Phone_validate");
    let Address_validate = document.getElementById("Address_validate");

    Name_validate.innerText = "";
    lName_validate.innerText = "";
    Age_validate.innerText = "";
    email_validate.innerText = "";
    Phone_validate.innerText = "";
    Address_validate.innerText = "";
 
    document.getElementById("Name").value = "";
    document.getElementById("Last-Name").value  = "";
    document.getElementById("Age").value  = "";
    document.getElementById("email").value  = "";
    document.getElementById("Phone").value  = "";
    document.getElementById("Address").value  = "";
}