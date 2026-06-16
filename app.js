function login(){

let username=document.getElementById("user").value.trim();

let password=document.getElementById("pass").value.trim();

if(username==="admin" && password==="zm@2026"){

window.location.href="dashboard.html";

}else{

document.getElementById("error").innerHTML="Invalid Username or Password";

}

}
