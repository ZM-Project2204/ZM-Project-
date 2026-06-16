function login() {

let username = document.getElementById("user").value.trim();
let password = document.getElementById("pass").value.trim();

if(username=="admin" && password=="zm@2026"){

alert("Login Success");

}else{

alert("Wrong Username or Password");

}

}
