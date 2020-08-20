window.onload = function a(){
armyStorer();
}

function armyStorer() {
    let usercookie = getCookie("username")
    let passCookie = getCookie("password")
    // if (usercookie.length != 0) {
        //redirect somewhere 

        let data = {
            "userName": `${usercookie}`,
            "password": `${passCookie}`
        };
// Example POST method implementation:
    // Default options are marked with *
    fetch('http://localhost:9001/ArmyRead', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
          let drpDown = document.getElementById("DropDwn")
          for(let i = 0;i<=data.length-1;i++){
        console.log(data[i][0]);
        let Army = document.createElement("a");
        Army.className = "dropdown-item";
        Army.innerHTML = `${data[i][0]}`;
        Army.onclick = function a(){stringdiv(data[i][1]);}
        drpDown.appendChild(Army);
          }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}



function stringdiv(a) {
console.log(a)
    let cardHeader = document.getElementById("crdHead");
    let part = a.substring(
        a.indexOf("¤")+1,
        a.indexOf("¤", a.indexOf("¤") + 1))
        cardHeader.innerHTML = `${part}`;
  a = a.replace(`¤${part}¤`, "");
  console.log(a);
    part = a.substring(
        a.indexOf("¥"),
        a.indexOf("¥", a.indexOf("¥") + 1)+1)
    a = a.replace(part, "");
    console.log(a);
    let table = document.getElementById("shpLst");
    let itemNum = (a.split("¬").length);
    console.log(itemNum);
    for (let i = 1; i < itemNum; i++) {
        let row = document.createElement("tr");
        let quantity = a.charAt(0);
        let quan = document.createElement("td");
        quan.innerHTML = `${quantity}`;
        row.appendChild(quan);
        a = a.replace(quantity, "");
        let replaName = a.substring(a.indexOf("¬"), a.indexOf("#") + 1);
        
        let nameof = a.substring(a.indexOf("¬") + 1, a.indexOf("#"));
       console.log(nameof);
       let nameModel = document.createElement("td");
        nameModel.innerHTML = `${nameof}`;
        row.appendChild(nameModel);
        a = a.replace(`${replaName}`, "");

        let ReplVal = a.substring(
            a.indexOf("@"),
            a.indexOf("@", a.indexOf("@") + 1) + 1);
            
        let value1 = a.substring(
            a.indexOf("@") + 1,
            a.indexOf("@", a.indexOf("@") + 1));
            let valuetd = document.createElement("td");
        valuetd.innerHTML = `${value1}`;
        row.appendChild(valuetd);
            console.log(value1);
        a = a.replace(`${ReplVal}`, "");
        table.appendChild(row);
    }
console.log(a);
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }