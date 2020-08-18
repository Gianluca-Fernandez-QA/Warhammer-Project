
var a = document.getElementById("btnCrt");
a.addEventListener('click',function(e){
   e.preventDefault(); // Cancel the native event
   e.stopPropagation();// Don't bubble/capture the event
}, false);
function create(){
    
let username = document.getElementById("UserName").value;
let password = document.getElementById("password").value;
let name = document.getElementById("fullName").value;
let email = document.getElementById("fullName").value;
let usrpub = document.getElementById("public").checked;

let data = {
    "userName": `${username}`,
    "password": `${password}`,
    "name": `${name}`,
    "email": `${email}`,
    "userPublic": `${usrpub}`
};

fetch('http://localhost:9001/UserCreation', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response)
.then(data => {
  console.log(data);
})
}
