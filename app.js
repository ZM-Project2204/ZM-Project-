function login(){

let username=document.getElementById("user").value.trim();

let password=document.getElementById("pass").value.trim();

let error=document.getElementById("error");

if(username==="admin" && password==="zm@2026"){

localStorage.setItem("adminLogged","true");

document.body.innerHTML=`

<div style="width:100%;min-height:100vh;background:#020617;color:white;padding:25px;font-family:Arial;">

<h1 style="text-align:center;">👑 ZM Project Admin Dashboard</h1>

<p style="text-align:center;color:#94a3b8;">Welcome Admin</p>

<div style="margin-top:30px;background:#1e293b;padding:20px;border-radius:15px;">

<h2>Create User</h2>

<input id="newuser" placeholder="Username"
style="width:100%;padding:12px;margin-top:10px;border-radius:8px;border:none;">

<input id="newpass" placeholder="Password"
style="width:100%;padding:12px;margin-top:10px;border-radius:8px;border:none;">

<button onclick="addUser()"
style="width:100%;padding:12px;margin-top:15px;background:#2563eb;color:white;border:none;border-radius:8px;">
Add User
</button>

</div>

<div id="users"
style="margin-top:25px;background:#1e293b;padding:20px;border-radius:15px;">

<h2>Users</h2>

<p>No Users Yet</p>

</div>

</div>

`;

showUsers();

}

else{

error.innerHTML="Invalid Username or Password";

}

}

function addUser(){

let u=document.getElementById("newuser").value;

let p=document.getElementById("newpass").value;

if(u==""||p=="") return;

let users=JSON.parse(localStorage.getItem("users"))||[];

if(users.length>=5){

alert("Maximum 5 Users Allowed");

return;

}

users.push({

username:u,

password:p

});

localStorage.setItem("users",JSON.stringify(users));

showUsers();

document.getElementById("newuser").value="";

document.getElementById("newpass").value="";

}

function showUsers(){

let users=JSON.parse(localStorage.getItem("users"))||[];

let html="<h2>Users</h2>";

users.forEach((x,i)=>{

html+=`
<div style="padding:10px;background:#334155;margin-top:10px;border-radius:8px;">
${i+1}. ${x.username}
</div>
`;

});

document.getElementById("users").innerHTML=html;

}
