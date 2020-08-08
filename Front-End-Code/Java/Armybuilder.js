let armyString;
function clearDropbox() {
    let select = document.getElementById("dropDownBtn");
    select.innerHTML = "";
}
function Aeldari() {
    clearDropbox();
    let myJSONObject = {
        "searchResults": [
            { Army: "Craftworld", link: 'Aeldari-Craftworld.json' },
            { Army: "FW Corsairs", link: "Aeldari-Corsairs.json" },
            { Army: "Harlequins", link: "Aeldari-Harleyquins.json" },
            { Army: "Ynnari", link: "Aeldari-Ynnari.json" },
        ]
    };
    let z = document.getElementById("dropDownBtn");
    for (var i = 0; i <= Object.keys(myJSONObject.searchResults).length - 1; i++) {
        let a = document.createElement("a");
        a.className = "dropdown-item";
        let bubble = myJSONObject.searchResults[i].link;
        a.onclick = function a() {
            jsonImp(`${bubble}`);
        };
        a.innerHTML = myJSONObject.searchResults[i].Army;
        z.appendChild(a);
    }


}
function Chaos() {
    clearDropbox();
    let myJSONObject = {
        "searchResults": [
            { Army: "Chaos Knights", link: "Chaos-Knights.json" },
            { Army: "Chaos Space Marines", link: "ChaosSpaceMarines.json" },
            { Army: "Daemons", link: "ChaosDaemons.json" },
            { Army: "Dark Mechanicum", link: "ChaosDarkMechanicus.json" },
            { Army: "Death Guard", link: "ChaosDeathGuard.json" },
            { Army: "FW Heretic Astartes", link: "ChaosFWHereticAstartes.json" },
            { Army: "FW Renegade and Heretics", link: "ChaosRenegades.json" },
            { Army: "Gellerpox Infected", link: "Chaos-GellerpoxInfected.json" },
            { Army: "Thousand Sons", link: "Chaos-ThousandSons.json" },
            { Army: "Titanicus Traitoris", link: "ChaosTitanicus.json" },
        ]
    };
    let z = document.getElementById("dropDownBtn");
    for (var i = 0; i <= Object.keys(myJSONObject.searchResults).length - 1; i++) {
        let a = document.createElement("a");
        a.className = "dropdown-item";
        let bubble = myJSONObject.searchResults[i].link;
        a.onclick = function a() {
            jsonImp(`${bubble}`);
        };
        a.innerHTML = myJSONObject.searchResults[i].Army;
        z.appendChild(a);
    }


}
function Fallen() {
    clearDropbox();
    let myJSONObject = {
        "searchResults": [
            { Army: "Fallen", link: "Fallen.json" },
        ]
    };
    let z = document.getElementById("dropDownBtn");
    for (var i = 0; i <= Object.keys(myJSONObject.searchResults).length - 1; i++) {
        let a = document.createElement("a");
        a.className = "dropdown-item";
        b = myJSONObject.searchResults[i].link;
        a.onclick = function a() {
            jsonImp(b);
        };
        a.innerHTML = myJSONObject.searchResults[i].Army;
        z.appendChild(a);
    }


}
function Imperium() {
    clearDropbox();
    let myJSONObject = {
        "searchResults": [
            { Army: "Adepta Sororitas", link: "AdeptaSororitas.json" },
            { Army: "Adeptus Custodes", link: "Custodes.json" },
            { Army: "Adeptus Mechanicus", link: "AdeptusMechanicus.json" },
            { Army: "FW Adeptus Astartes", link: "AdeptusAstartes.json" },
            { Army: "Astra Militarum", link: "AstraMilitarum.json" },
            { Army: "Blackstone Fortress", link: "BlackFortress.json" },
            { Army: "Blood Angels", link: "BloodAngels.json" },
            { Army: "Dark Angels", link: "BloodAngels.json" },
            { Army: "Deathwatch", link: "Deathwatch.json" },
            { Army: "Elucidian Starstriders", link: "Elucidian StarStriders.json" },
            { Army: "FW Death Korps of Krieg", link: "DeathKorps.json" },
            { Army: "Grey Knights", link: "GreyKnights.json" },
            { Army: "FW Elysians", link: "Elysian.json" },
            { Army: "Imperial Knights", link: "ImpKnights.json" },
            { Army: "Inquisition", link: "Inquisition.json" },
            { Army: "Legion of the Damned", link: "LegionDamned.json" },
            { Army: "Officio Assassinorum", link: "OfficioAssassinorum.json" },
            { Army: "Sisters of Silence", link: "SIS.json" },
            { Army: "Space Marines", link: "Space Marines.json" },
            { Army: "Space Wolves", link: "SpaceWolves.json" },
            { Army: "Titan Legions", link: "Titans.json" },
        ]
    };
    let z = document.getElementById("dropDownBtn");
    for (var i = 0; i <= Object.keys(myJSONObject.searchResults).length - 1; i++) {
        let a = document.createElement("a");
        a.className = "dropdown-item";
        let bubble = myJSONObject.searchResults[i].link;
        a.onclick = function a() {
            jsonImp(`${bubble}`);
        };
        a.innerHTML = myJSONObject.searchResults[i].Army;
        z.appendChild(a);
    }


}
function Necrons() {
    clearDropbox();
    let myJSONObject = {
        "searchResults": [
            { Army: "Necrons", link: "Necrons.json" },

        ]
    };
    let z = document.getElementById("dropDownBtn");
    for (var i = 0; i <= Object.keys(myJSONObject.searchResults).length - 1; i++) {
        let a = document.createElement("a");
        a.className = "dropdown-item";
        b = myJSONObject.searchResults[i].link;
        a.onclick = function a() {
            jsonImp(b);
        };
        a.innerHTML = myJSONObject.searchResults[i].Army;
        z.appendChild(a);
    }


}
function Orks() {
    clearDropbox();
    let myJSONObject = {
        "searchResults": [
            { Army: "Orks", link: "Orc.json" },

        ]
    };
    let z = document.getElementById("dropDownBtn");
    for (var i = 0; i <= Object.keys(myJSONObject.searchResults).length - 1; i++) {
        let a = document.createElement("a");
        a.className = "dropdown-item";
        b = myJSONObject.searchResults[i].link;
        a.onclick = function a() {
            jsonImp(b);
        };
        a.innerHTML = myJSONObject.searchResults[i].Army;
        z.appendChild(a);
    }


}
function TauEmpire() {
    clearDropbox();
    let myJSONObject = {
        "searchResults": [
            { Army: "T'au Empire", link: "TAU.json" },

        ]
    };
    let z = document.getElementById("dropDownBtn");
    for (var i = 0; i <= Object.keys(myJSONObject.searchResults).length - 1; i++) {
        let a = document.createElement("a");
        a.className = "dropdown-item";
        b = myJSONObject.searchResults[i].link;
        a.onclick = function a() {
            jsonImp(b);
        };
        a.innerHTML = myJSONObject.searchResults[i].Army;
        z.appendChild(a);
    }


}
function Tyranids() {
    clearDropbox();
    let myJSONObject = {
        "searchResults": [
            { Army: "Genestealer Cults", link: "GenestealerCult.json" },
            { Army: "Tyranids", link: "Tyranids.json" },
        ]
    };
    let z = document.getElementById("dropDownBtn");
    for (var i = 0; i <= Object.keys(myJSONObject.searchResults).length - 1; i++) {
        let a = document.createElement("a");
        a.className = "dropdown-item";
        b = myJSONObject.searchResults[i].link;
        a.onclick = function a() {
            jsonImp(b);
        };
        a.innerHTML = myJSONObject.searchResults[i].Army;
        z.appendChild(a);
    }


}
function jsonImp(a1) {
    let tempBox = document.getElementById("Temp");
    if(document.getElementById("Del") !== null){
        let d = document.getElementById("Del");
        d.parentNode.removeChild(d);};
    let dpDwn = document.createElement("div");
    dpDwn.className = "dropdown show";
    dpDwn.id ="Del";
    let atoggle = document.createElement("BUTTON");
    atoggle.className = "btn btn-secondary btn-lg dropdown-toggle";
    atoggle.setAttribute("type", "button");
    atoggle.id = "dropdownMenuLink";
    atoggle.setAttribute("data-toggle", "dropdown");
    atoggle.setAttribute("aria-haspopup", "true");
    atoggle.setAttribute("aria-expanded", "false");
    atoggle.innerHTML = "UNITS";
    dpDwn.appendChild(atoggle);
    let menu = document.createElement("div");
    menu.className = "dropdown-menu";
    menu.setAttribute("aria-labelledby", "dropdownMenuButton");
    fetch(`../JsonFiles/${a1}`)
    .then(
      function(response){
        if(response.status !==200){
          console.log("Looks like there is an issue!!!"+response.status);
          return;
        }
        response.json().then(function(data){
            console.log(response.status);
            let pointValueSelector;
            for (let i = 0; i < 3; i++) {

                if(data.catalogue.sharedSelectionEntries.selectionEntry[1].costs.cost[i]._name == "pts"){
                    pointValueSelector = i;

                };
            }
            for (let i = 0; i <= Object.keys(data.catalogue.sharedSelectionEntries.selectionEntry).length - 1; i++) {
                let a = document.createElement("a");
                a.className = "dropdown-item";
                
                if(data.catalogue.sharedSelectionEntries.selectionEntry[i]._name !== null){
                a.innerHTML = `NAME : ${data.catalogue.sharedSelectionEntries.selectionEntry[i]._name}   POINT VALUE: ${data.catalogue.sharedSelectionEntries.selectionEntry[i].costs.cost[pointValueSelector]._value}`;
                console.log("Hi");
                }
                menu.appendChild(a);
            }
          
        });
      }
    )
    .catch(function(err){
      console.log("Fetch went wrong");
    })
    
    dpDwn.appendChild(menu);
    
    tempBox.appendChild(dpDwn);
}
