
function create(){
let username = document.getElementById("UserName").value;
let password = document.getElementById("password").value;
let name = document.getElementById("fullName").value;
let email = document.getElementById("fullName").value;
let usrpub = document.getElementById("public").checked;

let data = { userName: `${username}`, password: `${password}`,name:`${name}`,email:`${email}`,userPublic:`${usrpub}` };

fetch('http://localhost:9001/UserCreation', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
}