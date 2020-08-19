
let a = document.getElementById("btn");
a.addEventListener('click',function(e){
   e.preventDefault(); // Cancel the native event
   e.stopPropagation();// Don't bubble/capture the event
}, false);
let b = document.getElementById("btn1");
b.addEventListener('click',function(e){
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
function login(){
    
  let username = document.getElementById("UserName").value;
  let password = document.getElementById("password").value;

  
  let data = {
      "userName": `${username}`,
      "password": `${password}`,
  };
  
  fetch('http://localhost:9001/UserLogin', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response)
  .then(data => {
    if(data.ok === true){
      console.log("USER LOGIN");
      let date = new Date();
      let minutes = 30;
      date.setTime(date.getTime() + (minutes * 60 * 1000));
      document.cookie = `username=${username}; expires=${date};`;
      document.cookie = `password=${password}; expires=${date};`;
    }
    else{
      console.log("USER FAILED")
    }
  })
  }
  function deleteusr(){
    
    let username = document.getElementById("UserName").value;
    let password = document.getElementById("password").value;
  
    
    let data = {
        "userName": `${username}`,
        "password": `${password}`,
    };
    
    fetch('http://localhost:9001/UserDelete', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response)
    .then(data => {
      if(data.ok === true){
        console.log(data);
        console.log("USER DELETED");
        
      }
      else{
        console.log("USER FAILED")
      }
    })
    }
