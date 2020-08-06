window.onload = function doSomething() {
    let y = document.getElementById("fill")
    for (let i = 1; i <= 12; i++) {
        
      
    let x = document.createElement("div");   // Get the element with id="demo"
    x.className =`col-sm-1`;
    x.id = "demo";
    for (let i = 1; i <= 7; i++) {
    let div = document.createElement('div');
    div.id="smlColor";
    div.style.backgroundColor = "red";
    x.appendChild(div);
    }
    
    y.appendChild(x);
    }
    
}
