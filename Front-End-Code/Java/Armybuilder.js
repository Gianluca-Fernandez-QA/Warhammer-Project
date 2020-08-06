
function Aeldari(){
    let myJSONObject = {
        "searchResults": [
            { Army: "Craftworld", link: "A5" },
            { Army: "FW Corsairs", link: "A5" },
            { Army: "Harlequins", link: "A5" },
            { Army: "Ynnari", link: "A5" },
        ]
    };
    let z = document.getElementById("dropDownBtn");
    for(var i = 0; i <= Object.keys(myJSONObject.searchResults).length-1; i++) {
        let a = document.createElement("a");
    a.className="dropdown-item";
    b = myJSONObject.searchResults[i].link;
    a.onclick = function a(){
        jsonImp(b);
    };
    a.innerHTML = myJSONObject.searchResults[i].Army;
    z.appendChild(a);
    }
    
    
}
function Chaos(){
    let myJSONObject = {
        "searchResults": [
            { Army: "Chaos Knights", link: "A5" },
            { Army: "Chaos Space Marines", link: "A5" },
            { Army: "Daemons", link: "A5" },
            { Army: "Dark Mechanicum", link: "A5" },
            { Army: "Death Guard", link: "A5" },
            { Army: "FW Heretic Astartes", link: "A5" },
            { Army: "FW Renegade and Heretics", link: "A5" },
            { Army: "Gellerpox Infected", link: "A5" },
            { Army: "Servants of the Abyss", link: "A5" },
            { Army: "Thousand Sons", link: "A5" },
            { Army: "Titanicus Traitoris", link: "A5" },
        ]
    };
    let z = document.getElementById("dropDownBtn");
    for(var i = 0; i <= Object.keys(myJSONObject.searchResults).length-1; i++) {
        let a = document.createElement("a");
    a.className="dropdown-item";
    b = myJSONObject.searchResults[i].link;
    a.onclick = function a(){
        jsonImp(b);
    };
    a.innerHTML = myJSONObject.searchResults[i].Army;
    z.appendChild(a);
    }
    
    
}
function jsonImp(a1){
console.log(a1);
}