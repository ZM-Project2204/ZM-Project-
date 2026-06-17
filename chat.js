function send(){

let msg=document.getElementById("message").value;

if(msg=="") return;

document.getElementById("chatbox").innerHTML+=`

<div class="msg me">

${msg}

</div>

`;

document.getElementById("message").value="";

let box=document.getElementById("chatbox");

box.scrollTop=box.scrollHeight;

}
