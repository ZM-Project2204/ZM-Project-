import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";
let users = JSON.parse(localStorage.getItem("users")) || [];

function renderUsers(){

const list=document.getElementById("userlist");
const count=document.getElementById("count");

count.innerHTML=users.length;

list.innerHTML="";

if(users.length==0){

list.innerHTML="<div class='empty'>No Users Available</div>";

return;

}

users.forEach((user,index)=>{

list.innerHTML+=`
<div class="userCard">

<div>
<h3>${user.username}</h3>
<p>Secure User</p>
</div>

<button onclick="deleteUser(${index})">
🗑️
</button>

</div>
`;

});

}

function addUser(){

if(users.length>=5){

alert("Maximum 5 Users Allowed");

return;

}

let username=prompt("Enter Username");

if(!username)return;

let password=prompt("Enter Password");

if(!password)return;

users.push({

username:username,

password:password

});

localStorage.setItem("users",JSON.stringify(users));

renderUsers();

}

function deleteUser(index){

users.splice(index,1);

localStorage.setItem("users",JSON.stringify(users));

renderUsers();

}

document.getElementById("addBtn").onclick=addUser;

renderUsers();
