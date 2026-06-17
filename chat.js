let currentUser = localStorage.getItem("currentUser"); document.getElementById("chatUser").innerHTML = "💬 " + currentUser;
let chat = JSON.parse(localStorage.getItem("chat")) || [];

function render() {

let box = document.getElementById("chatbox");

box.innerHTML = "";

chat.forEach(m => {

box.innerHTML += `
<div class="msg me">
${m}
</div>
`;

});

box.scrollTop = box.scrollHeight;

}

function send() {

let msg = document.getElementById("message").value.trim();

if(msg=="") return;

chat.push(msg);

localStorage.setItem("chat",JSON.stringify(chat));

document.getElementById("message").value="";

render();

}

render();
```javascript
document.getElementById("message").addEventListener("keypress", function(event){

if(event.key==="Enter"){

event.preventDefault();

send();

}

});
```
