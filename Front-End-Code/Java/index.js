window.onload = function doSomething() {
    
    var x = document.getElementById("demo");   // Get the element with id="demo"
    
    
    let div = document.createElement('div');
    div.id="smlColor";
    div.style.backgroundColor = "red";
    x.appendChild(div);
    let div1 = document.createElement('div');
    div1.id="smlColor";
    div1.style.backgroundColor = "blue";
    x.appendChild(div1);
    }

