
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
function Fallen(){
    let myJSONObject = {
        "searchResults": [
            { Army: "Fallen", link: "A5" },
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
            { Army: "Adepta Sororitas", link: "A5" },
            { Army: "Adeptus Astra Telepathica", link: "A5" },
            { Army: "Adeptus Custodes", link: "A5" },
            { Army: "Adeptus Mechanicus", link: "A5" },
            { Army: "Death Guard", link: "A5" },
            { Army: "FW Adeptus Astartes", link: "A5" },
            { Army: "Astra Militarum", link: "A5" },
            { Army: "Black Templars", link: "A5" },
            { Army: "Blackstone Fortress", link: "A5" },
            { Army: "Blood Angels", link: "A5" },
            { Army: "Deathwatch", link: "A5" },
            { Army: "Elucidian Starstriders", link: "A5" },
            { Army: "FW Death Korps of Krieg", link: "A5" },
            { Army: "Grey Knights", link: "A5" },
            { Army: "FW Elysians", link: "A5" },
            { Army: "Imperial Fists", link: "A5" },
            { Army: "Imperial Knights", link: "A5" },
            { Army: "Inquisition", link: "A5" },
            { Army: "Iron Hands", link: "A5" },
            { Army: "Legion of the Damned", link: "A5" },
            { Army: "Officio Assassinorum", link: "A5" },
            { Army: "Raven Guard", link: "A5" },
            { Army: "Salamanders", link: "A5" },
            { Army: "Sisters of Silence", link: "A5" },
            { Army: "Space Marines", link: "A5" },
            { Army: "Space Wolves", link: "A5" },
            { Army: "Titan Legions", link: "A5" },
            { Army: "Ultramarines", link: "A5" },
            { Army: "White Scars", link: "A5" },
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