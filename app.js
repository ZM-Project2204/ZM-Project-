function login(){

let username=document.getElementById("user").value.trim();
let password=document.getElementById("pass").value.trim();

if(username==="admin" && password==="zm@2026"){

window.location.href="dashboard.html";
return;

}

let users=JSON.parse(localStorage.getItem("users"))||[];

let found=users.find(
u=>u.username===username && u.password===password
);

if(found){

localStorage.setItem("currentUser",found.username);

window.location.href="user.html";

}
else{

document.getElementById("error").innerHTML=
"Invalid Username or Password";

}

}
